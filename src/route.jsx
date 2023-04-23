import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { ThemeProvider, Global } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import ProtectedRoutes from "./components/PrivateRoute";

const theme = createTheme({
  palette: {
    primary: {
      main: "#42a5f5",
    },
    secondary: {
      main: "#1de9b6",
    },
  },
});

const PathRouter = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Global
          styles={{
            body: {
              backgroundColor: "white",
              margin: 0,
              padding: 0
            },
          }}
        />
        <Routes>
        <Route exact path='/' element={<ProtectedRoutes/>}>
              <Route path="/" element={<Home/>}/>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default PathRouter;
