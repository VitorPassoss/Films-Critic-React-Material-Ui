import { Avatar, Button, Card, CardActions, CardContent, CardMedia, Divider, Grid, IconButton, TextField, Tooltip, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import { styled } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';

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
const CardDetails = () => {
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
                    image={"https://upload.wikimedia.org/wikipedia/pt/c/c0/La_La_Land_%28filme%29.png"}
                                    
                    />
                    
                </Card>
            </Grid>
            <Grid item xs={9}>
            <Card elevation={0} sx={{height:"100%", backgroundColor:"transparent", padding:"60px"}}>
                <Header >
            
                    <Title sx={{mr:2}} style={{ fontFamily: 'Poppins' }}>La la land</Title>
                    <Typography sx={{fontSize:"16px",mr:2,}} style={{ fontFamily: 'Poppins' }} >2016</Typography>
                    <Typography style={{ fontFamily: 'Poppins' }}>Directed by Damien Chazelle</Typography>
                </Header>
                <Grid container spacing={4}>
                    <Grid item xs={7}>
                        <CardContent sx={{padding:"0px",color:"white",maxWidth:"400px"}} style={{ fontFamily: 'Poppins' }}>
                        HERE’S TO THE FOOLS WHO DREAM.
                        Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.  
                        
                    </CardContent>
                    <CardActions sx={{margin:0, padding:0}}>
                          <Button contained size="large"  sx={{ backgroundColor:"#1de9b6", marginTop:4,color:"white",fontSize:"10px"}} >Fazer avaliacao</Button>
                    </CardActions>
                    <TextField
                            variant="outlined"
                            placeholder="Write awesome things about yourself"
                            multiline
                            sx={{width:"100%",borderColor: 'white '}}
                            rows={2}
                            rowsMax={10}
                            
                            InputProps={{
                                inputProps: {
                                  placeholder: 'Meu placeholder',
                                  style: { color: 'white'} // Defina a cor do placeholder aqui
                                }
                              }}
                        />
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
                                  <StarIcon fontSize="small" sx={{ color:"#1de9b6"}} key={i}></StarIcon>
                            ))}
                        </Box>
                        </Card>
                       
                    </Grid>
                    
                    <Grid item xs={12}>
                        <Divider sx={{ backgroundColor: '#ccc' }} />
                        <Typography sx={{color:"white" , paddingTop:"10px"}}>RECENT REVIEWS</Typography>

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
                                    <Typography sx={{fontSize:"15px", marginLeft:2}}>Review by (nome do usuario)</Typography>
                                    <Grid>
                                        <Grid item xs={12}>
                                            <Typography sx={{marginLeft:2,fontSize:"13px",marginTop:0}}>
                                            "Comentario do usuario"

                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                                
                            </Box>
                        </Card>
                        
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
                                    <Typography sx={{fontSize:"15px", marginLeft:2}}>Review by (nome do usuario)</Typography>
                                    <Grid>
                                        <Grid item xs={12}>
                                            <Typography sx={{marginLeft:2,fontSize:"13px",marginTop:0}}>
                                            "Comentario do usuario"

                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                                
                            </Box>
                        </Card>
                        
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