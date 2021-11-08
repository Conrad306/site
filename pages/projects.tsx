import { NextPage } from "next";
import {Container, Title, Text, Group, Card, Button} from "@mantine/core";

const Projects: NextPage = () => {
    return (
        <Container>
            <Title style={{textAlign: "center"}}>
                PROJECTS
            </Title>
            <Text style={{textAlign: "center"}}>
                Here are some of the Open-Source projects I am working/I worked on!
            </Text>
            <br />
            <Group direction={"column"} style={{alignItems: "center"}}>
                <Card>
                    <Text>
                        GitBot
                    </Text>
                    <p>
                    An Open-Source Discord Bot interacting with the Github API.
                    </p>
                    <Button variant="light" onClick={() => window.open('https://github.com/Conrad36/gitbot')}>Check It Out!</Button>
                    <br />
                    <br />
                    <Text>
                        Phentix
                    </Text>
                    <p>
                        An Open-Source multi-purpose discord bot made by me and a friend.
                    </p>
                    <Button variant="light" onClick={() => window.open('https://github.com/Phentix/Phentix')}>Check It Out!</Button>
                    <br />
                    <br />
                    <Text>
                        Bestbuy Scraper
                    </Text>
                    <p>
                        A Beginner&apos;s webscraper that scrapes BestBuy for CPUs.
                    </p>
                    <Button variant="light" onClick={() => window.open('https://github.com/Conrad36/bestbuy-scraper')}>Check It Out!</Button>
                </Card>

            </Group>
        </Container>
    )
}

export default Projects;