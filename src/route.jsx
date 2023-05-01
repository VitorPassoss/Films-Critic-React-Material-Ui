import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { ThemeProvider, Global } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import ProtectedRoutes from "./components/PrivateRoute";
import { Reviews } from "@mui/icons-material";
import HomeReviews from "./pages/HomeReviews";
import NotFound from "./pages/NotFound";
import DetailsFilms from "./pages/DetailsFilms";


const theme = createTheme({
  palette: {
    primary: {
      main: "#14181C",
    },
    secondary: {
      main: "#1de9b6",
    }
  },
  typography: {
    fontFamily: [
      'Poppins',
      'sans-serif',
    ].join(','),
  },
});

const PathRouter = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Global
          styles={{
            body: {
              margin: 0,
              padding: 0,
              backgroundColor:"#1E252C",
            },
          }}
        />
        <Routes>
                <Route exact path="/" element={
                  <ProtectedRoutes>
                    <Home />
                  </ProtectedRoutes>
                } />
              <Route exact path="/reviews" element={
              <ProtectedRoutes>
                <HomeReviews/>
              </ProtectedRoutes>
              } />

              <Route path="/filme/:id" element={
                  <ProtectedRoutes>
                    <DetailsFilms></DetailsFilms>
                  </ProtectedRoutes>
              } />
             
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default PathRouter;
