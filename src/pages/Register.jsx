import React, {useState,useEffect} from "react";
import { TextField, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom"
import { Container } from "@mui/system";
import axios from "axios";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';



 
const Register = () => {
    const [Username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const baseURL = "http://localhost:8000/register/";
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
            sendData(Username,password,email)
        }
    }
     
    const sendData = (Username, password,email) => {
        const body = {
            "username": Username,
            "password": password,
            "email":email
          };

        axios.post(baseURL, body).then((response) => {
          NotificationUser(response)
        }).catch(error=>{
            alert("erro na criacao ")
        });
      }

    const NotificationUser = (response) =>{
        console.log(response)
        console.log(response.status)
        if(response.statusText == "Created"){
            navigate('/login'); 
        }else{
            alert("Usuario nao criado")
        }

    }

    return ( 
        <React.Fragment>
            <Container sx={{ width: 1/4 ,mt:25}} >
            <form autoComplete="off" onSubmit={handleSubmit}>
            <Typography sx={{ fontWeight: 'medium',fontSize: 25, mb:2}} color="secondary">Register</Typography>
              <TextField 
                      label="Email"
                      onChange={e => setEmail(e.target.value)}
                      required
                      variant="outlined"
                      color="secondary"
                      type="text"
                      sx={{mb: 3}}
                      fullWidth
                      value={email}
                      error={emailError}
                  />
                <TextField 
                    label="Username"
                    onChange={e => setUsername(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="text"
                    sx={{mb: 3}}
                    fullWidth
                    value={Username}
                    error={emailError}
                 />
                 <TextField 
                    label="Password"
                    onChange={e => setPassword(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="password"
                    value={password}
                    error={passwordError}
                    fullWidth
                    sx={{mb: 3}}
                 />
                 <Button variant="outlined" color="secondary" type="submit">Register</Button>
             
        </form>
        <small>Need an account? <Link to="/">Register here</Link></small>
            </Container>
        </React.Fragment>
     );
}
 
export default Register;