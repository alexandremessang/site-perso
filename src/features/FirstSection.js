import React from 'react';
import { Box, Text } from 'grommet';
import { MainBox } from './MainBox';
import { FooterBox } from './FooterBox';

export const FirstSection = () => {
    


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
            <FooterBox />
            
        </Box>
    );
}

