import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import { fetchLastCommit } from '../../../components/utils/gh'

let testing = true

const Kryproflow = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "kryptoflow.png" }) {
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

// let testing = true

export const kryproflow = {
  title: 'kryproflow',
  cover: <Kryproflow/>,
  status: 'active', // 'exception', 'normal'][i % 3],
  href: 'https://github.com/carlomazzaferro/kryptoflow',
  updatedAt: testing ? '2018-04-15' : fetchLastCommit('kryptoflow'),
  createdAt: '2018-04-15',
  subDescription: 'Algorithmic trading with Kafka and TF serving',
  description:
      'Library for data gathering and model serving',
  stars: 61,
  content:
      'Content',
}
