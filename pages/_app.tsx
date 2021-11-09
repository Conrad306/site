import { AppProps } from 'next/app'
import Head from 'next/head'
import {
    MantineProvider,
    NormalizeCSS,
    GlobalStyles,
    Drawer,
    ActionIcon,
    ColorScheme,
    ColorSchemeProvider,
    Burger,
    Text,
    Badge,
    Group
} from '@mantine/core'
import { useLocalStorageValue } from '@mantine/hooks'
import { useEffect, useState } from 'react'
import { NotificationsProvider } from '@mantine/notifications'
import {MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import Link from "next/link"
import {useRouter} from "next/router";
import {SiGithub, SiKofi, SiTwitter} from "react-icons/si";
import {BsHammer, BsHouse} from "react-icons/bs";
export default function App(props: AppProps) {
    const { Component, pageProps } = props


    const [colorScheme, setColorScheme] = useLocalStorageValue({
        key: 'theme',
        defaultValue: 'dark',
    });

    // @ts-ignore
    const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

    const [opened, setOpened] = useState(false);

    useEffect(() => {
        const className = 'dark';
        const bodyClass = window.document.body.classList;

        colorScheme === 'dark' ? bodyClass.add(className) : bodyClass.remove(className);
    }, [colorScheme, colorScheme === 'dark']);
    return (
        <>
            <Head>
                <title>
                    Conrad306
                </title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
                <meta
                    name="og:title"
                    content="Conrad306s hastily made site"
                />
                <meta
                    name="og:description"
                    content="Follow me on github"
                />
                <meta
                    property="og:image"
                    content="/pfp.png"
                />

            </Head>
            <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
                <MantineProvider
                    theme={{
                        fontFamilyMonospace: 'Monospace',
                        fontFamily: 'Monospace',
                        colorScheme,
                        primaryColor: 'violet',
                    }}
                >
                    <NormalizeCSS/>
                    <GlobalStyles/>
                    <Burger
                        title="Open navigation"
                        aria-label="Open navigation"
                        opened={opened}
                        onClick={() => setOpened((o) => !o)}
                        size="md"
                        style={{position: 'absolute', top: '0%', left: '0%', zIndex: 1010}}
                    />
                    <Drawer
                        opened={opened}
                        onClose={() => setOpened(false)}
                        padding="xl"
                        size="40vh"
                        hideCloseButton
                        style={{zIndex: 999}}

                    >
                        <ActionIcon
                            variant="outline"
                            color={colorScheme === 'dark' ? 'dark' : 'gray'}
                            onClick={() => {
                                //@ts-ignore
                                setColorScheme((current: string) => (current === 'dark' ? 'light' : 'dark'));
                            }}
                            title="Toggle color scheme"
                            style={{position: 'absolute', top: '.5vh', right: '.5vh'}}
                        >
                            {colorScheme === 'dark' ? (
                                <MdOutlineLightMode style={{width: 18, height: 18}}/>
                            ) : (
                                <MdOutlineDarkMode style={{width: 18, height: 18}}/>
                            )}
                        </ActionIcon>
                        <Text style={{position: "absolute", top: "30%", textAlign: "center"}}>
                            PAGES
                        </Text>
                        <Group direction={"column"} style={{position: "absolute", top: "35%", margin: "0 auto", textAlign: "center"}}>
                            <Link href={"/"}>
                            <Badge leftSection={<BsHouse /> } style={{cursor: "pointer"}} variant="gradient" gradient={{from: "indigo", to: "purple"}}>
                                Home
                            </Badge>
                            </Link>
                            <br />
                            <Link href={"/projects"}>
                                <Badge leftSection={<BsHammer />} style={{cursor: "pointer"}} variant="gradient" gradient={{from: "indigo", to: "purple"}}>
                                    Projects
                                </Badge>
                            </Link>
                        </Group>
                        <Text style={{position: "absolute", top: "45%", textAlign: "center"}}>
                            OTHER
                        </Text>
                        <Group direction={"column"} style={{position: "absolute", top: "50%", margin: "0 auto", textAlign: "center"}}>
                            <Link href={"https://github.com/Conrad36"}>
                            <Badge leftSection={<SiGithub />} style={{cursor: "pointer"}} variant="gradient" gradient={{from: "indigo", to: "purple"}}>
                                Follow My Github
                            </Badge>
                            </Link>
                            <br />
                            <Link href={"https://ko-fi.com/conrad306"} >
                            <Badge leftSection={<SiKofi />} style={{cursor: "pointer"}} variant="gradient" gradient={{from: "indigo", to: "purple"}}>
                                Buy me a Coffee (Kofi)
                            </Badge>
                            </Link>
                            <br />
                            <Link href={"https://twitter.com/Conrad_306"}>
                            <Badge leftSection={<SiTwitter />} style={{cursor: "pointer"}} variant="gradient" gradient={{from: "indigo", to: "purple"}}>
                                Follow My Twitter
                            </Badge>
                            </Link>
                            <br />
                        </Group>
                    </Drawer>

                    <NotificationsProvider>
                        <Component {...pageProps} />
                    </NotificationsProvider>
                </MantineProvider>
            </ColorSchemeProvider>

        </>
    )
}
