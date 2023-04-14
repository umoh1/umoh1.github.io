import { Box, Stack, Image, Flex, Heading, Text, Button, Icon } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons'
import { FaLinkedin } from 'react-icons/fa';

export default function Hero() {
    return (
        <>
        <Flex flexDirection="column" justifyContent="center" alignItems="center" p={5}>
            <Stack direction="column" justifyContent="center" alignItems="center" spacing={5}>
                <Image 
                    alt="nj umoh picture" 
                    src="/nj_smiling_small.png" 
                    boxSize={350}
                    borderRadius={"full"}
                />
                
                <Heading fontWeight="thin" fontSize="2xl" textAlign="center">
                    Hey! I'm NJ Umoh 
                </Heading>
                
                <Heading id="tagline" fontSize="4xl" fontWeight="900" textAlign="center">
                    FullStack Developer and DevOps Engineer.
                </Heading>
                
                <Text id="about_us" textAlign="center">
                     I'm a passionate FullStack Developer and DevOps Engineer based in the US. I truly enjoy the process of taking products from ideation to deployment, seeing them come to life and serving their intended purpose. 
                </Text>
                
                {/** TODO: Add Links */}
                <Stack direction="row" spacing={5}>
                    <Button leftIcon={<EmailIcon />} colorScheme="teal" > Contact Me </Button>
                    <Button leftIcon={<Icon as={FaLinkedin} />} colorScheme="linkedin" onClick={() => {window.open("https://www.linkedin.com/in/nj-umoh/")}}> LinkedIn </Button>
                </Stack>
            </Stack>
        </Flex>
        </>
    )
}