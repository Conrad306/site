import { ActionIcon, Burger, Button, Drawer, Group, Space, Text, useMantineColorScheme } from "@mantine/core";
import { useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import Link from "next/link"
const ThemeIcon = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme()
    const handleMode = () => toggleColorScheme()
    return <span onClick={handleMode}>    
    {colorScheme === 'dark' ? (
        <MdOutlineLightMode style={{width: 18, height: 18}}/>
    ) : (
        <MdOutlineDarkMode style={{width: 18, height: 18}}/>
    )}
    </span>
}
const Sidebar = () => {
    const [opened, setOpened] = useState(false);
    return (
        <div>
            <Burger opened={opened} onClick={() => setOpened((o) => !o)}/>
            <Drawer
            opened={opened}
            onClose={() => setOpened(false)}
            className={"text-center"}
            padding="md"
            size="sm"
            >
             <ActionIcon className={'absolute top-4 left-color'}><ThemeIcon /></ActionIcon>
             <Text>Navigation</Text>
             <hr />
             <br />
             <Link href="/" passHref><Button component="a" variant="outline" className={"resize-none"} color="blue">Home</Button></Link>
             <Space h="lg"/>
             <Link href="/projects" passHref><Button component="a" variant="outline" className={"resize-none"} color="blue">Projects</Button></Link>
             <Space h="lg"/>
             <Link href="/social" passHref><Button component="a" variant="outline" className={"resize-none"} color="blue">Social</Button></Link>
             
            </Drawer>
        </div>
    )
}

export default Sidebar;