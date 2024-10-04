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
        borderRadius: '15px',
        width: '60%',
        height: '80%',
        marginBottom: '1%',
        backgroundColor: 'aliceblue'
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
                <div className={'message_' + i.sender + '_text_wrapper'}>
                    <p className={"message_" + i.sender + "_text"}>{i.message}</p>
                </div>
            </div>
        )
    })}</div>
)
}

export default ChatDisplay