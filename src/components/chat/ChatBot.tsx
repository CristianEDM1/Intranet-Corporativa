import { useState } from "react";
import { MessageCircle } from "lucide-react";
import ChatWindow from "./ChatWindow";
import "./ChatBot.css";

const ChatBot = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && <ChatWindow closeChat={() => setOpen(false)} />}

      <button
        className={`chatbot-button ${open ? "active" : ""}`}
        onClick={() => setOpen(prev => !prev)}
      >
        <MessageCircle size={26} />
      </button>
    </>
  );
};

export default ChatBot;