import type { GetStaticProps, NextPage } from 'next'

import { IProductsFields } from "../types/contentful";
import ContentService from "../utils/content-service";
import { products } from '../data/products.js';

import ProductList from '../components/ProductList'

interface Props {
  products: IProductsFields[];
}

const Home: NextPage<Props> = ({ products }) => (
  <ProductList products={products}/>
)

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const products = (
    await ContentService.instance.getEntriesByType<IProductsFields>()
  ).map((entry) => entry.fields);

  return {
    props: {
      products,
    },
    revalidate: 60,
  }
}
