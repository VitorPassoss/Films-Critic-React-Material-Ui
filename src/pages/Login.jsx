import React, {useState,useEffect} from "react";
import { TextField, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom"
import { Container } from "@mui/system";
import axios from "axios";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';



 
const Login = () => {
    const [Username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const baseURL = "http://localhost:8000/api/token/";
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault()
 
        setEmailError(false)
        setPasswordError(false)
 
        if (Username == '') {
            setEmailError(true)
        }
        if (password == '') {
            setPasswordError(true)
        }
 
        if (Username && password) {
            sendData(Username,password)
        }
    }
     
    const sendData = (Username, password) => {
        const body = {
            "username": Username,
            "password": password
          };

        axios.post(baseURL, body).then((response) => {
          NotificationUser(response)
        }).catch(error=>{
            setEmailError(true)
            setPasswordError(true)
            NotificationUser(error.response)
        });
      }

    const NotificationUser = (response) =>{
        console.log(response)
        console.log(response.status)
        if(response.status == 200){
            const token = response.data.access_token
            console.log(token)
            Cookies.set('auth_cookie', token);
            navigate('/'); 
        }else{
            console.log("erro na requisicao")
        }

    }

    return ( 
        <React.Fragment>
            <Container sx={{ width: 1/4 ,mt:25}} >
            <form autoComplete="off" onSubmit={handleSubmit}>
            <Typography sx={{ fontWeight: 'medium',fontSize: 25, mb:2}} color="secondary">Login</Typography>
            <TextField 
                onChange={e => setUsername(e.target.value)}
                required
                variant="outlined"
                color="secondary"
                type="text"
                sx={{
                    mb: 3,
                    "& label.Mui-focused": {
                        color: "secondary"
                    },
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                            borderColor: "#1de9b6"
                        },
                        "&:hover fieldset": {
                            borderColor: "#1de9b6"
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: "secondary"
                        },
                        "& input::placeholder": {
                            color: "white"
                        }
                    }
                }}
                InputProps={{
                    inputProps: {
                      placeholder: 'Insira seu username',
                      style: { color: 'white'} // Defina a cor do placeholder aqui
                    }
                  }}
                fullWidth
                value={Username}
                error={emailError}
                
            />

            <TextField 
                onChange={e => setPassword(e.target.value)}
                required
                variant="outlined"
                color="secondary"
                type="password"
                value={password}
                error={passwordError}
                fullWidth
                sx={{
                    mb: 3,
                    "& label.Mui-focused": {
                        color: "secondary"
                    },
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                            borderColor: "#1de9b6"
                        },
                        "&:hover fieldset": {
                            borderColor: "#1de9b6"
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: "secondary"
                        },
                        "& input::placeholder": {
                            color: "white"
                        }
                    }
                }}
                InputProps={{
                    inputProps: {
                      placeholder: 'Insira sua senha',
                      style: { color: 'white'} // Defina a cor do placeholder aqui
                    }
                  }}
            />

                 <Button variant="outlined" color="secondary" type="submit">Login</Button>
             
        </form>
        <Link  to="/register"><Typography sx={{ color:"#1de9b6", fontSize:"12px", marginTop:"14px"}}>Register here</Typography></Link>
            </Container>
        </React.Fragment>
     );
}
 
export default Login;