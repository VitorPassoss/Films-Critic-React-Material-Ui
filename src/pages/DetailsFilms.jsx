import React, { useRef,useEffect, useState} from 'react';
import Navbar from '../components/Navbar';
import CardDetails from '../components/CardDetails';
import { styled } from '@mui/material/styles';
import { useParams } from "react-router-dom";
import axios from "axios";


const PositionImage = styled('div')({
  display:"flex",
  flexDirection:"flex",
  justifyContent:"center"
});

const ImageContainer = styled('div')({
  position: 'absolute',
  width:"100%",
  zIndex: -1,
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `linear-gradient(to top, #1E252C 55%, rgba(0, 0, 0, 0))`,
  },
});

const Image = styled('img')({
  width:"100%",
  top:0
});

const ImageOverlay = styled('div')({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: `linear-gradient(to bottom, transparent,#1E252C)`,
});

const ImageBorder = styled('div')({
  border: '4px solid #333',
  boxSizing: 'border-box',
  padding: '4px',
});


function DetailsFilms() {
  
  const { id } = useParams();
  const [film, setFilm] = useState({});
  const [useReviews, setReviews] = useState({});
  const [status, setStatus] = useState("pending");

  useEffect(() => {
    const baseURL = "http://localhost:8000/films/details/" + id;
    axios
      .get(baseURL)
      .then((response) => {
        setFilm(response.data.films);
        setReviews(response.data.reviews)
        setStatus("success");
      })
      .catch((error) => {
        setStatus("error");
      });
  }, []);

  if (status === "pending") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>404 - Film not found</div>;
  }

  return (
    <div>
      <Navbar />
      <PositionImage>
        <ImageContainer>
          <Image src={film.banner_url} />
          <ImageOverlay />
          <ImageBorder />
        </ImageContainer>
      </PositionImage>
      <CardDetails
        title={film.name}
        description={film.description}
        author={film.author}
        image_url={film.image_url}
        useReviews={useReviews}
      ></CardDetails>
    </div>
  );
}

export default DetailsFilms;
