import axios from 'axios';
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

interface AuthButtonProps {
    setAuthStatus: (authStatus:boolean) => void;
}

const AuthButton = ({setAuthStatus}:AuthButtonProps) => {

    const [callStatus, setCallStatus] = React.useState<boolean>(false)

    React.useEffect(()=> {
        if(callStatus) {
            const callBackEnd = async () => {
                const endPoint = 'http://localhost:5000/test'

                try {
                    const response = await axios.get(endPoint)
                    if(response.data.status == 'success') {
                        setAuthStatus(true)
                    }
                } catch (error) {
                    setAuthStatus(false)
                    console.log(error)
                }
            }
            callBackEnd()
        }
    },[callStatus, setAuthStatus])
    return (
        <Box sx={{ '& button': { m: 1 } }}>
            <Button size='large' onClick={()=> {
                setCallStatus(true)
            }}>Authorize With Yahoo</Button>
        </Box>
    )
}

export default AuthButton