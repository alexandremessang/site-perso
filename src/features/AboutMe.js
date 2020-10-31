import React from 'react';
import { Box, Text, Heading, Card, CardBody } from 'grommet';

export const AboutMe = () => {


    return (
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
    )
}

