import React from 'react';
import { Box, Avatar, Heading } from 'grommet';
import ScrollAnimation from 'react-animate-on-scroll';


export const SecondSection = () => {

    

    return (
        <Box 
            flex
            background="light-2"
            fill="horizontal"
            id="#second-section"           
        >
            <Box 
                basis="small" 
            />
            <Box
                justify="center"
                align="center"
            >
                <ScrollAnimation animateIn='fadeIn'>
                <Heading >
                {"A propos de moi"}
            </Heading>
        </ScrollAnimation>
            
           </Box>
            
           <Box
                className="Left-box"
                gridArea="left"
                align="center"
                justify="center"
                fill="horizontal"
            >
                <Avatar
                    className="Avatar-img"
                    background="accent-2" 
                    src="img/moi.png"
                    size="300px"
                />
            </Box>
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
            </Box><Box
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

        </Box>
        

    )
}

