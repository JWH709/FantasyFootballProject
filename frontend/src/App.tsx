import React from "react";
import Chat from "./Sections/Chat/Chat";
import AuthButton from "./Sections/Util/AuthButton";

interface Message {
  message: string;
  sender: string;
  number: number;
}

function App() {
  const [messageHistory, setMessageHistory] = React.useState<Message[]>([]);
  const [authStatus, setAuthStatus] = React.useState<boolean>(false)

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%',
    }}>
      {authStatus && 
        <Chat messageHistory={messageHistory} setMessageHistory={setMessageHistory} />
      }
      {!authStatus && 
        <AuthButton setAuthStatus={setAuthStatus}/>
      } 
    </div>
  );
}

export default App;
