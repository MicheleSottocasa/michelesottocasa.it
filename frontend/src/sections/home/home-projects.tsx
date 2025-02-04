import * as React from 'react';
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
const PROJECTS = [
  {
    image: '/assets/images/projects/CCStudio.png',
    title: 'Business WebSite',
    name: 'CCStudio Textile Design',
    link: 'https://ccstudiodesign.com/',
    date: 'November 2020',
    description1: 'Responsive and complex site.',
    description2:
      'Language recognition and automatic redirection to the correct translation of the site.',
    description3:
      'Presentation of the various products that can be purchased, presentation of the team, a section dedicated to contact and e-commerce (Work in progress)',
    width: 500,
  },
  {
    image: '/assets/images/projects/EscapePrizon.png',
    title: 'Java Game',
    name: 'EscapePrizon',
    link: 'https://github.com/EseTecnologie/EscapePriZon',
    date: 'May 2021',
    description1: 'Java game made with the LibGDX library.',
    description2: 'The game is a 2D platformer with a pixel art style.',
    description3: 'The game is based on the escape of a prisoner from a prison.',
    width: 500,
  },
  {
    image: '/assets/images/projects/Wedding.png',
    title: 'Wedding WebSite',
    name: 'AM Wedding',
    link: 'https://am-wedding.it/',
    date: 'December 2024',
    description1: 'Responsive and medium complexity site. Made with nextJS',
    description2: 'Providing information about the date, including the times and locations of the ceremony and reception',
    description3: 'Guests can confirm their attendance by clicking on a ring-shaped icon and contribute to the honeymoon through a dedicated link',
    width: 500,
  },
];

export default function HomeProjects() {
  return (
    <Container
      component={MotionViewport}
      sx={{
        py: { xs: 10, md: 15 },
      }}
      id="projects"
      className="section"
    >
      <Stack
        spacing={3}
        sx={{
          textAlign: 'center',
          mb: { xs: 5, md: 10 },
        }}
      >
        <m.div>
          <Typography variant="h2">Projects maded</Typography>
        </m.div>
      </Stack>

      <Box gap={{ xs: 3, lg: 10 }}>
        {PROJECTS.map((card, index) => (
          <m.div key={card.title}>
            <Card
              sx={{
                textAlign: 'center',
                p: (theme) => theme.spacing(10, 5),
                bgcolor: (theme) => theme.palette.grey[200],
                mb: { xs: 5, md: 10 },
                mt: { xs: 5, md: 10 },
                boxShadow: (theme) => ({
                  md: `-40px -40px 80px ${
                    theme.palette.mode === 'light'
                      ? alpha(theme.palette.grey[700], 0.16)
                      : alpha(theme.palette.common.black, 0.4)
                  }`,
                }),
                ...(index === 1 && {
                  boxShadow: (theme) => ({
                    md: `40px -40px 80px ${
                      theme.palette.mode === 'light'
                        ? alpha(theme.palette.grey[700], 0.16)
                        : alpha(theme.palette.common.black, 0.4)
                    }`,
                  }),
                }),
              }}
            >
              <Typography variant="h3" sx={{ mt: 0, mb: 2 }}>
                {card.title}
              </Typography>
              <Typography variant="body1" sx={{ mt: 0, mb: 5 }}>
                <a href={card.link} target="_blank" rel="noopener noreferrer">
                  {card.name}
                </a>{' '}
                | ({card.date})
              </Typography>
              <Box
                gap={{ xs: 3, lg: 10 }}
                display="grid"
                alignItems="center"
                gridTemplateColumns={{
                  xs: 'repeat(1, 1fr)',
                  md: 'repeat(2, 1fr)',
                }}
              >
                <Box
                  component="img"
                  src={card.image}
                  alt={card.title}
                  width={card.width}
                  sx={{ mx: 'auto' }}
                />

                <Typography sx={{ color: 'text.secondary' }}>
                  {card.description1}
                  <br />
                  {card.description2}
                  <br />
                  {card.description3}
                </Typography>
              </Box>
            </Card>
          </m.div>
        ))}
      </Box>
    </Container>
  );
}
