import React from 'react'
import Layout from '../Layout/Layout'
import { Button } from '../components/Button/button'
import { Link } from 'gatsby'

const AboutPage = () => (
  <Layout>
    <h1>Hello about</h1>
  <Button as={Link} to="/">go back to start!</Button>

  </Layout>
);

export default AboutPage;
