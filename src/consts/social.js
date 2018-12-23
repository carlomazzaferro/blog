import { Icon } from 'antd'
import React from 'react'
import { RedditIcon, SourcererIcon } from '../images/index'
import '../images/icons.less'

export const avatars = () => {
  return (
    [
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
  )
}

const noticesData = () => {
  return ([
    {
      id: 'xxx1',
      title: titles[0],
      logo: avatars[0],
      description: '那是一种内在的东西，他们到达不了，也无法触及的',
      updatedAt: new Date(),
      member: '科学搬砖组',
      href: '',
      memberLink: '',
    },
    {
      id: 'xxx2',
      title: titles[1],
      logo: avatars[1],
      description: '希望是一个好东西，也许是最好的，好东西是不会消亡的',
      updatedAt: new Date('2017-07-24'),
      member: '全组都是吴彦祖',
      href: '',
      memberLink: '',
    },
    {
      id: 'xxx3',
      title: titles[2],
      logo: avatars[2],
      description: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
      updatedAt: new Date(),
      member: '中二少女团',
      href: '',
      memberLink: '',
    },
    {
      id: 'xxx4',
      title: titles[3],
      logo: avatars[3],
      description: '那时候我只会想自己想要什么，从不想自己拥有什么',
      updatedAt: new Date('2017-07-23'),
      member: '程序员日常',
      href: '',
      memberLink: '',
    },
    {
      id: 'xxx5',
      title: titles[4],
      logo: avatars[4],
      description: '凛冬将至',
      updatedAt: new Date('2017-07-23'),
      member: '高逼格设计天团',
      href: '',
      memberLink: '',
    },
    {
      id: 'xxx6',
      title: titles[5],
      logo: avatars[5],
      description: '生命就像一盒巧克力，结果往往出人意料',
      updatedAt: new Date('2017-07-23'),
      member: '骗你来学计算机',
      href: '',
      memberLink: '',
    },
  ])
}
