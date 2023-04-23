import React, { useContext, useEffect } from "react";
import Navbar from '../components/Navbar'
import axios from "axios";
import { List, ListItem, Box, Grid } from '@mui/material';
import { Container } from "@mui/system";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Home = () => {

  const [films, setFilms] = React.useState(null);

  useEffect(()=>{
    const baseURL = "http://localhost:8000/films/"
    axios.get(baseURL).then(response=>{
      setFilms(response.data.films)
      console.log(response.data.films)
    })
  }, []); 


  return (
    <div >
        <Navbar></Navbar>
        <Container >
            {films && (
            <Grid container spacing={2}  sx={{mt:20}}>
              {films.map(film => (
                    <Grid item xs={3}>
                        <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                          sx={{ height: 210 }}
                          image={film.image_url}
                          title="green iguana"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            { film.name }
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            { film.author }
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            { film.description }
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            { film.type }
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Media geral : 3
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small">Ver Criticas</Button>
                        </CardActions>
                      </Card>
                    </Grid>
              ))}
            </Grid>
          )}
         
        </Container>
    </div>
  )
}

export default Home;
