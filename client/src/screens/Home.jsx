import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Slider from '../components/Slider';
import Button from '@mui/material/Button';
import ProductCard from '../components/ProductCard';
import Typography from '@mui/material/Typography';
import { v4 as uuidv4 } from 'uuid';

// Import Icons
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// Import Images
import slider1 from '../assets/images/slide1.jpg';
import slider2 from '../assets/images/slide2.jpg';
import slider3 from '../assets/images/slide3.jpg';
const images = [slider1, slider2, slider3];
import espressoImg from '../assets/images/espresso.png';
import freddoEspressoImg from '../assets/images/freddo-espresso.jpg';
import cappucinoImg from '../assets/images/cappuchino.webp';
import freddoCappucinoImg from '../assets/images/freddo-cappuccino.jpg';
const products = [
  {
    productId: 1,
    productName: 'Espresso',
    productDescription: '100% Arabica',
    productImg: espressoImg,
    productImgAlt: 'product',
  },
  {
    productId: 2,
    productName: 'Freddo Espresso',
    productDescription: '100% Arabica',
    productImg: freddoEspressoImg,
    productImgAlt: 'product',
  },
  {
    productId: 3,
    productName: 'Cappucino',
    productDescription: '100% Arabica',
    productImg: cappucinoImg,
    productImgAlt: 'product',
  },
  {
    productId: 4,
    productName: 'Freddo Cappucino',
    productDescription: '100% Arabica',
    productImg: freddoCappucinoImg,
    productImgAlt: 'product',
  },
];
// Components styles
import './Home.css';

const SliderStyles = {
  maxWidth: '300px',
  width: '100%',
  borderRadius: '12px',
  maxHeight: '200px',
  margin: '0 auto 50px',
};
const LocationInputStyles = {
  width: '100%',
  margin: '0 auto 10px',
};

const Home = () => {
  return (
    <div className='home-container'>
      <Typography variant='h1'>Hello,</Typography>
      <Slider images={images} styles={SliderStyles} />
      <Autocomplete
        style={{ ...LocationInputStyles }}
        id='location-input'
        freeSolo
        options={[
          'Mock address 1',
          'Mock address 2',
          'Mock address 3',
          'Mock address 4',
        ]}
        renderInput={(params) => (
          <>
            <TextField
              {...params}
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <InputAdornment position='start'>
                    <LocationOnIcon sx={{ color: '#ccc' }} />
                  </InputAdornment>
                ),
              }}
              label='Your address'
            />
          </>
        )}
      ></Autocomplete>
      <div className='find-my-location'>
        <a href='javascript:void()'>Find my location</a>
      </div>
      <div style={{ width: '100%', display: 'flex' }}>
        <Button
          variant='outlined'
          style={{
            marginLeft: 'auto',
            background: '#fcb2b2',
            border: 'none',
          }}
        >
          <NavigateNextIcon sx={{ color: 'black', fontSize: '2rem' }} />
        </Button>
      </div>
      {products.map(
        ({
          productName,
          productDescription,
          productImg,
          productImgAlt,
          productId,
        }) => (
          <ProductCard
            key={uuidv4()}
            productId={productId}
            productName={productName}
            productDescription={productDescription}
            productImg={productImg}
            productImgAlt={productImgAlt}
          />
        )
      )}
    </div>
  );
};

export default Home;
