import { useState, useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

interface Props {
  closeChat: () => void;
}

interface Message {
  text: string;
  sender: "user" | "bot";
}

const ChatWindow = ({ closeChat }: Props) => {

  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hola 👋 Soy el asistente de la intranet. ¿En qué puedo ayudarte?",
      sender: "bot"
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const addMessage = (text: string) => {

    const userMessage: Message = { text, sender: "user" };

    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {

      const botReply: Message = {
        text: "Estoy en modo demo 🤖 pronto tendré IA.",
        sender: "bot"
      };

      setMessages(prev => [...prev, botReply]);

    }, 700);

  };

  useEffect(() => {

    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });

  }, [messages]);

  return (

    <div className="chat-window">

      <div className="chat-header">

        <div className="chat-title">
          🤖 Asistente Corporativo
        </div>

        <button className="chat-close" onClick={closeChat}>
          ✕
        </button>

      </div>

      <div className="chat-messages">

        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg} />
        ))}

        <div ref={messagesEndRef} />

      </div>

      <ChatInput onSend={addMessage} />

    </div>

  );
};

export default ChatWindow;