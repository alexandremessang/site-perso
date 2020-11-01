import React from 'react';
import { Box, Button, Collapsible } from 'grommet';
import { SecondSection } from './SecondSection'
import { Down, Github, Linkedin, Up } from 'grommet-icons';

export const FooterBox = () => {
    const [open, setOpen] = React.useState(false);
    const [section, setSection] = React.useState("#first-section");

    const upOrDown = () => {
        if(open) {
            return (
                <Up
                    size="large"
                    color="grey"
                />
            )
        } else {
            return (
                <Down
                    size="large"
                    color="grey"
                />
            )
        }
    }

    const isOpen = () => {
        if(open){
            setOpen(false);
            setSection("#first-section");            
        } else {   
            setOpen(true);
            // second section anchor not working
            setSection("#second-section");            
         
        }
    } 

    return (
        <Box
                as="footer"
                className="Footer-box"
                fill="horizontal"
                basis="full"
                height="auto"
                justify="end" 
                align="center"  
                pad="large"             
            >
                <Box
                    fill="horizontal"
                    gap="medium"
                    
                    align="start"
                    direction="row"
                >
                    <Button 
                        href="https://www.linkedin.com/in/alexandre-messang/"   
                        target="_blank"
                    >
                        <Linkedin 
                            size="large"
                        />
                    </Button>
                    <Button 
                        href="https://github.com/alexandremessang"   
                        target="_blank"
                    >
                        <Github 
                            size="large"
                        />
                    </Button>
                </Box>
                <Box
                className="drop-down"
                fill="horizontal"
                align="center"
                justify="center"
                >
                    <Button
                        href={section} 
                        plain={true}
                        size="large"
                        onClick={() => isOpen()}
                    >
                        {upOrDown}

                        </Button>
                    <Box
                        fill={true}
                    >
                        <Collapsible 
                            open={open}
                        >
                            <SecondSection />
                        </Collapsible>
                    </Box>
                </Box>
            </Box>
    )
}

