import AdvisoryHistoryScreen from "../Extras/AdvisoryHistoryScreen";
import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
  KeyboardAvoidingView,
  Modal,
} from "react-native";

const marketData = {
  Wheat: { price: 2050, yesterday: 2000 },
  Rice: { price: 1980, yesterday: 1985 },
  Maize: { price: 1650, yesterday: 1640 },
};

const ChatbotScreen = () => {
  const [messages, setMessages] = useState([
    {
      id: "1",
      text: "👋 Namaste! I’m your Farm Advisor. How can I help you today?",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  const [showSearch, setShowSearch] = useState(false);
  const [showNewChat, setShowNewChat] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  const flatListRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const showSub = Keyboard.addListener("keyboardDidShow", (e) => {
      setKeyboardHeight(e.endCoordinates.height / 2);
    });
    const hideSub = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardHeight(0);
    });

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  useEffect(() => {
    flatListRef.current?.scrollToEnd({ animated: true });
  }, [messages, keyboardHeight]);

  const addMessage = (text, sender) => {
    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), text, sender },
    ]);
  };

  const generateBotReply = (msg) => {
    const lowerMsg = msg.toLowerCase();
    const cropMatch = lowerMsg.match(/wheat|rice|maize/);
    if (cropMatch) {
      const crop = cropMatch[0];
      const data = marketData[crop.charAt(0).toUpperCase() + crop.slice(1)];
      if (data)
        return `🌾 ${crop.charAt(0).toUpperCase() + crop.slice(1)} Price Today: ₹${
          data.price
        } / Quintal\n(Yesterday: ₹${data.yesterday})`;
    }
    if (lowerMsg.includes("my crops"))
      return "⭐ Your favorite crops are: Wheat, Rice";
    if (lowerMsg.includes("help"))
      return "You can ask about crop prices, market trends, or your favorite crops.";
    return "Sorry, I don't have information on that.";
  };

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    addMessage(trimmed, "user");
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      addMessage(generateBotReply(trimmed), "bot");
      setIsTyping(false);
    }, 800);
  };

  const dismissKeyboard = () => Keyboard.dismiss();

  const renderMessage = ({ item }) => (
    <View
      style={[
        styles.message,
        item.sender === "user" ? styles.userMessage : styles.botMessage,
      ]}
    >
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Options */}
      <View style={styles.topOptions}>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => setShowSearch(true)}
        >
          <Text style={styles.optionText}>🔍 Search Library</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => setShowHistory(true)}
        >
          <Text style={styles.optionText}>📜 Advisory History</Text>
        </TouchableOpacity>
      </View>

      {/* Chat Section */}
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
      >
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
          <View style={{ flex: 1 }}>
            <FlatList
              ref={flatListRef}
              data={messages}
              keyExtractor={(item) => item.id}
              renderItem={renderMessage}
              contentContainerStyle={[
                styles.chatContainer,
                { paddingBottom: keyboardHeight + 60 },
              ]}
              keyboardShouldPersistTaps="handled"
            />
            {isTyping && (
              <Text style={styles.typingIndicator}>Assistant is typing...</Text>
            )}

            <View
              style={[styles.inputContainer, { marginBottom: keyboardHeight }]}
            >
              <TouchableOpacity style={styles.micButton}>
                <Text style={styles.icon}>🎤</Text>
              </TouchableOpacity>
              <TextInput
                ref={inputRef}
                style={styles.input}
                value={input}
                onChangeText={setInput}
                placeholder="Type your question…"
                onSubmitEditing={handleSend}
                returnKeyType="send"
                blurOnSubmit={false}
                autoCorrect={false}
                autoCapitalize="none"
              />
              <TouchableOpacity
                style={styles.sendButton}
                onPress={handleSend}
              >
                <Text style={styles.sendText}>➤</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

      {/* Floating New Chat Button */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => setShowNewChat(true)}
      >
        <Text style={styles.fabText}>➕</Text>
      </TouchableOpacity>

      {/* Search Library Modal */}
      <Modal visible={showSearch} animationType="slide">
        <SafeAreaView style={{ flex: 1, padding: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>📚 Search Library</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search crop, fertilizer..."
          />
          <TouchableOpacity
            onPress={() => setShowSearch(false)}
            style={styles.closeButton}
          >
            <Text style={{ color: "#fff", fontWeight: "bold" }}>Close</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>

      {/* New Chat Modal */}
      <Modal visible={showNewChat} animationType="slide">
        <SafeAreaView style={{ flex: 1, padding: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>🆕 New Chat</Text>
          <Text>Start a fresh conversation with the advisor.</Text>

          <TouchableOpacity
            onPress={() => {
              setMessages([
                {
                  id: "1",
                  text: "👋 New conversation started. How can I help you?",
                  sender: "bot",
                },
              ]);
              setShowNewChat(false);
            }}
            style={styles.closeButton}
          >
            <Text style={{ color: "#fff", fontWeight: "bold" }}>Start</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>

      {/* Advisory History Modal */}
      <Modal visible={showHistory} animationType="slide">
        <AdvisoryHistoryScreen onClose={() => setShowHistory(false)} />
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  topOptions: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    backgroundColor: "#f9f9f9",
  },
  optionButton: {
    padding: 8,
    backgroundColor: "#E8F5E9",
    borderRadius: 10,
  },
  optionText: { fontSize: 16, color: "#2E7D32", fontWeight: "bold" },
  chatContainer: { padding: 12, flexGrow: 1 },
  message: {
    maxWidth: "80%",
    marginVertical: 8,
    padding: 14,
    borderRadius: 18,
    elevation: 2,
  },
  userMessage: { alignSelf: "flex-end", backgroundColor: "#A5D6A7" },
  botMessage: { alignSelf: "flex-start", backgroundColor: "#F1F1F1" },
  messageText: { fontSize: 16, color: "#333" },
  typingIndicator: {
    marginLeft: 20,
    marginBottom: 8,
    fontSize: 14,
    color: "#666",
  },
  inputContainer: {
    flexDirection: "row",
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    padding: 12,
    backgroundColor: "#F5F5F5",
    borderRadius: 24,
    marginHorizontal: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    minHeight: 48,
  },
  sendButton: {
    backgroundColor: "#2E7D32",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 24,
  },
  sendText: { fontSize: 20, color: "#fff", fontWeight: "bold" },
  micButton: { padding: 8 },
  icon: { fontSize: 22 },
  searchInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginVertical: 20,
  },
  closeButton: {
    backgroundColor: "#2E7D32",
    padding: 14,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },
  fab: {
    position: "absolute",
    bottom: 100,
    right: 10,
    backgroundColor: "#2E7D32",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  fabText: { fontSize: 28, color: "#fff", fontWeight: "bold" },
});

export default ChatbotScreen;
