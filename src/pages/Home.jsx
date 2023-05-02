import React, { useContext, useEffect }  from "react";
import Navbar from '../components/Navbar'
import CardsFilms from "../components/CardsFilms";
import { Divider, Grid ,Card, Typography, CardContent, CardActions, CardMedia} from "@mui/material";
import { Box, Container } from "@mui/system";
import axios from "axios";
import Carousel from 'react-material-ui-carousel';
import { Link } from "react-router-dom";
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
import CardsDefault from "../components/CardsDefault";
import { Fade } from '@mui/material';


const Home = () => {

  const [films, setFilms] = React.useState([]);
  const review = 5
  useEffect(  ()=>{
    const baseURL = "http://localhost:8000/films/"
    axios.get(baseURL).then(response=>{
      setFilms(response.data.films)
      console.log(response.data.films)
    })
  }, []); 



    const itemsPerPage = 4;
    const slides = films.reduce((resultArray, item, index) => {
      const chunkIndex = Math.floor(index / itemsPerPage);
  
      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = [];
      }
  
      resultArray[chunkIndex].push(item);
  
      return resultArray;
    }, []);
  


  
  return (
    <div >
        <Navbar></Navbar>
        <Container>
        <Fade in={true} timeout={10} style={{ transitionDelay: '400ms' }}>
        {films && (
                 <Grid container spacing={3} sx={{mt:16}}>
                 <Grid item xs={12}>
                   <Carousel animation="slide" itemsPerSlide={itemsPerPage}>
                     {slides.map((slide, index) => (
                       <Grid container spacing={3} key={index}>
                         {slide.map((item, index) => (
                           <Grid item xs={12} sm={6} md={3} key={index}>
                                <Link to={`/filme/${item.pk}`}>
                                  <Card sx={{ maxWidth: 345, maxHeight:"450px", backgroundColor: "#1A1E24" }}>
                                      <Box>
                                          <CardMedia
                                        sx={{
                                          height: 355,
                                          objectFit: "contain",
                                          objectPosition: "center",
                                        }}
                                        image={item.image_url}
                                        
                                      />
                                      </Box>
                                      
                                    <CardContent sx={{margin:0, paddingBottom:0}}>
                                      <Box component="div" sx={{ display:"flex", justifyContent:"space-between"}}>
                                        
                                        
                                        <Box sx={{ display: "flex" }}>
                                          {[...Array(review)].map((_, i) => (
                                            <StarIcon sx={{ color:"#1de9b6"}} key={i}></StarIcon>
                                          ))}
                                        </Box>
                                      </Box>
                                    </CardContent>

                                </Card>
                                  </Link>
                           </Grid>
                         ))}
                       </Grid>
                     ))}
                   </Carousel>
                 </Grid>
               </Grid>
        )}
        </Fade>
        
            <Typography sx={{color:"white", fontSize:"20px",marginTop:2}}>Recents Reviews</Typography>
            <Divider sx={{ backgroundColor: '#ccc' , marginTop:2 }} />
            

            <CardsDefault></CardsDefault>
           
        </Container>
        </div>
  )
}

export default Home;
