import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
// import styles from '../../styles/Product.module.scss'
import styles from '../../styles/ProductDetails.module.scss'

import Product, {IProduct} from "../../components/Product";
import { products } from '../../data/products.js';

// import ProductList from '../components/ProductList'
// import { IProduct } from '../components/Product'
import Layout from "../../components/Layout"

const ProductDetails: NextPage = ({ product }: InferGetStaticPropsType<typeof getStaticProps> ) => {
  // console.log("product", product);
  
  return (
    <div className={styles.product}>
      <div className={styles.product__image}>
      {/* <Image src={props.product.image} alt={props.product.image.src} /> */}
      </div>
      <div className={styles.product__rightSide}>
        <h2 className={styles.product__title}>{product.name}</h2>
        <p className={styles.product__description}>{product.description}</p>
        <div className={styles.product__priceButtonContainer}>
          <p className={styles.product__price}>{product.price.toFixed(2)}€</p>
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
      </div>
    </div>
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
