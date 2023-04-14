import { Experience } from '../types';
import {MdWork} from 'react-icons/md';
import { Flex, Heading, Stack, Icon, Box,  Text, useColorModeValue, SimpleGrid, useColorMode, Tag, Image, LinkBox, LinkOverlay} from "@chakra-ui/react";

export default function WorkExperience() {
    
    const Jobs: Experience[] = [
        {
            title: "CompSciLib",
            alt: "CompSciLib Logo",
            role: "Founder, CEO, FullStack Developer",
            period: "Jan 2022 - Present",
            skills: ["Java", "SpringBoot", "Python", "Flask","AWS", "GCP", "DataDog", "Terraform"],
            bullets: ["Founded an Ed-Tech startup that provides on-demand Computer Science Theory Education for students worldwide", 
            "Developed our REST API with Java & Springboot & created our Frontend with TypeScript, Next.JS, & ChakraUI", 
            "Hosted & secured the API using AWS, leveraging DataDog for monitoring & Terraform for IAC", 
            "Working with a team of 10 employees, we’ve acquired 150,000+ unique users from over 175 countries since release"],
            logo: "/CompSciLibLogo.png"
        }
    ]
    
    const Job = (props: {job: Experience}) => {
        return (
            <>
                <LinkBox
                px={4}
                py={5}
                borderWidth="1px"
                rounded="xl"
                bg={useColorModeValue("white", "gray.800")}
                borderColor={useColorModeValue("gray.100", "gray.700")}
                _hover={{ borderColor: "blue.500" }}
                position="relative"
                >
                <LinkOverlay href={props.job.url} rel="noopener" isExternal>
                    <Flex justifyContent="space-between">
                    <Flex>
                        <Image
                        rounded="full"
                        w={16}
                        h={16}
                        objectFit="cover"
                        src={props.job.logo}
                        alt={props.job.alt}
                        />
                        <Stack spacing={2} pl={3} align="left">
                        <Heading
                            // align="left"
                            fontSize="xl"
                        >
                            {props.job.title}
                        </Heading>
                        <Heading
                            // align="left"
                            fontSize="sm"
                        >
                            {props.job.role}
                        </Heading>
                        <Stack
                            spacing={1}
                            mt={3}
                            alignItems="center"
                            isInline
                            display={["none", "none", "flex", "flex"]}
                        >
                            {props.job.skills.map((skill) => (
                            <Tag size="sm" padding="0 5px" key={skill}>
                                {skill}
                            </Tag>
                            ))}
                        </Stack>
                        </Stack>
                    </Flex>
                    <Stack display={["none", "none", "flex", "flex"]}>
                        <Text fontSize={14}>
                        {props.job.period}
                        </Text>
                    </Stack>
                    </Flex>
                    
                    <SimpleGrid
                        spacing={1}
                        mt={3}
                        alignItems="center"
                        columns={5}
                        display={["flex", "flex", "none", "none"]}
                    >
                    {props.job.skills.map((skill) => (
                        <Tag size="sm" padding="0 5px" key={skill}>
                        {skill}
                        </Tag>
                    ))}
                    </SimpleGrid>
                </LinkOverlay>
                </LinkBox>
            </>
        )
    }

    return (
        <>
            <Flex justifyContent="center" flexDirection="column" alignItems="center">
                <Stack direction="row" spacing={5} alignItems="center" my={5}>
                    <Icon as={MdWork} boxSize={"10"} />
                    <Heading size="2xl" fontWeight="800">
                        Work Experience
                    </Heading>
                </Stack>
                
                <Stack direction="column" spacing={5} width="100%" mb={5}>
                    {
                        Jobs.map((job, index) => (
                            <Job job={job} key={index} />
                        ))
                    }
                </Stack>
            </Flex>
        </>
    )
}