import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import styles from '../styles/Product.module.scss';

export interface IProduct {
  id: string
  name: string
  price: number
  url: string
  description: string
  image?: StaticImageData
}

interface IProductProps {
  product: IProduct
}

const Product = (props: IProductProps) => {
  return (
    <Link href={`/products/${props.product.id}`}>
      <div className={styles.product}>
        <div className={styles.product__image}>
        {/* <Image src={props.product.image} alt={props.product.image.src} /> */}
        </div>
        {/* <p className={styles.product__description}>{props.product.description}</p> */}
        <div className={styles.product__priceButtonContainer}>
          <h2 className={styles.product__title}>{props.product.name}</h2>
          <p className={styles.product__price}>{props.product.price.toFixed(2)}€</p>
          {/* <button
            className={`snipcart-add-item ${styles.product__button}`}
            data-item-id={props.product.id}
            data-item-name={props.product.name}
            data-item-price={props.product.price}
            data-item-url={props.product.url}
            // data-item-image={props.product.image.src}
          >
            Add to cart
          </button> */}
        </div>
      </div>
    </Link>
  )
}

export default Product