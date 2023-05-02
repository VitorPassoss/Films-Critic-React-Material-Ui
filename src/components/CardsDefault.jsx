import React, { useContext, useEffect } from "react";
import axios from "axios";
import { List, ListItem, Box, Grid ,Paper } from '@mui/material';
import { Container } from "@mui/system";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';

const CardsDefault = () => {
  const [reviews, setReviews] = React.useState(null);

  useEffect(()=>{
    const baseURL = "http://localhost:8000/"
    axios.get(baseURL).then(response=>{
      setReviews(response.data.reviews)
      console.log(response.data.reviews)
    })
  }, []); 
  return (
    <Container >
            {reviews && (
            <Grid container spacing={2}  sx={{mt:4, mb:9}}>
              {reviews.map(review => (
                <Grid item xs={6}>
                  <Paper  sx={{ maxWidth: 600, backgroundColor: "#1E252C", height:130 }} >
                    <Grid sx={{display:"flex", justifyContent:"start"}}>
                      <CardMedia sx={{
                                    width:"16%",
                                    height: 130,
                                    objectFit: "cover",
                                    objectPosition: "center",
                                  }}
                                  image={review.film.image_url}
                                  
                                />
                      <CardContent sx={{margin:0, paddingBottom:0, display:"flex",flexDirection:"column"}}>
                        <Box component="div" sx={{ display:"flex", justifyContent:"space-between"}}>
                          <Typography  sx={{ color:"white",margin:0 }}  gutterBottom variant="h6" component="div">
                              {review.film.name }
                          </Typography>
                          
                        </Box>
                        <Box component="div" sx={{ display:"flex", justifyContent:"space-between"}}>
                          <Typography  sx={{ color:"white",margin:0 }}  gutterBottom fontSize={15} component="div">
                              {review.user.username }
                          </Typography>
                          
                        </Box>
      
                        <Box sx={{ display: "flex" }}>
                                {[...Array(Number(review.ranged))].map((_, i) => (
                                  <StarIcon fontSize="small" sx={{ color:"#1de9b6"}} key={i}></StarIcon>
                                ))}
                        </Box>
      
                        <Box component="div" sx={{ display:"flex", justifyContent:"space-between"}}>
                          <Typography  sx={{ color:"white",margin:0 }}  gutterBottom fontSize={15} component="div">
                              "{review.critic}"
                          </Typography>
                          
                        </Box>
                      </CardContent>
                      </Grid>
                      
      
      
      
                  </Paper>
              </Grid>
                         
                      
                
              ))}
            </Grid>
          )}
         
        </Container>
  )
}

export default CardsDefault