import { Container, Paper, Text, Title, List} from "@mantine/core"
import { NextPage } from "next";
import Image from 'next/image';
const LandingPage: NextPage = () => {
    return (
        <Container style={{display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center"}}>
          <Paper>
                <Image src={"/pfp.png"} alt={"My Profile Picture"} width={250} height={250} className={"justify-center align-center"}/>
                <Title>
                    Hi, I&apos;m Conrad306.
                </Title>
                <hr />
                <Text>
                    I&apos;m an API, web developer, and Minecraft Modder. I currently program in Typescript and Rust.
                </Text>
                <br />
                <Title order={3}>Projects</Title>
                <Text>
                    I&apos;ve been working on a discord bot and dashboard project for the past few months.
                    <br/>
                    I&apos;m also working on a minecraft mod and some other mini projects.
                </Text>
                <br />
                <Title order={3} className={"text-center"}>Contacts</Title>
                <Text>
                    Email me at - conrad36github@gmail.com
                    <br/>
                    DM me on twitter - @Conrad306
                    <br/>
                    DM me on Discord - Conrad306#9712
                </Text>
            </Paper>
    </Container>
    )
}


export default LandingPage;
