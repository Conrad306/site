import { Container, Paper, Text, Title, List} from "@mantine/core"
import { NextPage } from "next";
import Image from 'next/image'
const Home: NextPage = () => {
    return (
        <div className={"flex"}>
        <Container style={{display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center"}}>
            <Paper>
                <Image src={"/pfp.png"} alt={"My Profile Picture"} width={250} height={250} style={{alignItems: "center"}}/>
                <Title>
                    Hi, I&apos;m Conrad306.
                </Title>
                <hr />
                <Text>
                    I&apos;m a Discord Bot Developer and Minecraft Modder. I currently program in
                    <List withPadding>
                        <List.Item> Typescript </List.Item>
                        <List.Item> Rust </List.Item>
                        <List.Item> Java </List.Item>
                    </List>
                </Text>
                <br />
                <Title order={3}>Projects</Title>
                <Text>
                    I&apos;ve been working on a <a href={"https://github.com/Phentix"} style={{color: "lightblue"}}>discord bot and dashboard project</a> for the past few months.
                    <br/>
                    I&apos;m also working on a minecraft mod and some other mini projects.
                </Text>
                <br />
                <Title order={3} className={"text-center"}>Contacts</Title>
                <Text>
                    Email me at - conrad36github@gmail.com
                    <br/>
                    DM me on twitter - @Conrad_306
                    <br/>
                    DM me on Discord - Conrad306#9712
                </Text>
            </Paper>
        </Container>
        </div>
    )
}


export default Home