import React from "react";
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
import { Link } from "react-router-dom";

const CardsFilms = ({pk, image_url,name}) => {
  let review = 5
  
  
  

  return (      
          <Grid item xs={3}>
          <Link to={`/filme/${pk}`}>
          <Card sx={{ maxWidth: 345, maxHeight:"450px", backgroundColor: "#1A1E24" }}>
              <Box>
                  <CardMedia
                sx={{
                  height: 355,
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                image={image_url}
                
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
          
            <CardActions>
              <Button  sx={{ backgroundColor:"#1A1E24", margin:0,color:"#1de9b6",fontSize:"10px"}} >Ver Criticas</Button>
            </CardActions>
        </Card>
          </Link>
            
        </Grid> 
  )
}

export default CardsFilms