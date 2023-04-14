import { Box, Stack, Image, Flex, Heading, Text } from '@chakra-ui/react';

export default function Hero() {
    return (
        <>
        <Flex justifyContent="center" alignItems="center" p={5}>
            <Stack direction="column" spacing={5}>
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
            </Stack>
        </Flex>
        </>
    )
}