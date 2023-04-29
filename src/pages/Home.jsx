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
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';

const Home = () => {

  const [films, setFilms] = React.useState(null);
  let review = 5
  
  
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
                        <Card sx={{ maxWidth: 345, backgroundColor: "#1A1E24" }}>
                          <Box>
                               <CardMedia
                            sx={{
                              height: 300,
                              objectFit: "contain",
                              objectPosition: "center",
                            }}
                            image={film.image_url}
                            
                          />
                          </Box>

                          
                        <CardContent sx={{margin:0, paddingBottom:0}}>
                          <Box component="div" sx={{ display:"flex", justifyContent:"space-between"}}>
                            <Typography  sx={{ color:"white",margin:0 }}  gutterBottom variant="h6" component="div">
                              { film.name }
                            </Typography>
                            
                            <Box sx={{ display: "flex" }}>
                              {[...Array(review)].map((_, i) => (
                                <StarIcon sx={{ color:"#1de9b6"}} key={i}></StarIcon>
                              ))}
                            </Box>
                          </Box>
                    
                        </CardContent>
                       
                        <CardActions>
                          <Button  sx={{ backgroundColor:"#1A1E24", margin:0,color:"#1de9b6",fontSize:"10px"}} >Ver Criticas</Button>
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
