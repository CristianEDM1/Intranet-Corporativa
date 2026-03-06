import { BrowserRouter } from "react-router-dom";
import AppRouter from "@router/AppRouter";
import ChatBot from "./components/chat/ChatBot";


function App() {
  return (
    <BrowserRouter>
      <AppRouter />
      <ChatBot/>
    </BrowserRouter>
  );
}

export default App;