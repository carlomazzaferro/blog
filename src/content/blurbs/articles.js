import icos from '../common/ico'

export const blurbs =
  [
    {
      id: 1,
      title: 'Neural Nets Applied to Protein Sequences: One-Hot Encoding and Recurrent Nets',
      blurb: 'The application of neural networks to the problem of predicting how well proteins bind to the MHC-I complex. ' +
        'This sort of interaction stands at the basis of the bodily immunogenic response and accurately characterizing it ' +
        'could have significant impacts on the drug-development process.',
      href: 'mazzafi.sh/articles/mhcPreds',
      tags: ['Neural Networks', 'Deep Learning', 'Bioinformatics', 'Precision Medicine'],
      updatedAt: new Date(2017, 2, 3),
      createdAt: new Date(2017, 2, 3),
      icons: [
        { ...icos.python, id: 1 },
        { ...icos.tensorflow, id: 2 },
        { ...icos.numpy, id: 3 },
        { ...icos.matplotlib, id: 4 },
      ]
    },
    {
      id: 2,
      title: 'Real-Time EEG Classification Task',
      blurb: 'Fun project developed with other five students at UCSD for the Senior Design Laboratory sequence for the ' +
        'Bioengineering Biosystems major. This is just a brief summary of a much longer project proposal where I focus ' +
        'more on the implementation part of our project rather than the (necessary, albeit dull) logistical and ' +
        'motivational aspects of the project.',
      href: 'mazzafi.sh/articles/bmes_one',
      tags: ['Bioengineering', 'Psychology', 'Statistics'],
      updatedAt: new Date(2016, 11, 3),
      createdAt: new Date(2016, 11, 3),
      icons: [
        { ...icos.python, id: 1 },
        { ...icos.tensorflow, id: 2 },
      ]
    },
    {
      id: 3,
      title: 'Wearable Monitoring Device For Future Applications As An Assistive Technology',
      blurb: 'Project developed with the Biomedical Engineering Society at UCSD.',
      href: 'mazzafi.sh/articles/bmes_one',
      tags: ['Bioengineering', 'Psychology', 'Statistics'],
      updatedAt: new Date(2015, 7, 11),
      createdAt: new Date(2015, 7, 11),
      icons: [
        { ...icos.numpy, id: 1 },
        { ...icos.python, id: 2 },
        { ...icos.opencv, id: 3 },
      ]
    },
    {
      id: 4,
      title: 'Increasing cessation or prolonging the urge?',
      blurb: 'Differences in marketing features in nicotine replacement ' +
        'product advertisements. The impact of nicotine replacement therapeutics (NRT) on quitting success in the US ' +
        'population remains unclear. Understanding of advertising messages and product features is needed to better ' +
        'understand the impact of cessation products on quitting in the US.',
      href: 'mazzafi.sh/articles/acsm_one',
      tags: ['Bioengineering', 'Psychology', 'Statistics'],
      updatedAt: new Date(2014, 6, 15),
      createdAt: new Date(2014, 6, 15),
      icons: [
        { ...icos.r, id: 1 },
        { ...icos.d3, id: 2 },
        { ...icos.matplotlib, id: 3 },
      ]
    },
    {
      id: 5,
      title: 'Relationship Between Tobacco Smoking Curiosity and Levels of Physical Activity and Sedentary Behavior in Adolescence',
      blurb: 'Low physical activity (PA), sedentary behavior (SB), and tobacco use are three behavioral risk factors ' +
        'linked to poor long-term health outcomes, and they tend to cluster together in individuals. Expressing any curiosity about smoking predicts future risk of tobacco use among adolescents who have never smoked.',
      href: 'mazzafi.sh/articles/acsm_two',
      tags: ['Bioengineering', 'Psychology', 'Statistics'],
      updatedAt: new Date(2014, 9, 11),
      createdAt: new Date(2014, 9, 11),
      icons: [
        { ...icos.numpy, id: 1 }
      ]
    },
  ]

// const fakeList = count => {
//   const list = []
//   for (let i = 0; i < count; i += 1) {
//     list.push({
//       id: `fake-list-${i}`,
//       owner: user[i % 10],
//       title: titles[i % 8],
//       avatar: avatars[i % 8],
//       cover: parseInt(i / 4, 10) % 2 === 0 ? covers[i % 4] : covers[3 - (i % 4)],
//       status: ['active', 'exception', 'normal'][i % 3],
//       percent: Math.ceil(Math.random() * 50) + 50,
//       logo: avatars[i % 8],
//       href: 'https://ant.design',
//       updatedAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i),
//       createdAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i),
//       subDescription: desc[i % 5],
//       description:
//         '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
//       activeUser: Math.ceil(Math.random() * 100000) + 100000,
//       newUser: Math.ceil(Math.random() * 1000) + 1000,
//       star: Math.ceil(Math.random() * 100) + 100,
//       like: Math.ceil(Math.random() * 100) + 100,
//       message: Math.ceil(Math.random() * 10) + 10,
//       content:
//         '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
//       members: [
//         {
//           avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
//           name: '曲丽丽',
//           id: 'member1',
//         },
//         {
//           avatar: 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
//           name: '王昭君',
//           id: 'member2',
//         },
//         {
//           avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
//           name: '董娜娜',
//           id: 'member3',
//         },
//       ],
//     })
//   }
//
//   return list
// }
