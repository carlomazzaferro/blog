import { Icon } from 'antd'
import React from 'react'
import { RedditIcon, SourcererIcon } from '../images/index'
import '../images/icons.less'

export const avatars = [
  {
    name: 'facebook',
    icon: <Icon style={{ fontSize: 25 }} type="facebook"/>,
    href: 'https://www.facebook.com/carlo.mazzaferro.3',
    id: 1
  },

  {
    name: 'github',
    icon: <Icon style={{ fontSize: 25 }} type="github"/>,
    href: 'https://github.com/carlomazzaferro',
    id: 2
  },
  {
    name: 'linkedin',
    icon: <Icon style={{ fontSize: 25 }} type="linkedin"/>,
    href: 'https://www.linkedin.com/in/carlo-mazzaferro/',
    id: 3
  },
  {
    name: 'reddit',
    icon: <RedditIcon style={{ hover: 'blue', fontSize: 25 }} />,
    href: 'https://www.reddit.com/user/mazzafish',
    id: 4
  },
  {
    name: 'sourcerer',
    icon: <SourcererIcon className='custom_icon' style={{ fontSize: 25 }} />,
    href: 'https://sourcerer.io/carlomazzaferro',
    id: 5
  },
  {
    name: 'instagram',
    icon: <Icon style={{ fontSize: 26 }} type="instagram"/>,
    href: 'https://www.instagram.com/carlomazzaferro/',
    id: 6
  }
]
