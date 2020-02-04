import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import { fetchLastCommit } from '../../../components/utils/gh'

let testing = true

const MHCPreds = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "mhcpreds.png" }) {
            childImageSharp {
              fluid(maxWidth: 260) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => <Img style={{ maxWidth: 260, maxHeight: 140 }}
        fluid={data.placeholderImage.childImageSharp.fluid}/>}
    />
  )
}

export const mhcpreds = {
  title: 'MHCPreds',
  cover: <MHCPreds/>,
  status: 'archived', // 'exception', 'normal'][i % 3],
  href: 'https://github.com/carlomazzaferro/mhcPreds',
  updatedAt: testing ? '2018-04-15' : fetchLastCommit('mhcPreds'),
  createdAt: '2017-04-01',
  subDescription: 'Deep learning and drug discovery',
  description:
    'Library for data gathering and model serving',
  stars: 4,
  content:
    'Content',
}
