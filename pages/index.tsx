import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'

import { products } from '../data/products.js';

import ProductList from '../components/ProductList'
import { IProduct } from '../components/Product'
import Layout from "../components/Layout"

const Home: NextPage = ({products}: InferGetStaticPropsType<typeof getStaticProps> ) => {
  return (
      <ProductList products={products}/>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async (context) => {
  return {
      props: {
          products
      }
  }
}
