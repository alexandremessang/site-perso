import React from 'react';
import { SecondSection } from './SecondSection'
import { Box, Avatar, Text, Grid, Image, Button, Meter, Collapsible } from 'grommet';
import { Down, Up, Github, Linkedin } from 'grommet-icons';

export const FirstSection = () => {
    const [open, setOpen] = React.useState(false);
    const [section, setSection] = React.useState("second-section");
    const [fill, setFill] = React.useState(true);
  

    const upOrDown = () => {
        if(open) {
            return (
                <Up
                    size="large"
                    color="grey"
                />
            )
        } else {
            return (
                <Down
                    size="large"
                    color="grey"
                />
            )
        }
    }

    const isOpen = () => {
        console.log(section)
        if(open){
            setOpen(false);
            setSection("#first-section");
            setFill(true);
            
        } else {   
            setOpen(true);
            // second section anchor not working
            setSection("#second-section");
            setFill(false);
        }
    } 


    return (
        <Box
            className="content-box"
            id="first-section"
            fill={fill}
            background="light-2"
            animation={{ type: 'fadeIn', duration: 1500 }}
            align="center"
        >
            <Box
                height="4vh"
            />
            <Box
                className="header-box"
                direction="row"
                gap="xlarge"
                fill="horizontal"
                justify="center"
                align="start"
            >
                <Text
                    size="3em"
                >
                    {"Alexandre"}
                </Text>
                <Text
                size="2.9em"
                    weight="bold"
                    color="#DB7F1F"
                >
                    {"MESSANG"}
                </Text>
            </Box>
            <Box
                height="xsmall"
            />
            <Box
                fill="horizontal"
                pad="large"
            >
                <Grid
                    className="Grid-main"
                    fill="horizontal"
                    rows={['medium']}
                    columns={[
                        '2/4',
                        '2/4'
                    ]}
                    areas={[[
                        'left',
                        'right'
                    ]]}
                >
                    <Box
                        className="Left-box"
                        gridArea="left"
                        align="center"
                        justify="center"
                    >
                        <Avatar
                            className="Avatar-img"
                            background="accent-2" 
                            src="img/moi.png"
                            size="300px"
                        />
                    </Box>

                    <Box
                        className="Right-box"
                        gridArea="right"
                        justify="center"
                        align="center"
                        gap="xlarge"
                    >
                        <Box
                            direction="row"
                            gap="small"
                            align="center"
                        >
                            <Text
                                label="TEST"
                                round="full"
                                color="black"
                            >
                                {"Etudiant en Mastère Expert Développement Web à"}
                            </Text>
                            <Image 
                                src="img/logo_ynov_campus_rvb.png" 
                                height="50px"
                                width="100px"
                            />
                        </Box>

                        <Grid
                            className="Grid-skills"
                            fill="horizontal"
                            rows={[
                                'xsmall',
                                'xsmall',
                                'xsmall',
                                'xsmall'
                            ]}
                            columns={[
                                '2/4',
                                '2/4'
                            ]}
                            areas={[
                                { name: 'left-1', start: [0, 0], end: [1, 0] },
                                { name: 'right-1', start: [1, 0], end: [1, 0] },
                                { name: 'left-2', start: [0, 1], end: [1, 1] },
                                { name: 'right-2', start: [1, 1], end: [1, 1] },
                                { name: 'left-3', start: [0, 2], end: [1, 2] },
                                { name: 'right-3', start: [1, 2], end: [1, 2] },
                                { name: 'left-4', start: [0, 3], end: [1, 3] },
                                { name: 'right-4', start: [1, 3], end: [1, 3] }
                            ]}
                        >
                            <Box 
                                gridArea="left-1"
                            >
                                <Text
                                    weight="bold"
                                >
                                    {"Développement"}
                                </Text>
                            </Box>
                            <Box 
                                gridArea="right-1"
                            >
                                <Meter
                                    values={[{
                                        value: 80,
                                        label: 'sixty',
                                        color: '#DB7F1F',
                                    }]}
                                    aria-label="meter"
                                    round={true}
                                    background="#D6D6D6"
                                />
                            </Box>
                            <Box 
                                gridArea="left-2"
                            >
                                <Text
                                    weight="bold"
                                >
                                    {"Communication"}
                                </Text>
                            </Box>
                            <Box 
                                gridArea="right-2"
                            >
                                <Meter
                                    values={[{
                                        value: 50,
                                        label: 'sixty',
                                        color: '#DB7F1F',
                                    }]}
                                    aria-label="meter"
                                    round={true}
                                    background="#D6D6D6"
                                />
                           </Box>
                           <Box 
                                gridArea="left-3"
                            >
                                <Text
                                    weight="bold"
                                >
                                    {"Conception"}
                                </Text>
                            </Box>
                            <Box 
                                gridArea="right-3"
                            >
                                <Meter
                                    values={[{
                                        value: 60,
                                        label: 'sixty',
                                        color: '#DB7F1F',
                                    }]}
                                    aria-label="meter"
                                    round={true}
                                    background="#D6D6D6"
                                />
                            </Box>
                            <Box 
                                gridArea="left-4"
                            >
                                <Text
                                    weight="bold"
                                >
                                    {"Bonne humeur"}
                                </Text>
                            </Box>
                            <Box 
                                gridArea="right-4"
                            >
                                <Meter
                                    values={[{
                                        value: 100,
                                        label: 'sixty',
                                        color: '#DB7F1F',
                                    }]}
                                    aria-label="meter"
                                    round={true}
                                    background="#D6D6D6"
                                />
                            </Box>
                        </Grid>
                    </Box>
                </Grid>
            </Box>
            <Box
                className="footer-box"
                fill={true}
                justify="end" 
                align="center"               
            >
                <Box
                    fill="horizontal"
                    gap="medium"
                    pad="large"
                    align="start"
                    direction="row"
                >
                    <Button 
                        href="https://www.linkedin.com/in/alexandre-messang/"   
                        target="_blank"
                    >
                        <Linkedin 
                            size="large"
                        />
                    </Button>
                    <Button 
                        href="https://github.com/alexandremessang"   
                        target="_blank"
                    >
                        <Github 
                            size="large"
                        />
                    </Button>
                </Box>
                <Box
                className="drop-down"
                fill="horizontal"
                align="center"
                justify="center"
                >
                    <Button
                        href={section} 
                        plain={true}
                        size="large"
                        onClick={() => isOpen()}
                    >
                        {upOrDown}

                        </Button>
                    <Box
                        fill={true}
                    >
                    
                        <Collapsible 
                            open={open}
                        >    
                            <SecondSection />
                        </Collapsible>  
                    </Box>
                </Box>
            </Box>
            
        </Box>
    );
}

