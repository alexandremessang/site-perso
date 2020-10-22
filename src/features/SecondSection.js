import React from 'react';
import { Box, Avatar, Heading, Text, Card, CardBody } from 'grommet';
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
                basis="xsmall" 
            />
            <Box
                justify="center"
                align="center"
                gap="small"
            >
                <Heading
                    color="#DB7F1F"
                >
                    {"A propos de moi"}
                </Heading>
                <Box
                
                >
                    <Card>
                    <CardBody 
                        pad="medium"
                        background="light-1"
                    >
                        <Text
                            textAlign="justify"
                        >
                            {"J'étudie l'informatique depuis maintenant quatre ans. Au long de mon cursus, j'ai appris le développement web et logiciel ainsi que la conception et programmation orientée objet. "}
                        </Text>
                        <Text
                            textAlign="justify"
                        >
                            {"J'ai récemment étendu mon domaine de compétences lors de mon année de DUETI en Ecosse à Aberdeen où j'y ai acquis des compétences en photo et vidéo montage ainsi qu'en modélisation et animation 3D."}
                        </Text>
                    </CardBody>
                    </Card>
                </Box>
           </Box>
            
           

        </Box>
        

    )
}

