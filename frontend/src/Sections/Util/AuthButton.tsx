import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const AuthButton = () => {
    const navigate = useNavigate()
    const [callStatus, setCallStatus] = React.useState<boolean>(false)
    const [authStatus, setAuthStatus] = React.useState<boolean>(false)

    React.useEffect(()=> {
        if(callStatus) {
            const callBackEnd = async () => {
                const endPoint = 'http://localhost:5000/auth/yahoo'

                try {
                    const response = await axios.get(endPoint)
                    const authUrl = response.data.authUrl
                    window.open(authUrl, '_blank')
                    setAuthStatus(true)                                     
                } catch (error) {
                    setAuthStatus(false)                   
                    console.log(error)
                }
            }
            callBackEnd()
        }
    },[callStatus, ])

    React.useEffect(()=>{
        if(authStatus) {
            navigate('/chat')
        }
    },[navigate, authStatus])

    return (
        <>
            <Box sx={{ '& button': { m: 1 } }}>
                <Button size='large' onClick={()=> {
                        setCallStatus(true)
                        }}>Authorize With Yahoo</Button>
            </Box>
        </>
    )
}

export default AuthButton