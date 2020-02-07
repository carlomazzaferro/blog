import React from 'react'
import { Avatar } from '../../components/image'

const currUser =
  {
    name: 'Carlo Mazzaferro',
    avatar: <Avatar/>,
    userid: '00000001',
    email: 'carlo.mazzaferron@gmail.com',
    signature: 'My online presence, or whatever.',
    title: 'Machine Learning Engineer',
    group: 'Circ (Acquired by Bird)',
    tags: [
      {
        key: '0',
        label: 'python',
      },
      {
        key: '1',
        label: 'machine learning',
      },
      {
        key: '2',
        label: 'web',
      },
      {
        key: '3',
        label: 'react',
      },
      {
        key: '4',
        label: 'distributed systems',
      },
      {
        key: '5',
        label: 'data viz',
      },
    ],
    notifyCount: 12,
    unreadCount: 11,
    country: 'DE',
    geographic: {
      province: {
        label: 'Berlin, ',
        key: '10405',
      },
      city: {
        label: 'DE',
        key: '330100',
      },
    },
  }

export { currUser }
