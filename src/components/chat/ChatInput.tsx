import { useState } from "react";

interface Props {
  onSend: (message: string) => void;
}

const ChatInput = ({ onSend }: Props) => {

  const [input, setInput] = useState("");

  const handleSend = () => {

    if (!input.trim()) return;

    onSend(input);

    setInput("");

  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {

    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }

  };

  return (

    <div className="chat-input">

      <input
        value={input}
        placeholder="Escribe un mensaje..."
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button onClick={handleSend}>
        Enviar
      </button>

    </div>

  );
};

export default ChatInput;