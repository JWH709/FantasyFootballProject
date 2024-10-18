import React from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const AuthButton = () => {
    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    const handleAuth = async () => {

        try {
            const authUrlResponse = await axios.get('http://localhost:5000/auth/yahoo');
            const authUrl = authUrlResponse.data.authUrl;
            window.open(authUrl, '_self');
        } catch (error) {
            console.error('Error during authentication:', error);
        }
    };

    return (
        <>
            {isLoading && (
                <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
                        <CircularProgress color="secondary" />
                    </Stack>
            )}
            {!isLoading && (
                <Box sx={{ '& button': { m: 1 } }}>
                <Button size='large' onClick={()=> {
                    handleAuth()
                    setIsLoading(true)
                }}>
                    Authorize With Yahoo
                </Button>
            </Box>
            )}
        </>
    );
};

export default AuthButton;
