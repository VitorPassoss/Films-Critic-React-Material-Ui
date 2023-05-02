import { Avatar, Button, Card, CardActions, CardContent, CardMedia, Divider, Grid, IconButton, TextField, Tooltip, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React, {useState} from 'react'
import { styled } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';
import { Fade } from '@mui/material';



const Title = styled("h1")({
    fontSize:"30px",
    
  })

const Header = styled("div")({
    display:"flex",
    flexDirection:"row",
    justifyContent:"start",
    alignItems:"center",
    color:"white"
})

const RatingLayout = styled("div")({
    display:"flex",
    flexDirection:"row",
    justifyContent: 'space-between',
    padding:"20px"
})
const CardDetails = ({title,description,author,image_url, useReviews}) => {
    console.log(useReviews)
    const [isTextFieldVisible, setIsTextFieldVisible] = useState(false);

  const handleButtonClick = () => {
    setIsTextFieldVisible(!isTextFieldVisible);
  };

  const [selectedStars, setSelectedStars] = useState([false, false, false, false, false]);

  const handleHover = (num) => {
    let newSelectedStars = [...selectedStars];
    for (let i = 0; i < newSelectedStars.length; i++) {
      newSelectedStars[i] = i < num;
    }
    setSelectedStars(newSelectedStars);
  };

  const handleClick = (num) => {
    let newSelectedStars = [...selectedStars];
    for (let i = 0; i < newSelectedStars.length; i++) {
      newSelectedStars[i] = i < num;
    }
    setSelectedStars(newSelectedStars);
    console.log(num); // retorna o número de estrelas selecionadas
  };


  return (
    <Box component={"main"}>
        <Container>
        <Grid  container spacing={2} sx={{mt:35}}>
            <Grid item xs={3}>
                <Card  sx={{backgroundColor:"#1E252C"}}>
                    <CardMedia sx={{width:"100%",
                                    height: 400,
                                        objectFit: "cover",
                                        objectPosition: "center",
                                    }}
                    image={image_url}
                                    
                    />
                    
                </Card>
            </Grid>
            <Grid item xs={9}>
            <Card elevation={0} sx={{height:"100%", backgroundColor:"transparent", padding:"60px"}}>
                <Header >
            
                    <Title sx={{mr:2}} style={{ fontFamily: 'Poppins' }}>{title}</Title>
                    <Typography sx={{fontSize:"16px",mr:2,}} style={{ fontFamily: 'Poppins' }} >2016</Typography>
                    <Typography style={{ fontFamily: 'Poppins' }}>Directed by {author}</Typography>
                </Header>
                <Grid container spacing={4}>
                    <Grid item xs={7}>
                        <CardContent sx={{padding:"0px",color:"white",maxWidth:"400px"}} style={{ fontFamily: 'Poppins' }}>
                        {description}  
                        
                    </CardContent>
                    
                    <CardActions sx={{ margin: 0, padding: 0 }}>
                    <Button
                        contained
                        size="large"
                        onClick={handleButtonClick}
                        sx={{ backgroundColor: "#1de9b6", marginTop: 1, color: "white", fontSize: "10px" }}
                    >
                        {isTextFieldVisible ? 'Fechar' : 'Fazer avaliação'}
                    </Button>
                    </CardActions>

                    <Fade in={isTextFieldVisible} timeout={500} style={{ display: isTextFieldVisible ? 'flex' : 'none' }}
 >
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <TextField
                            variant="outlined"
                            multiline
                            sx={{
                                width: '100%',
                                border: 'none',
                                border: '1px solid #1de9b6',
                                marginTop: 1
                            }}
                            rows={3}
                            rowsMax={6}
                            InputProps={{
                                inputProps: {
                                placeholder: 'Insira sua avaliação',
                                style: { color: '#1de9b6' }
                                }
                            }}
                            />
                            <Box sx={{ display: 'flex',marginTop: 2  }}>
                                {[1, 2, 3, 4, 5].map((num) => (
                                    <StarIcon
                                    key={num}
                                    onMouseEnter={() => handleHover(num)}
                                    onClick={() => handleClick(num)}
                                    sx={{ cursor: 'pointer', color: selectedStars[num - 1] ? '#fdd835' : '#bdbdbd' }}
                                    />
                                ))}
                                </Box>
                            <Button
                            variant="contained"
                            size="large"
                            sx={{ backgroundColor: '#445566', color: 'white', marginTop: 2 ,'&:hover': { backgroundColor: '#1de9b6' }}}
                            >
                            Enviar avaliação
                            </Button>
                                
                        </Box>
                    </Fade>


                        
                    </Grid>
                    <Grid item xs={5}  >
                        <Card sx={{backgroundColor:"#445566"}}>
                            <RatingLayout>
                            <Box sx={{ color: 'white', fontFamily: 'Poppins', fontWeight: 300 }}>
                                Rating
                                </Box>
                                <Box sx={{ color: 'white', fontFamily: 'Poppins', fontWeight: 300 }}>
                                233 critics
                                </Box>
                            </RatingLayout>
                            <Divider sx={{ backgroundColor: '#ccc' }} />
                            <Box sx={{ display: "flex", paddingLeft:"20px", justifyContent:"center", padding:"10px"}}>
                                {[...Array(Number(5))].map((_, i) => (
                                  <StarIcon fontSize="small" sx={{ color:"#fdd835"}} key={i}></StarIcon>
                            ))}
                        </Box>
                        </Card>
                       
                    </Grid>
                    
                    <Grid item xs={12}>
                        <Divider sx={{ backgroundColor: '#ccc' }} />
                        <Typography sx={{color:"white" , paddingTop:"10px"}}>RECENT REVIEWS</Typography>
                        {useReviews.map(review=>{
                            return (
                                <Card sx={{ width: 'auto' ,boxShadow: 1, backgroundColor:"#1E252C", padding:4, marginTop:4}}>
                                    <Box sx={{display:"flex", flexDirection:"row",color:"white"}}>
                                        <Box>
                                        
                                        <Tooltip title="user">
                                        <IconButton  sx={{ p: 0 }}>
                                            <Avatar alt="test"  />
                                        </IconButton>
                                        </Tooltip>
                                        </Box>

                                        <Box>
                                            <Typography sx={{fontSize:"15px", marginLeft:2}}>Review by {review.user.username}</Typography>
                                            <Grid>
                                                <Grid item xs={12}>
                                                    <Typography sx={{marginLeft:2,fontSize:"13px",marginTop:0}}>
                                                    
                                                    <Box sx={{ display: "flex" }}>
                                                            {[...Array(Number(review.ranged))].map((_, i) => (
                                                            <StarIcon fontSize="small" sx={{ color:"#1de9b6"}} key={i}></StarIcon>
                                                            ))}
                                                    </Box>
                                                    {review.critic}

                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                        
                                    </Box>
                                </Card>
                            )
                        })}
                        
                      
                        
                    </Grid> 
                    
                </Grid>
                
            </Card>
            </Grid>
        </Grid>
    </Container>
    </Box>

  )
}

export default CardDetails