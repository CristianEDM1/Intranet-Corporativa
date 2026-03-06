interface Props {
  message: {
    text: string;
    sender: "user" | "bot";
  };
}

const ChatMessage = ({ message }: Props) => {

  return (
    <div className={`chat-message ${message.sender}`}>
      {message.text}
    </div>
  );
};

export default ChatMessage;