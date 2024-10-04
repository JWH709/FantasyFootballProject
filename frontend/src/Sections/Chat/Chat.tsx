import React from "react";
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ChatDisplay from "./ChatDisplay";
import axios from "axios";
import '../../styles/chat.css'

interface ChatProps {
  messageHistory: Message[];
  setMessageHistory: React.Dispatch<React.SetStateAction<Message[]>>;
}

interface Message {
  message: string;
  sender: string;
  number: number;
}

const Chat = ({ messageHistory, setMessageHistory }: ChatProps) => {
  const [textValue, setTextValue] = React.useState<string | null>(null);

  const makeGPTCall = React.useCallback(()=>{
    const callBackEnd = async ()=> {
      const endPoint = 'http://localhost:5000/test/gpt'
      try {
        const response = await axios.get(endPoint)
        console.log(response)
        if(response.data.object == "chat.completion") {
          const newMessage = { 
            message: response.data.choices[0].message.content, 
            sender: 'gpt', 
            number: messageHistory.length + 2  //this is mega scuffed lol
          }
          setMessageHistory(prev => [...prev, newMessage])
        }
      } catch(error) {
        console.log(error)
      }
    }
    callBackEnd()
  },[messageHistory, setMessageHistory])

  console.log(messageHistory)

  return (
    <div className="chat-container">
      <ChatDisplay messageHistory={messageHistory} />
      <div className="input-container">
        <Box
          component="form"
          sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
          noValidate
          autoComplete="off"
          className="text-field-container"
          style={{
            width: "75%"
          }}
        >
          <div>
            <TextField
              id="outlined-multiline-flexible"
              label="Message Chat"
              multiline
              maxRows={1}
              className="text-field"
              onChange={(e) => {
                setTextValue(e.target.value);
              }}
              style={{
                width: '100%'
              }}
            />
          </div>
        </Box>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          className="send-button"
          onClick={() => {
            if (textValue != null) {
              const newMessage = { message: textValue, sender: 'user', number: messageHistory.length + 1 };
              setMessageHistory(prev => [...prev, newMessage]);
              setTimeout(()=>{
                makeGPTCall()
              }, 2000)
            }
          }}
          style={{
            marginLeft: '2%',
            height: '60%'
          }}
        >
          Send
        </Button>
      </div>
    </div>
  );
}

export default Chat;
