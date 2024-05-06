/*
import { m } from 'framer-motion';
// @mui
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import { MotionViewport, varFade, varZoom } from 'src/components/animate';
// Victory
import { VictoryPie, VictoryAnimation, VictoryLabel } from 'victory';
import { Box } from '@mui/material';

// ---------------------------------------------------------------------------------

const SKILLS = [
    {
        title: 'HTML',
        percent: 95,
        certLink: '',
        type: 'hard',
        section: 'web',
        data: getData(95),
        state: {
            percent: 95,
            data: getData(95).toString(),
        },
    },
    {
        title: 'CSS',
        percent: 95,
        certLink: '',
        type: 'hard',
        section: 'web',
        data: getData(95),
        state: {
            percent: 95,
            data: getData(95).toString(),
        },
    },
    {
        title: 'JavaScript',
        percent: 80,
        certLink: '',
        type: 'hard',
        section: 'web',
        data: getData(80),
        state: {
            percent: 80,
            data: getData(80).toString(),
        },
    },
    {
        title: 'Typescript',
        percent: 80,
        certLink: '',
        type: 'hard',
        section: 'web',
        data: getData(80),
        state: {
            percent: 80,
            data: getData(80).toString(),
        },
    },
    {
        title: 'Java',
        percent: 70,
        certLink: '',
        type: 'hard',
        section: 'mob/desk',
        data: getData(70),
        state: {
            percent: 70,
            data: getData(70).toString(),
        },
    },
    {
        title: 'Python',
        percent: 20,
        certLink: '',
        type: 'hard',
        section: 'mob/desk',
        data: getData(20),
        state: {
            percent: 20,
            data: getData(20).toString(),
        },
    },
    {
        title: 'PHP',
        percent: 70,
        certLink: '',
        type: 'hard',
        section: 'web',
        data: getData(70),
        state: {
            percent: 70,
            data: getData(70).toString(),
        },
    },
    {
        title: 'MySQL',
        percent: 80,
        certLink: '',
        type: 'hard',
        section: 'web',
        data: getData(80),
        state: {
            percent: 80,
            data: getData(80).toString(),
        },
    },
    {
        title: 'SQL',
        percent: 80,
        certLink: '',
        type: 'hard',
        section: 'web',
        data: getData(80),
        state: {
            percent: 80,
            data: getData(80).toString(),
        },
    },
    {
        title: 'C#',
        percent: 30,
        certLink: '',
        type: 'hard',
        section: 'mob/desk',
        data: getData(30),
        state: {
            percent: 30,
            data: getData(30).toString(),
        },
    },
    {
        title: 'C',
        percent: 25,
        certLink: '',
        type: 'hard',
        section: 'mob/desk',
        data: getData(25),
        state: {
            percent: 25,
            data: getData(25).toString(),
        },
    },
    {
        title: 'Comunication',
        percent: 80,
        certLink: '',
        type: 'soft',
        section: 'soft',
        data: getData(80),
        state: {
            percent: 80,
            data: getData(80).toString(),
        },
    },
    {
        title: 'Team working',
        percent: 100,
        certLink: '',
        type: 'soft',
        section: 'soft',
        data: getData(100),
        state: {
            percent: 100,
            data: getData(100).toString(),
        },
    },
    {
        title: 'Leadership',
        percent: 90,
        certLink: '',
        type: 'soft',
        section: 'soft',
        data: getData(90),
        state: {
            percent: 90,
            data: getData(90).toString(),
        },
    },
]
function getData(percent: number) {
    return [{ x: 1, y: percent }, { x: 2, y: 100 - percent }];
}

// function skillPie(index: number) {
//     const state = {
//         "percent": SKILLS[index].percent,
//         "data": SKILLS[index].data.toString()
//     };
//     // return state;

//     return (
//         <m.div variants={varZoom().in}>
//             <Typography variant='h5'> {SKILLS[index].title} </Typography>
//             <svg viewBox="0 0 400 400">
//                 <VictoryPie
//                     standalone={false}
//                     animate={{ duration: 1000 }}
//                     width={400} height={400}
//                     data={SKILLS[index].data}
//                     innerRadius={120}
//                     cornerRadius={25}
//                     labels={() => null}
//                     style={{
//                         data: {
//                             fill: ({ datum }) => {
//                                 let color = "red"
//                                 if (datum.y > 30)
//                                     if (datum.y > 60) color = "green";
//                                     else color = "orange";

//                                 return datum.x === 1 ? color : "transparent";
//                             }
//                         }
//                     }}
//                 />
//                 <VictoryAnimation duration={1000} data={state}>
//                     {(newProps) => (
//                         <VictoryLabel
//                             textAnchor="middle" verticalAnchor="middle"
//                             x={200} y={200}
//                             text={`${Math.round(newProps.percent as number)}%`}
//                             style={{ fontSize: 45 }}
//                         />
//                     )
//                     }
//                 </VictoryAnimation>
//             </svg>
//         </m.div>
//     );
// }

function printSelPie(card: any, section: string) {
    if (card.section !== section)
        return ("")
    return (
        <m.div variants={varZoom().in}>
            <Typography variant='h5'> {card.title} </Typography>
            <svg viewBox="0 0 400 400">
                <VictoryPie
                    standalone={false}
                    animate={{ duration: 1000 }}
                    width={400} height={400}
                    data={card.data}
                    innerRadius={120}
                    cornerRadius={25}
                    labels={() => null}
                    style={{
                        data: {
                            fill: ({ datum }) => {
                                let color = "red"
                                if (datum.y > 30)
                                    if (datum.y > 60) color = "green";
                                    else color = "orange";

                                return datum.x === 1 ? color : "transparent";
                            }
                        }
                    }}
                />
                <VictoryAnimation duration={1000} data={card.state}>
                    {(newProps) => (
                        <VictoryLabel
                            textAnchor="middle" verticalAnchor="middle"
                            x={200} y={200}
                            text={`${Math.round(newProps.percent as number)}%`}
                            style={{ fontSize: 45 }}
                        />
                    )
                    }
                </VictoryAnimation>
            </svg>
        </m.div>
    )
}

export default function HomeSkills() {


    return (
        <Container
            component={MotionViewport}
            sx={{
                py: { xs: 10, md: 15 },
            }}
            id="skills"
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
                    <Typography variant="h2">My Skills</Typography>
                </m.div>

                <Box>
                    <m.div variants={varFade().inDown}>
                        <Typography variant="h4">Web Skills</Typography>
                    </m.div>

                    <Box
                        gap={{ xs: 3, lg: 10 }}
                        display="grid"
                        alignItems="center"
                        gridTemplateColumns={{
                            xs: 'repeat(2, 1fr)',
                            md: 'repeat(4, 1fr)',
                        }}>
                        {SKILLS.map((card) => printSelPie(card, 'web'))}
                    </Box>
                </Box>


                <Box>
                    <m.div variants={varFade().inDown}>
                        <Typography variant="h4">Desktop/Mobile Skills</Typography>
                    </m.div>

                    <Box
                        gap={{ xs: 3, lg: 10 }}
                        display="grid"
                        alignItems="center"
                        gridTemplateColumns={{
                            xs: 'repeat(2, 1fr)',
                            md: 'repeat(4, 1fr)',
                        }}>
                        {SKILLS.map((card) => printSelPie(card, 'mob/desk'))}
                    </Box>
                </Box>

                <Box>
                    <m.div variants={varFade().inDown}>
                        <Typography variant="h2">Soft skills</Typography>
                    </m.div>

                    <Box
                        gap={{ xs: 3, lg: 10 }}
                        display="grid"
                        alignItems="center"
                        gridTemplateColumns={{
                            xs: 'repeat(2, 1fr)',
                            md: 'repeat(4, 1fr)',
                        }}>
                        {SKILLS.map((card) => printSelPie(card, 'soft'))}
                    </Box>
                </Box>
            </Stack>
        </Container>

    );
}*/
