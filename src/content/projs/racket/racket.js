import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import { fetchLastCommit } from '../../../components/utils/gh'

let testing = true

const Racket = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "racket.png" }) {
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

export const racket = {
  title: 'racket',
  cover: <Racket/>,
  status: 'active', // 'exception', 'normal'][i % 3],
  href: 'https://github.com/carlomazzaferro/racket',
  updatedAt: testing ? '2018-04-15' : fetchLastCommit('racket'),
  createdAt: '2018-09-01',
  subDescription: 'Serve models with confidence',
  description:
    'Library for model management, tracking, and high-performance serving',
  stars: 6,
  content:
    'Content',
}
