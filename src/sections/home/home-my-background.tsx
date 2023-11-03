import { m } from 'framer-motion';
// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import { MotionViewport, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

const CARDS = [
  {
    icon: ' /assets/images/about/Logo_UNIMI.svg',
    title: 'Università degli Studi di Milano',
    description: 'September 2023 - Now',
    width: 130,
    height: 130,
  },
  {
    icon: ' /assets/images/about/Logo_JM.png',
    title: 'Istituto Superiore Jean Monnet',
    description: 'September 2018 - July 2023',
    width: 160,
    height: 100,
  },
  {
    icon: ' /assets/images/about/CCIT_Logo.svg',
    title: 'Cyberchallenge.it',
    description: 'January 2022 - June 2022',
    width: 250,
    height: 70,
  },
  {
    icon: ' /assets/images/about/Logo_start2impact.png',
    title: 'start2impact University',
    description: 'February 2020 - February 2021',
    width: 100,
    height: 100,
  },
];

// ----------------------------------------------------------------------

export default function HomeMyBackground() {
  return (
    <Container
      id="background"
      component={MotionViewport}
      sx={{
        py: { xs: 10, md: 15 },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          textAlign: 'center',
          mb: { xs: 5, md: 10 },
        }}
      >
        <m.div variants={varFade().inDown}>
          <Typography variant="h2">Discover my background</Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography variant="h3">Study route</Typography>
        </m.div>
      </Stack>

      <Box
        gap={{ xs: 3, lg: 10 }}
        display="grid"
        alignItems="center"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
        }}
      >
        {CARDS.map((card, index) => (
          <m.div variants={varFade().inUp} key={card.title}>
            <Card
              sx={{
                textAlign: 'center',
                boxShadow: { md: 'none' },
                p: (theme) => theme.spacing(10, 5),
                ...(index === 1 && {
                  boxShadow: (theme) => ({
                    md: `-40px 40px 80px ${
                      theme.palette.mode === 'light'
                        ? alpha(theme.palette.grey[500], 0.16)
                        : alpha(theme.palette.common.black, 0.4)
                    }`,
                  }),
                }),
                ...(index === 2 && {
                  boxShadow: (theme) => ({
                    md: `40px -40px 80px ${
                      theme.palette.mode === 'light'
                        ? alpha(theme.palette.grey[500], 0.16)
                        : alpha(theme.palette.common.black, 0.4)
                    }`,
                  }),
                }),
                bgcolor: 'background.default',
              }}
            >
              <Box
                component="img"
                src={card.icon}
                alt={card.title}
                width={card.width}
                height={card.height}
                sx={{ mx: 'auto' }}
              />

              <Typography variant="h5" sx={{ mt: 8, mb: 2 }}>
                {card.title}
              </Typography>

              <Typography sx={{ color: 'text.secondary' }}>{card.description}</Typography>
            </Card>
          </m.div>
        ))}
      </Box>
    </Container>
  );
}
