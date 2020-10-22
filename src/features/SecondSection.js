import React from 'react';
import { Box, Heading, Text, Card, CardBody, Image, Carousel } from 'grommet';


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
            <Box
                gap="small"
                width="xlarge"
            >
                <Box
                    height="small"
                >
                    <Heading
                        textAlign="center"
                        color="#DB7F1F"
                    >
                        {"A propos de moi"}
                    </Heading>
                </Box>
                <Box
                
                >
                    <Card>
                        <CardBody 
                            pad="medium"
                            background="light-1"
                        >
                            <Text>
                                {"J'étudie l'informatique depuis maintenant quatre ans. Au long de mon cursus, j'ai appris le développement web et logiciel ainsi que la conception et programmation orientée objet. "}
                            </Text>
                            <Text>
                                {"J'ai récemment étendu mon domaine de compétences lors de mon année de DUETI en Ecosse à Aberdeen où j'y ai acquis des compétences en photo et vidéo montage ainsi qu'en modélisation et animation 3D."}
                            </Text>
                        </CardBody>
                    </Card>
                </Box>
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
                        {"Mes réalisations"}
                    </Heading>
            </Box>  
            <Box 
                height="medium" 
                width="large" 
                overflow="hidden"
            >
                <Carousel 
                    fill
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
        </Box>
        

    )
}

