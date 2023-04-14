import { Flex, Heading, Stack, Icon, Box,  Text, useColorModeValue, SimpleGrid, useColorMode, Center, Tag, Image, LinkBox, LinkOverlay} from "@chakra-ui/react";
import {GrCode} from "react-icons/gr";
import { Project} from "../types";

const projects: Project[] = [
    {
        title: "Portfolio Project",
        link: "https://github.com/umoh1/umoh1.github.io",
        description: "A personal portfolio to showcase my education, work experience, projects, and skills. Used popular frontend technologies such as Next.JS and TypeScript to create this project.",
        alt: "portfolio picture",
        techstack: ["HTML", "CSS", "TypeScript", "Next.JS", "React", "ChakraUI","Github Pages"],
        image: "/CompSciLibLogo.png"
    }
]

const Project = (props: {project: Project}) => {
    
    return (
        <>
            <Center py={6}>
                <LinkBox
                    w={"full"}
                    bg={useColorModeValue("white", "gray.900")}
                    boxShadow={"2xl"}
                    rounded={"md"}
                    px={6}
                    py={3}
                    mx={5}
                    overflow={"hidden"}
                    _hover={{ cursor: "pointer" }}
                    onClick={() => {
                    props.project.link && window.open(props.project.link);
                    }}
                >
                    <Box bg={"gray.100"} mt={-6} mx={-6} pos={"relative"}>
                    <Image
                        src={props.project.image}
                        objectFit={"cover"}
                        maxH={"210px"}
                        h={"210px"}
                        w="full"
                    />
                    </Box>
                    <Stack mb={3}>
                    <Text
                        mt={3}
                        color={"blue.500"}
                        textTransform={"uppercase"}
                        fontWeight={800}
                        fontSize={"lg"}
                        letterSpacing={1.1}
                    >
                        {props.project.title}
                    </Text>
                    <Text color={"gray.500"}>{props.project.description}</Text>
                    </Stack>
                    {props.project.techstack.map((tech) => (
                    <Tag size="sm" padding="0 5px" key={tech} mx={1}>
                        {tech}
                    </Tag>
                    ))}
                </LinkBox>
                </Center>
        </>
    )
}

export default function Projects() {
    return (
        <> 
            <Flex justifyContent="center" flexDirection="column" alignItems="center">
                <Stack direction="row" spacing={5} alignItems="center" my={5}>
                    <Icon as={GrCode} boxSize={"10"} />
                    <Heading size="2xl" fontWeight="800">
                        Projects
                    </Heading>
                </Stack>
                
                <SimpleGrid columns={[1,1,3]} direction="column" spacing={5} width="100%" mb={5}>
                    { 
                        projects.map((project, index) => (
                            <Project project={project} key={index} />
                        ))
                    }
                </SimpleGrid>
            </Flex>
        </>
    )
}