import * as React from 'react';
import { m } from 'framer-motion';
// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
// components
import { MotionViewport, varFade } from 'src/components/animate';
// custom icons
import { CustomCompanyIcons } from 'src/assets/icons/';

// ----------------------------------------------------------------------

const STUDIES = [
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
const WORKS = [
  {
    company: 'Bottinelli Informatica',
    position: 'Software Developer',
    start: 'Jun 2022',
    end: 'Jun 2022',
    current: false,
    location: 'Tavernerio, Lombardy, Italy',
    locationType: 'On-site',
    type: 'Stage',
  },
  {
    company: 'ReLOG3P',
    position: 'Junior Developer',
    start: 'Jul 2022',
    end: 'Nov 2023',
    current: false,
    location: 'Remote',
    locationType: '',
    type: 'Part-time',
  },
  {
    company: 'FiveElements Labs',
    position: 'Frontend Web3 Developer',
    start: 'Jan 2024',
    end: 'Dec 2024',
    current: false,
    location: 'Milan, Lombardy, Italy',
    locationType: 'Ibrid',
    type: 'Part-time',
  },
];

// ----------------------------------------------------------------------

export default function HomeMyBackground() {
  return (
    <Container
      component={MotionViewport}
      sx={{
        py: { xs: 10, md: 15 },
      }}
      id="background"
      className="section"
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
        {STUDIES.map((card, index) => (
          <m.div variants={varFade().inUp} key={card.title}>
            <Card
              sx={{
                textAlign: 'center',
                boxShadow: { md: 'none' },
                p: (theme) => theme.spacing(10, 5),
                ...(index % 2 === 1 && {
                  boxShadow: (theme) => ({
                    md: `-40px 40px 80px ${
                      theme.palette.mode === 'light'
                        ? alpha(theme.palette.grey[500], 0.16)
                        : alpha(theme.palette.common.black, 0.4)
                    }`,
                  }),
                }),
                ...(index % 2 === 2 && {
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
      <Stack
        spacing={3}
        sx={{
          textAlign: 'center',
          mb: { xs: 5, md: 10 },
          mt: { xs: 5, md: 10 },
        }}
      >
        <m.div variants={varFade().inDown}>
          <Typography variant="h3">Work route</Typography>
        </m.div>
      </Stack>

      <Box>
        <Timeline>
          {WORKS.map((card) => (
            <m.div variants={varFade().inUp} key={card.company}>
              <TimelineItem>
                {/*LEFT SECTION*/}
                <TimelineOppositeContent sx={{ m: 'auto 0' }} align="right" variant="body2">
                  {/*Job description */}
                  <Box>
                    <Typography variant="h6" component="span">
                      {card.position}
                    </Typography>
                    <Typography>
                      {card.company} - {card.type}
                    </Typography>
                    <Typography color="text.secondary">{card.location}</Typography>
                  </Box>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot>
                    <CustomCompanyIcons company={card.company} />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                {/*RIGHT SECTION*/}
                <TimelineContent sx={{ py: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                  {/*Times*/}
                  <Box>
                    <Typography>
                      {card.start} {card.start !== card.end ? `- ${card.end}` : ''}
                    </Typography>
                    <Typography>
                      {distanceBetweenTwoDate(
                        card.start,
                        card.current ? new Date() : card.end
                      )}
                    </Typography>
                  </Box>
                </TimelineContent>
              </TimelineItem>
            </m.div>
          ))}
        </Timeline>
      </Box>
    </Container>
  );
}

function distanceBetweenTwoDate(firstDate: Date | string, secondDate: Date | string) {
  firstDate = new Date(firstDate);
  secondDate = new Date(secondDate);

  let yearsDiff = secondDate.getFullYear() - firstDate.getFullYear();
  let monthsDiff = secondDate.getMonth() - firstDate.getMonth() + 1;
  if (monthsDiff < 0) {
    yearsDiff -= 1;
    monthsDiff += 12;
  }
  console.log(firstDate, " - ", monthsDiff, " - ", secondDate);

  if (secondDate.getFullYear() === new Date().getFullYear()) yearsDiff -= 1;

  return yearsDiff > 0 ? `${yearsDiff} years ${monthsDiff} months` : `${monthsDiff} months`;
}
