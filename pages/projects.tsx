import { NextPage } from "next";
import {Container, Title, Text, Accordion, Button } from "@mantine/core";
import Link from "next/link";
const Projects: NextPage = () => {
    return (
        <Container>
           <Title order={2} className={"text-center"}>
               Projects
           </Title>

            <br />
            
               <Accordion multiple>
                    <Accordion.Item label="Gitbot">
                        Gitbot interacts with the github API using requests to return information to discord via embeds.
                        <br />
                        <Button component="a" href="https://github.com/conrad36/gitbot"> Check out the project! </Button>
                    </Accordion.Item>
                    <Accordion.Item label="Bestbuy Scraper">
                        A beginner webscraper made to scrape BestBuy of AMD CPUs.
                        <br />
                        <br />
                        <Button component="a" href="https://github.com/Conrad36/bestbuy-scraper"> Check out the project! </Button>
                    </Accordion.Item>
                    <Accordion.Item label="Phentix">
                        Discord bot and Dashboard project worked on with my friend.
                        <br />
                        <br />
                        <Button component="a" href="https://github.com/phentix/phentix"> Check out the project! </Button>
                    </Accordion.Item>
                    <Accordion.Item label="This site!">
                        Find and read the code of this site.
                        <br />
                        <br />
                        <Button component="a" href="https://github.com/conrad36/site"> Check out the project! </Button>
                    </Accordion.Item>
               </Accordion>
                   
        </Container>
    )
}

export default Projects;