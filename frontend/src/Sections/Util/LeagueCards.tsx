import axios from "axios"
import React from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

interface LeagueCardsProps {
    setSelectedLeague: React.Dispatch<React.SetStateAction<null | string>>;
  }

const LeagueCards = ({setSelectedLeague}: LeagueCardsProps) => {
    const [leagues, setLeagues] = React.useState<[] | null>(null)

    React.useEffect(()=> {
        axios.get('http://localhost:5000/leagues')
        .then(response => {
            setLeagues(response.data);
        })
        .catch(error => {
            console.error('Error fetching tokens:', error);
        });
    },[])

    return (
        <>
            {leagues && 
                <div>
                {leagues.map((i) => {
                    return (
                        <div key={i.league[0].league_id[0]}>
                            <Card sx={{ maxWidth: 345 }} onClick={()=> {
                                setSelectedLeague(i.league[0].league_key)
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
                                {i.league[0].name}
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

export default LeagueCards