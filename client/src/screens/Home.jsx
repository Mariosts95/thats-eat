import React from 'react';

// Components
import Slider from '../components/Slider';

// MUI
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';

// Icons
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// Images
import slider1 from '../assets/images/slide1.jpg';
import slider2 from '../assets/images/slide2.jpg';
import slider3 from '../assets/images/slide3.jpg';
const images = [slider1, slider2, slider3];

// Styles
import './Home.scoped.scss';
import './Home.mui.scss';

const Home = () => {
  return (
    <>
      <div className='homepage-container'>
        <div className='homepage-wrapper'>
          <div className='left'>
            <h1>Hello there,</h1>
            <div className='address-input'>
              <Autocomplete
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
                      onChange={(e) => console.log(e.target.value)}
                      InputProps={{
                        ...params.InputProps,
                        startAdornment: (
                          <InputAdornment position='start'>
                            <LocationOnIcon />
                          </InputAdornment>
                        ),
                      }}
                      label='Your address'
                    />
                  </>
                )}
              ></Autocomplete>
              <div className='next-btn-container'>
                <Button>
                  <NavigateNextIcon />
                </Button>
              </div>
            </div>
          </div>
          <div className='right'>
            <Slider images={images} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
