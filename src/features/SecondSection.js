import React from 'react';
import { Box, Heading, Text, Card, CardBody, Carousel, Image, Button } from 'grommet';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'grommet-icons';


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
                    controls="arrows"
                    play={5000}
                >   
                    <Image 
                        fit="cover" 
                        src="img/OSEV.png" 
                    />
                    <Image fit="cover" src="//v2.grommet.io/assets/IMG_4245.jpg" />
                    <Image fit="cover" src="//v2.grommet.io/assets/IMG_4210.jpg" />
                </Carousel>
            </Box>
            <Box 
                basis="small" 
            />
           

        </Box>
        

    )
}

