import React from "react";
import { Routes, Route } from "react-router-dom";
import Chat from "./Sections/Chat/Chat";
import AuthButton from "./Sections/Util/AuthButton";

interface Message {
  message: string;
  sender: string;
  number: number;
}

function App() {
  const [messageHistory, setMessageHistory] = React.useState<Message[]>([]);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%',
    }}>
      <Routes>
        <Route path="/" element={<AuthButton />} />
        <Route path="/chat" element={<Chat messageHistory={messageHistory} setMessageHistory={setMessageHistory} />} />
      </Routes>
    </div>
  );
}

export default App;