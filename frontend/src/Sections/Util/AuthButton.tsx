import axios from 'axios';
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

interface AuthButtonProps {
    setAuthStatus: (authStatus:boolean) => void;
}

const AuthButton = ({setAuthStatus}:AuthButtonProps) => {

    const [callStatus, setCallStatus] = React.useState<boolean>(false)
    const [isAuthorizing, setIsAuthorizing] = React.useState<boolean>(false)

    React.useEffect(()=> {
        if(callStatus) {
            setIsAuthorizing(true)
            const callBackEnd = async () => {
                const endPoint = 'http://localhost:5000/auth/yahoo'

                try {
                    const response = await axios.get(endPoint)
                    const authUrl = response.data.authUrl
                    console.log(authUrl)
                    window.open(authUrl, '_blank')
                    if(response.data.status == 'success') {
                        setAuthStatus(true)
                        setIsAuthorizing(false)
                    }
                } catch (error) {
                    setAuthStatus(false)
                    setIsAuthorizing(false)
                    console.log(error)
                }
            }
            callBackEnd()
        }
    },[callStatus, setAuthStatus, setIsAuthorizing])
    return (
        <>
        {!isAuthorizing && 
            <Box sx={{ '& button': { m: 1 } }}>
                <Button size='large' onClick={()=> {
                        setCallStatus(true)
                        }}>Authorize With Yahoo</Button>
            </Box>
        }
        {isAuthorizing &&
                    <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
                    <CircularProgress color="secondary" />
                </Stack>
                }
        </>
    )
}

export default AuthButton