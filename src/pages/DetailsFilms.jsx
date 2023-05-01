import React, { useRef } from 'react';
import Navbar from '../components/Navbar';
import CardDetails from '../components/CardDetails';
import { styled } from '@mui/material/styles';



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


const DetailsFilms = () => {
  return (
    <div>
        <Navbar></Navbar>
        <PositionImage>
            <ImageContainer>
                <Image src="https://a.ltrbxd.com/resized/sm/upload/a6/th/cz/kf/la-la-land-1200-1200-675-675-crop-000000.jpg?v=874a46b231" />
                <ImageOverlay />
                <ImageBorder />
            </ImageContainer>
        </PositionImage>
        <CardDetails></CardDetails>

    </div>
  )
};

export default DetailsFilms;
