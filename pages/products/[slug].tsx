import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import styles from '../../styles/ProductDetails.module.scss'
import { IProductsFields } from "../../types/contentful";
import ContentService from "../../utils/content-service";

interface Props {
  product: IProductsFields;
}

const ProductDetails: NextPage<Props> = ({ product }) => (
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

export default ProductDetails

export const getStaticProps: GetStaticProps<Props, { slug: string }> = async (ctx) => {
  const { slug } = ctx.params!;

  const product = await ContentService.instance.getArticleBySlug(slug)

  return {
    props: {
      product: product.fields,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await ContentService.instance.getEntriesByType<IProductsFields>();

  const paths = products.map((product: any) => ({
    params: { slug: product.fields.slug },
  }));

  return {
    paths: paths,
    fallback: false,
  };
};
