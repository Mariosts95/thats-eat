import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Slider from '../components/Slider';
import Button from '@mui/material/Button';

// Import Icons
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// Import Images
import slider1 from '../assets/images/slide1.jpg';
import slider2 from '../assets/images/slide2.jpg';
import slider3 from '../assets/images/slide3.jpg';
const images = [slider1, slider2, slider3];

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
      <h1>Hello,</h1>
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
    </div>
  );
};

export default Home;
