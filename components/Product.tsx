import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import styles from '../styles/Product.module.scss';

export interface IProduct {
  /** id */
  id?: number | undefined;

  /** Name */
  name?: string | undefined;

  /** Image_url */
  image_url: string;

  /** Price */
  price?: number | undefined;

  /** Description */
  description?: string | undefined;

  /** Url */
  url?: string | undefined;

  /** Slug */
  slug?: string | undefined;

  /** Image */
  image?: StaticImageData
}

interface IProductProps {
  product: IProduct
}

const Product = (props: IProductProps) => {
  return (
    <Link href={`/products/${props.product.slug}`}>
      <div className={styles.product}>
        <div className={styles.product__image}>
          {props?.product?.image_url && (
              <Image src={props?.product?.image_url} alt="image" objectFit="contain" layout="fill" className={'image'} />
            )
          }
        </div>
        {/* <p className={styles.product__description}>{props.product.description}</p> */}
        <div className={styles.product__priceButtonContainer}>
          <h2 className={styles.product__title}>{props.product.name}</h2>
          <p className={styles.product__price}>{props.product.price}€</p>
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