import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import { fetchLastCommit } from '../../../components/utils/gh'

let testing = true

const VAPr = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "vapr.png" }) {
            childImageSharp {
              fluid(maxWidth: 260) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => <Img style={{ maxWidth: 260, height: 140 }}
        fluid={data.placeholderImage.childImageSharp.fluid}/>}
    />
  )
}

export const vapr = {
  title: 'VAPr',
  cover: <VAPr/>,
  status: 'active', // 'exception', 'normal'][i % 3],
  href: 'https://github.com/ucsd-ccbb/VAPr',
  updatedAt: testing ? '2018-04-15' : fetchLastCommit('vapr', 'ucsd-ccbb'),
  createdAt: '2016-02-15',
  subDescription: 'NoSQL techniques for genome analysis',
  description:
    'Library for data gathering and model serving',
  stars: 13,
  content:
    'Content',
}
