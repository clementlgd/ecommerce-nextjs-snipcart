import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import Script from 'next/script';
import Image from 'next/image'
import styles from '../../styles/Product.module.scss'

import Product, {IProduct} from "../../components/Product";
import { products } from '../../data/products.js';

// import ProductList from '../components/ProductList'
// import { IProduct } from '../components/Product'
import Layout from "../../components/Layout"

const ProductDetails: NextPage = ({ product }: InferGetStaticPropsType<typeof getStaticProps> ) => {
  // console.log("product", product);
  
  return (
    <>
      <p>Product page: {product.name}</p>
      <div className="product__price-button-container">
        <div className={styles.product__price}>${product.price.toFixed(2)}</div>
          <button
            className={`snipcart-add-item ${styles.product__button}`}
            data-item-id={product.id}
            data-item-name={product.name}
            data-item-price={product.price}
            data-item-url={product.url}
            // data-item-image={props.product.image.src}
          >
            Add to cart
          </button>
        </div>
    </>
  )
}

export default ProductDetails

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context?.params?.id;
  const product = products.filter(p => p.id.toString() === id)
  
  return {
      props: {
          product: product[0]
      }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = products.map(product => ({
    params: { id: product.id.toString()}
  }))
  return { paths, fallback: false}
}
