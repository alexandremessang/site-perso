import React from 'react';
import { SecondSection } from './SecondSection'
import { Box, Text, Button, Collapsible } from 'grommet';
import { Down, Up, Github, Linkedin } from 'grommet-icons';
import { MainBox } from './MainBox';

export const FirstSection = () => {
    const [open, setOpen] = React.useState(false);
    const [section, setSection] = React.useState("#first-section");

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
        if(open){
            setOpen(false);
            setSection("#second-section");            
        } else {   
            setOpen(true);
            // second section anchor not working
            setSection("#first-section");
         
        }
    } 


    return (
        <Box
            className="content-box"
            id="#first-section"
            background="light-2"
            animation={{ type: 'fadeIn', duration: 1500 }}
            align="center"
        >
            <Box
                className="header-box"
                fill="horizontal"
                justify="center"
                align="center"
                gap="xsmall"
                direction="row"
                elevation="medium"
                background="light-3"
                style={{position: 'fixed', zIndex: 100 }}
            >
                <Text
                    size="2em"
                >
                    {"Alexandre"}
                </Text>
                <Text
                    size="1.9em"
                    weight="bold"
                    color="#DB7F1F"
                >
                    {"MESSANG"}
                </Text>
            </Box>
            <Box
                height="50px"
            />
            <MainBox />
            <Box
                as="footer"
                className="Footer-box"
                fill="horizontal"
                basis="full"
                height="auto"
                justify="end" 
                align="center"  
                pad="large"             
            >
                <Box
                    fill="horizontal"
                    gap="medium"
                    
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

