import React from "react"
import { Link } from 'gatsby';
import Layout from '../layout/Layout';
import { H1 } from '../components/H1/H1';
import { Button } from '../components/Button/Button';

const IndexPage = () => (
  <Layout>
  <H1>Homework Excuse Generator</H1>
  <Button as={Link} to="/about">Click here!</Button>
   
 
  </Layout>
)
export default IndexPage
