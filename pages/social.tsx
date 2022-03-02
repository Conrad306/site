import { Group, Grid, Button, Card, Paper, Text, Title, Space} from "@mantine/core";
import { NextPage } from "next";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
export default function SocialPage () {
    return (
        <>
           <Paper className={"self-center text-center"} radius="lg" padding="xl">
                <Title order={2}>Social</Title>
                <Text>Here&apos;s where you can find some other sites I&apos;m on.</Text>
                <br />
               <div>
               <Group spacing={"xs"} direction="row" className={"justify-center text-center"}>
                   <Link href="https://ko-fi.com/Conrad306" passHref>
                    <Card padding="lg" style={{ width: 340, }}>
                        <Card.Section>
                            <Text>Ko-Fi</Text>
                        </Card.Section>
                        <Text>Support me in upgrading my setup!</Text>
                        <Button 
                        variant="outline" 
                        fullWidth 
                        leftIcon={<BsArrowRight />}
                        component="a" 
                        sx={(theme) => ({
                            '&:hover': {
                                backgroundColor: '#FF5E5B', 
                                border: '0',
                                color: theme.colorScheme === "dark" ? "white" : "black",
                                transition: 'all .2s ease-in-out',   
                                transform: 'scale(1.12)',
                            }
                        })}>Ko-Fi</Button>
                    </Card>
                    </Link>
                    <Link href="https://youtube.com/channel/UCcbmqE_sPF4UkdStFhlLlOA" passHref>
                    <Card padding="lg" style={{ width: 340, }}>
                        <Card.Section>
                            <Text>Youtube</Text>
                        </Card.Section>
                        <Text>Check out my channel! (I&apos;ll post soon😉)</Text>
                        <Button 
                        variant="outline" 
                        fullWidth 
                        leftIcon={<BsArrowRight />} 
                        className={"hover:bg-youtube"} 
                        sx={(theme) => ({
                            color: theme.colorScheme === "dark" ? "white" : "black",
                            borderColor: theme.colorScheme === "dark" ? "dark" : "light",
                            '&:hover': {
                                backgroundColor: '#FF0000', 
                                border: '0',
                                color: theme.colorScheme === "dark" ? "white" : "black",
                                transition: 'all .2s ease-in-out',   
                                transform: 'scale(1.12)',
                            }
                        })}>Youtube</Button>
                    </Card>
                    </Link>
                    <Link href="https://github.com/Conrad306" passHref >
                    <Card padding="lg" style={{ width: 340, }}>
                        <Card.Section>
                            <Text>Github</Text>
                        </Card.Section>
                        <Text>Check out my open-source projects!</Text>
                        <Button 
                        variant="outline" 
                        fullWidth 
                        leftIcon={<BsArrowRight />} 
                        sx={(theme) => ({
                            '&:hover': {
                                backgroundColor: '#0d1117', 
                                border: '0',
                                color: theme.colorScheme === "dark" ? "white" : "black",
                                transition: 'all .2s ease-in-out',   
                                transform: 'scale(1.12)',
                            }
                        })}>Github</Button>
                    </Card>
                    </Link>
                   </Group>
                   <Space h='xs'/>
                   <Group spacing={"xs"} direction="row" className={"justify-center text-center"}>
                   <Link href="https://www.twitch.tv/Conrad_306" passHref>
                   <Card padding="lg" style={{ width: 340, }}>
                        <Card.Section>
                            <Text>Twitch</Text>
                        </Card.Section>
                        <Text>Check out my streams from time-to-time!</Text>
                        <Button 
                        variant="outline" 
                        fullWidth 
                        leftIcon={<BsArrowRight />} 
                        sx={(theme) => ({
                            '&:hover': {
                                backgroundColor: '#6441a5', 
                                border: '0',
                                color: theme.colorScheme === "dark" ? "white" : "black",
                                transition: 'all .2s ease-in-out',   
                                transform: 'scale(1.12)',

                            }
                        })}>Twitch</Button>
                    </Card>
                    </Link>
                    <Link href="https://discord.com/users/403668506287144981" passHref>
                    <Card padding="lg" style={{ width: 340, }}>
                        <Card.Section>
                            <Text>Discord</Text>
                        </Card.Section>
                        <Text>Add me on discord if you want to chat!</Text>
                        <Button 
                        variant="outline" 
                        fullWidth 
                        leftIcon={<BsArrowRight />} 
                        
                        sx={(theme) => ({
                            '&:hover': {
                                backgroundColor: '#5865F2', 
                                border: '0',
                                color: theme.colorScheme === "dark" ? "white" : "black",
                                transition: 'all .2s ease-in-out',   
                                transform: 'scale(1.12)',
                            }
                        })}>Discord</Button>
                    </Card>
                    </Link>
                   </Group> 
               </div>
           </Paper>
        </>
    )
}