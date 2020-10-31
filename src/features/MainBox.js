import React from 'react';
import { Box, Avatar, Text, Meter, Grid, Image } from 'grommet';

export const MainBox = () => {


    return (
        <Box
                className="Main-box"
                direction="row-responsive"
                fill="horizontal"
            >
                    <Box
                        className="Left-box"
                        fill="horizontal"
                        align="center"
                        justify="center"
                    >
                        <Avatar
                            className="Avatar-img"
                            background="accent-2" 
                            src="img/moi.png"
                            size="280px"
                        />
                    </Box>

                    <Box
                        className="Right-box"
                        justify="center"
                        fill="horizontal"
                        align="center"
                        gap="xlarge"
                        pad="large"
                    >
                        <Box
                            direction="row"
                            gap="small"
                            align="center"
                        >
                            <Text
                                label="TEST"
                                round="full"
                                color="black"
                            >
                                {"Etudiant en Mastère Expert Développement Web à"}
                            </Text>
                            <Image 
                                src="img/logo_ynov_campus_rvb.png" 
                                height="50px"
                                width="100px"
                            />
                        </Box>

                        <Grid
                            className="Grid-skills"
                            fill="horizontal"
                            justify="center"
                            rows={[
                                'xsmall',
                                'xsmall',
                                'xsmall',
                                'xsmall'
                            ]}
                            columns={[
                                '2/4',
                                '2/4'
                            ]}
                            areas={[
                                { name: 'left-1', start: [0, 0], end: [1, 0] },
                                { name: 'right-1', start: [1, 0], end: [1, 0] },
                                { name: 'left-2', start: [0, 1], end: [1, 1] },
                                { name: 'right-2', start: [1, 1], end: [1, 1] },
                                { name: 'left-3', start: [0, 2], end: [1, 2] },
                                { name: 'right-3', start: [1, 2], end: [1, 2] },
                                { name: 'left-4', start: [0, 3], end: [1, 3] },
                                { name: 'right-4', start: [1, 3], end: [1, 3] }
                            ]}
                        >
                            <Box 
                                gridArea="left-1"
                            >
                                <Text
                                    weight="bold"
                                >
                                    {"Développement"}
                                </Text>
                            </Box>
                            <Box 
                                gridArea="right-1"
                            >
                                <Meter
                                    values={[{
                                        value: 80,
                                        label: 'sixty',
                                        color: '#DB7F1F',
                                    }]}
                                    aria-label="meter"
                                    round={true}
                                    background="#D6D6D6"
                                />
                            </Box>
                            <Box 
                                gridArea="left-2"
                            >
                                <Text
                                    weight="bold"
                                >
                                    {"Communication"}
                                </Text>
                            </Box>
                            <Box 
                                gridArea="right-2"
                            >
                                <Meter
                                    values={[{
                                        value: 50,
                                        label: 'sixty',
                                        color: '#DB7F1F',
                                    }]}
                                    aria-label="meter"
                                    round={true}
                                    background="#D6D6D6"
                                />
                           </Box>
                           <Box 
                                gridArea="left-3"
                            >
                                <Text
                                    weight="bold"
                                >
                                    {"Conception"}
                                </Text>
                            </Box>
                            <Box 
                                gridArea="right-3"
                            >
                                <Meter
                                    values={[{
                                        value: 60,
                                        label: 'sixty',
                                        color: '#DB7F1F',
                                    }]}
                                    aria-label="meter"
                                    round={true}
                                    background="#D6D6D6"
                                />
                            </Box>
                            <Box 
                                gridArea="left-4"
                            >
                                <Text
                                    weight="bold"
                                >
                                    {"Bonne humeur"}
                                </Text>
                            </Box>
                            <Box 
                                gridArea="right-4"
                            >
                                <Meter
                                    values={[{
                                        value: 100,
                                        label: 'sixty',
                                        color: '#DB7F1F',
                                    }]}
                                    aria-label="meter"
                                    round={true}
                                    background="#D6D6D6"
                                />
                            </Box>
                        </Grid>
                    </Box>
                
            </Box>
    )
}

