import { AppProps } from 'next/app'
import Head from 'next/head'
import { MantineProvider, NormalizeCSS, GlobalStyles, Drawer, ActionIcon, ColorScheme, ColorSchemeProvider, Burger} from '@mantine/core'
import { useLocalStorageValue } from '@mantine/hooks'
import { useEffect, useState } from 'react'
import { NotificationsProvider } from '@mantine/notifications'
import {MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { SiGithub, SiTwitter, SiKofi } from "react-icons/si"

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
                        fontFamilyMonospace: 'Jetbrains Mono',
                        fontFamily: 'Jetbrains Mono, Arial',
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
                        size="30vh"
                        hideCloseButton
                        noCloseOnClickOutside
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
                        <ActionIcon
                            variant={"outline"}
                            color={colorScheme === 'dark' ? 'dark' : 'gray'}
                            onClick={() => {
                                window.open('https://github.com/Conrad36')
                            }}
                            title={"Follow My Github"}
                            style={{position: "absolute", bottom: '10px', left: '120px'}}
                        >
                            <SiGithub style={{width: 18, height: 18}}/>
                        </ActionIcon>
                        <ActionIcon
                            variant={"outline"}
                            color={colorScheme === 'dark' ? 'dark' : 'gray'}
                            onClick={() => {
                                window.open('https:/twitter.com/Conrad_306')
                            }}
                            style={{position: "absolute", bottom: '10px', left: '150px'}}
                            title={"Follow My Twitter"}
                        >
                            <SiTwitter style={{width: 18, height: 18}}/>
                        </ActionIcon>
                        <ActionIcon
                            variant={"outline"}
                            color={colorScheme === 'dark' ? 'dark' : 'gray'}
                            onClick={() => {
                                window.open('https:/ko-fi.com/conrad306')
                            }}
                            style={{position: "absolute", bottom: '10px', left: '180px'}}
                            title={"Buy Me A Coffee"}
                        >
                            <SiKofi style={{width: 18, height: 18}}/>
                        </ActionIcon>
                    </Drawer>

                    <NotificationsProvider>
                        <Component {...pageProps} />
                    </NotificationsProvider>
                </MantineProvider>
            </ColorSchemeProvider>
        </>
    )
}