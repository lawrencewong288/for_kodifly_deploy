/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import InputAdornment from '@mui/material/InputAdornment';
import BlogDetailBackground from '../../../../assets/images/Blog/blogdetails.png';
import ProfilePic from '../../../../assets/images/Blog/Blog/profile.png';
import Container from 'components/Container';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';

const Hero = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <>
      <Box
        position={'relative'}
        sx={{
          backgroundImage:
            'url("https://assets.maccarianagency.com/backgrounds/img52.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          marginTop: -13,
          paddingTop: 13,
          '&:after': {
            position: 'absolute',
            content: '" "',
            width: '100%',
            height: '100%',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: 1,
            background: '#161c2d',
            opacity: 0.6,
          },
        }}
      >
        <Container
          zIndex={3}
          position={'relative'}
          minHeight={{ xs: 300, sm: 400, md: 600 }}
          maxHeight={600}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Box width={1}>
            <Box marginBottom={2}>
              <Typography
                textAlign={'center'}
                variant="h3"
                gutterBottom
                sx={{
                  fontWeight: 900,
                  color: 'common.white',
                }}
              >
                Lung Fu Shan Environmental Education Center
              </Typography>
            </Box>

            <Box
              padding={2}
              width={1}
              marginTop={4}
              display={'flex'}
              flexDirection={'row'}
            >
              <Avatar
                src={ProfilePic}
                sx={{ width: 66, height: 73.2, marginLeft: 5 }}
              />
              <Box marginLeft={1}>
                <Typography
                  textAlign={'center'}
                  variant="h6"
                  //  component="p"
                  color="text.primary"
                  sx={{
                    fontWeight: 400,
                    color: 'common.white',
                  }}
                >
                  Lawrence Wong
                </Typography>
                <Typography
                  textAlign={'center'}
                  variant="h6"
                  //  component="p"
                  color="text.primary"
                  sx={{
                    fontWeight: 400,
                    color: 'common.white',
                  }}
                >
                  May 19, 2021
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          width={1}
          maxHeight={120}
          bottom={0}
          position={'absolute'}
          zIndex={2}
        >
          <path
            fill={theme.palette.background.paper}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
