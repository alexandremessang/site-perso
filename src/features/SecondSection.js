import React from 'react';
import { Box, Heading, Text, Image, Carousel } from 'grommet';
import { AboutMe } from './AboutMe';


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
            <Box
                    height="small"
                >
                    <Heading
                        textAlign="center"
                        color="#DB7F1F"
                    >
                        {"Mes réalisations"}
                    </Heading>
            </Box>  
            <Box 
                height="medium" 
                width="large" 
                overflow="hidden"
                direction="row-responsive"
            >
                <Carousel 
                    fill
                    controls={false}
                    play={5000}
                >   
                    <Box 
                        as="a" 
                        target="__blank" 
                        fill={true}
                        href="https://osev-mb.ext.carsat-mp.fr/" 
                        style={{zIndex: 99, textDecoration: "none"}}
                    >
                        <Text as="p"
                            size="large"
                            textAlign="center"
                            color="black"
                        >
                            {"Projet tutoré pour le compte de la Carsat MP"}
                        </Text>
                        <Image 
                            fit="cover" 
                            src="img/OSEV.png" 
                        />
                        
                    </Box>
                    <Box 
                        as="a" 
                        target="__blank" 
                        style={{zIndex: 99, textDecoration: "none"}}
                        width="full"
                    >
                        <Text as="p"
                            size="large"
                            textAlign="center"
                            color="black"
                        >
                            {"Chambre d'hôtel sous l'eau en 3D"}
                        </Text>
                        <Image 
                            fit="cover" 
                            src="img/3D.png" 
                        />
                        
                    </Box>
                    <Box 
                        as="a" 
                        target="__blank" 
                        style={{zIndex: 99, textDecoration: "none"}}
                    >
                        <Text as="p"
                            size="large"
                            textAlign="center"
                            color="black"
                        >
                            {"Stage Laravel plateforme DPO pour le compte d'Altij"}
                        </Text>
                        <Image 
                            fit="cover" 
                            src="img/DPO.png" 
                        />
                        
                    </Box>
                </Carousel>
            </Box>
            <Box 
                basis="small" 
            />
            <Box
                height="small"
            >
                <Heading
                    textAlign="center"
                    color="#DB7F1F"
                >
                    {"Mes compétences"}
                </Heading>
            </Box>
            <Box 
                basis="xsmall" 
            />
            <Box
                direction="row-responsive"
                responsive={true}
                gap="large"
            >
                <Box
                    direction="column"
                    gap="xsmall"
                >
                    <Image
                        className="html-img"
                        background="accent-2" 
                        src="img/html.png"
                        size="256px"
                        fit="contain"
                    /> 
                    <Text
                        textAlign="center"
                    >
                        {"HTML5"}
                    </Text>
                </Box>
                <Box />
                <Box
                    gap="xsmall"
                > 
                    <Image
                        className="css-img"
                        background="accent-2" 
                        src="img/css.png"
                        fit="contain"
                        size="256px"
                    /> 
                    <Text
                        textAlign="center"
                    >
                        {"CSS3"}
                    </Text>
                </Box>
                <Box />
                <Box
                    gap="xsmall"
                >
                    <Image
                        className="javascript-img"
                        background="accent-2" 
                        src="img/javascript.png"
                        size="256px"
                        fit="contain"
                    /> 
                    <Text
                        textAlign="center"
                    >
                        {"JavaScript"}
                    </Text>
                </Box>
                <Box />
                <Box
                    gap="xsmall"
                >
                    <Image
                        className="php-img"
                        background="accent-2" 
                        src="img/php.png"
                        size="256px"
                    /> 
                    <Text
                        textAlign="center"
                    >
                        {"PHP"}
                    </Text>
                </Box>
                <Box />
                <Box
                    gap="xsmall"
                >
                    <Image
                        className="react-img"
                        background="accent-2" 
                        src="img/react.png"
                        size="256px"
                    /> 
                    <Text
                        textAlign="center"
                    >
                        {"React Native"}
                    </Text>
                </Box>  
            </Box>



        </Box>
        

    )
}

