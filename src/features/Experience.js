import React from 'react';
import { Box, Text, Heading, Carousel, Image } from 'grommet';

export const Experience = () => {


    return (
        <Box>
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
                            src="img/OSEV.PNG" 
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
                            src="img/DPO.PNG" 
                        />
                        
                    </Box>
                </Carousel>
            </Box>
        </Box>
            
    )
}

