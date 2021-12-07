import { BsGear, BsMoon, BsSun, BsHouse, BsGift, BsQuestion } from 'react-icons/bs'
import { SiKofi, SiGithub, SiTwitter, SiYoutube } from "react-icons/si"
import { Box, Divider, Image, Tooltip, useMantineColorScheme } from '@mantine/core'
import Link from 'next/link'
import { CSSProperties } from 'react'
import { useNotifications } from '@mantine/notifications'

const ThemeIcon = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const handleMode = () => toggleColorScheme()
  return <span onClick={handleMode}>{colorScheme === 'dark' ? <BsSun size="25" /> : <BsMoon size="25" />}</span>
}

const SecretIcon = ({
    icon,
    tooltip, 
    style,
}: {
    icon: any
    tooltip?: string | undefined
    style?: CSSProperties | undefined
}) => {
    const notifications = useNotifications();
    const { colorScheme } = useMantineColorScheme()
    return (
    <Box>
    {tooltip ? (
      <Tooltip
        className={'sidebar-icon group"'}
        position="right"
        placement="center"
        gutter={25}
        label={tooltip}
        style={style || {}}
        onClick={() =>
            notifications.showNotification({
              title: 'Someone\'s excited',
              message: 'It\'ll be announced when I\'m ready. Be patient ;)',
              autoClose: 2000
            })
          }
        color={colorScheme === 'dark' ? 'dark' : 'gray'}
      >
        {icon}
      </Tooltip>
    ) : (
      <div className="sidebar-icon group" style={style || {}}  onClick={() =>
        notifications.showNotification({
          title: 'Someone\'s excited',
          message: 'It\'ll be announced when im ready. Be patient ;)',
        })
      }>
        {icon}
      </div>
    )
    }
    </Box>
)
}
const SideBarIcon = ({
  icon,
  href,
  tooltip,
  style,
}: {
  icon: any
  href?: string | undefined
  tooltip?: string | undefined
  style?: CSSProperties | undefined
}) => {
  const { colorScheme } = useMantineColorScheme()
  return href ? (
    <Link href={href}>
      <Box component={'a'}>
        {tooltip ? (
          <Tooltip
            className={'sidebar-icon group"'}
            position="right"
            placement="center"
            gutter={25}
            label={tooltip}
            style={style || {}}
            color={colorScheme === 'dark' ? 'dark' : 'gray'}
          >
            {icon}
          </Tooltip>
        ) : (
          <div className="sidebar-icon group" style={style || {}}>
            {icon}
          </div>
        )}
      </Box>
    </Link>
  ) : tooltip ? (
    <Tooltip
      className={'sidebar-icon group"'}
      position="right"
      placement="center"
      gutter={25}
      label={tooltip}
      color={colorScheme === 'dark' ? 'grey' : 'dark'}
      style={style || {}}
    >
      {icon}
    </Tooltip>
  ) : (
    <div className="sidebar-icon group" style={style || {}}>
      {icon}
    </div>
  )
}

const SideBar = () => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg"
    >
      <SideBarIcon icon={<BsHouse size="25" />} href={'/'} tooltip={'Home'} />

      <SideBarIcon icon={<BsQuestion size="25" />} href={'/projects'} tooltip={'Projects'} />

      <SecretIcon icon={<BsGift size="25" />} tooltip={'Coming Soon... :)'} />

      <Divider className={'sidebar-hr'} orientation={'horizontal'} />
      <SideBarIcon icon={<SiGithub size="25" color={"000"}/>} href={'https://github.com/Conrad36'} tooltip={'Github'} />

      <SideBarIcon icon={<SiKofi size="25" color={"FF5E5B"}/>} href={'https://ko-fi.com/Conrad306'} tooltip={'Kofi'} />

      <SideBarIcon icon={<SiTwitter size="25" color={"1DA1F2"}/>} href={'https://twitter.com/Conrad306'} tooltip={'Twitter'} />

      <SideBarIcon icon={<SiYoutube size="25" color={"FF0000"}/>} href={'https://www.youtube.com/channel/UCcbmqE_sPF4UkdStFhlLlOA'} tooltip={'Youtube'} />

      <Divider className={'sidebar-hr'} orientation={'horizontal'} />

      <SideBarIcon icon={<ThemeIcon />} tooltip={`Change Theme`} />
    </div>
  )
}

export default SideBar