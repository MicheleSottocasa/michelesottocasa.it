import { m } from 'framer-motion';
// @mui
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import { MotionViewport, varFade } from 'src/components/animate';
import { Avatar, Grid } from '@mui/material';


export default function HomeAboutMe() {
    return (
        <Container
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
                    <Typography variant="h2">About myself</Typography>
                </m.div>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, md: 4 }} sx={{ paddingTop: "100px" }}>
                    <Grid item xs={2}>
                        <m.div variants={varFade().inDown}>
                            <Avatar
                                alt="Sottocsa Michele"
                                src="assets/images/IMG_4532.jpeg"
                                sx={{ width: 350, height: 350, maxWidth: '100%' }}
                            />
                        </m.div>
                    </Grid>
                    <Grid item xs={2} sx={{
                        display: 'flex', alignItems: 'center'
                    }}>
                        <m.div variants={varFade().inDown}>
                            <Typography variant='body1'>
                                Welcome to my digital realm! I&apos;m a passionate teenager with a profound love for the vast, interconnected world of web development, computing, robotics, gaming, programming, and the exhilarating art of skateboarding.
                                If you&apos;re curious to explore more about who I am and what I&apos;ve been up to, feel free to navigate through this carefully curated space.
                            </Typography>
                            <Typography variant='body1' sx={{ paddingTop: "10px" }}>
                                Although I haven&apos;t ventured into the world of robotics just yet, my portfolio is still a gateway to my other passions and creative pursuits.
                                From web development and programming to gaming and skateboarding, you&apos;ll find a rich tapestry of my experiences and projects waiting for you to explore. So, take a moment to explore and introduce yourself with my digital endeavors.
                                If you&apos;d like to reach out or connect, I&apos;m just an email away. Let&apos;s make the most of our digital journey together!
                            </Typography>
                        </m.div>
                    </Grid>
                </Grid>
            </Stack>
        </Container>

    );
}