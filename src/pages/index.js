import React from 'react'
import SEO from '../components/seo'
import Center from '../components/main/main'

const IndexPage = () => (
  <Center location={'articles'}>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']}/>

    {/* <h1>Hi people</h1> */}
    {/* <p>Welcome to your new Gatsby site.</p> */}
    {/* <p>Now go build something great.</p> */}
    {/* <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}> */}
    {/* <Image/> */}
    {/* </div> */}
    {/*<Link to="/page-2/">Go to page 2</Link>*/}
    {/*<Link to="/resume/">Resume</Link>*/}
    {/*<Link to="/home/">Resume</Link>*/}
  </Center>
)

export default IndexPage
