import React from 'react'
// import { Link } from 'gatsby'
import Layout from '../layout/Layout'
import { H1 } from '../components/H1/h1'
import { Button } from '../components/Button/button'
import Excuse from '../components/Button/button'

const IndexPage = () => (
  <Layout>
    <H1>Homework Excuse Generator</H1>
    <Button  onMouseEnter={Excuse} >Click here!</Button>
    <div id="excuses"></div>
  </Layout>
)



export default IndexPage
