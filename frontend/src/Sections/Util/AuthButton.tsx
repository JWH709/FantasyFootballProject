import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

interface AuthButtonProps {
    setAuthStatus: (authStatus:boolean) => void
}

const AuthButton = ({setAuthStatus,}:AuthButtonProps) => {
    return (
        <Box sx={{ '& button': { m: 1 } }}>
            <Button size='large' onClick={()=> {
                setAuthStatus(true)
            }}>Authorize With Yahoo</Button>
        </Box>
    )
}

export default AuthButton