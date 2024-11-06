import axios from "axios"
import React from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

interface TeamCardProps {
    setSelectedTeam: React.Dispatch<React.SetStateAction<null | string>>;
  }

const TeamCards = ({setSelectedTeam}: TeamCardProps) => {
    const [teams, setTeams] = React.useState<[] | null>(null)

    React.useEffect(()=> {
        axios.get('http://localhost:5000/teams')
        .then(response => {
            setTeams(response.data);
        })
        .catch(error => {
            console.error('Error fetching tokens:', error);
        });
    },[])

    return (
        <>
        {teams && 
                <div>
                {teams.map((i) => {
                    return (
                        <div key={i}>
                            <Card sx={{ maxWidth: 345 }} onClick={()=> {
                                setSelectedTeam('fix')
                            }}>
                                                <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://cdn1.iconfinder.com/data/icons/usa-cartoon-2/512/g16070-512.png"
                                alt="green iguana"
                                />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                {}
                                </Typography>
                                
                            </CardContent>
                                </CardActionArea>
                                </Card>
                        </div>
                    )
                })
                }
            </div>            
        }
        </>
    )
}

export default TeamCards