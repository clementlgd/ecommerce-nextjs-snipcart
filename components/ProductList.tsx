import Product, {IProduct} from "./Product";
import styles from '../styles/ProductList.module.scss';

interface IProductListProps {
    products: IProduct[]
}

const ProductList = ({ products }: IProductListProps) => {
  return (
    <div className="product-list">
      {products.map((product, index) => <Product product={product} key={index}/>)}
    </div>
  )
}

export default ProductList