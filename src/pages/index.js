import React from 'react'
import SEO from '../components/seo'
import MainContent from '../components/main/main'

const IndexPage = () => (
  <MainContent location={'articles'}>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']}/>
    {/*<Link to="/resume/">Resume</Link>*/}
    {/*<Link to="/home/">Resume</Link>*/}
  </MainContent>
)

export default IndexPage
