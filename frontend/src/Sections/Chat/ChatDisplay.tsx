interface Message {
    message: string;
    sender: string;
    number: number;
    }

interface ChatDisplayProps {
    messageHistory: Message[],
}

const ChatDisplay = ({messageHistory}: ChatDisplayProps) => {    
return (
    <div style={{
        border: '2px, solid, red',
        width: '60%',
        height: '80%'
    }}>{messageHistory.map((i)=> {
        return(
            <div 
                key={'message ' + i.number} 
                className={'message_' + i.sender} 
                style={{
                    display: 'flex', 
                    flexDirection: 'row', 
                    alignItems: i.sender === 'user' ? 'flex-start' : 'flex-end',
            }}>
                <h2>{i.message}</h2>
            </div>
        )
    })}</div>
)
}

export default ChatDisplay