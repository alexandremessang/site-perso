import React from 'react';
import { Box} from 'grommet';
import { AboutMe } from './AboutMe';
import { Experience } from './Experience';
import { Skills } from './Skills';


export const SecondSection = () => {

    return (
        <Box 
            flex
            background="light-2"
            fill="horizontal"
            id="#second-section" 
            justify="center"
            align="center"          
        >
            <Box 
                basis="xsmall" 
            />
            <AboutMe />
           <Box 
                basis="small" 
            />
            <Experience />
            <Box 
                basis="small" 
            />
            <Skills />



        </Box>
        

    )
}

