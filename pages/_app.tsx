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
import "../styles/globals.css"
import Sidebar from "../components/Sidebar/index";
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
                    content="Conrad306"
                />
                <meta
                    name="og:description"
                    content="API Developer | Typescript Enthusiast"
                />
                <meta
                    property="og:image"
                    content="/pfp.png"
                />

            </Head>
            <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
                <MantineProvider
                    theme={{
                        colorScheme,
                        primaryColor: 'violet',
                    }}
                >
                    <NormalizeCSS/>
                    <GlobalStyles/>
                    <NotificationsProvider limit={1}>
                        <Sidebar />
                        <Component {...pageProps} />
                    </NotificationsProvider>
                </MantineProvider>
            </ColorSchemeProvider>

        </>
    )
}
