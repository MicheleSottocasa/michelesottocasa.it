import { m } from 'framer-motion';
// @mui
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import { MotionViewport, varFade } from 'src/components/animate';


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
                <m.div variants={varFade().inDown}>
                    <Typography variant="h2">Projects made</Typography>
                </m.div>
            </Stack>
        </Container>

    );
}