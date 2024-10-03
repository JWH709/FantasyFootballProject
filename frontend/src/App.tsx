import React from "react";
import Chat from "./Sections/Chat/Chat";

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
      <Chat messageHistory={messageHistory} setMessageHistory={setMessageHistory} />
    </div>
  );
}

export default App;
