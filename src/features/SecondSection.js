import React from 'react';
import { Box, Avatar, Text, Grid, Image, Button, Meter, Anchor } from 'grommet';
import { Down, Github, Linkedin } from 'grommet-icons';

export const SecondSection = () => {
    return (
        <Box 
            background="light-1"
            fill="horizontal"
            id="second-section"
            gap="xlarge"
            
        >
            <Box/>
           <Text>
               {"Hello"}
           </Text>
            
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

