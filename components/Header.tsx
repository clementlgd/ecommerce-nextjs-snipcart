import Link from "next/link";
import { useSnipcart } from 'use-snipcart';
import styles from '../styles/Header.module.scss';

import {BsCart} from 'react-icons/bs';

export default function Header() {
  const { cart = {} } = useSnipcart();

  return (
    <header className={styles.header}>
      <Link href="/">
        <p className={styles.header__headerLogo}>WhenToCop?</p>
      </Link>
      <p className={styles.header__headerCart}>
        <button className="snipcart-checkout">
          <BsCart className={styles.header__cartIcon} />
          {cart.subtotal >= 1 && (
            <span>
              {cart.subtotal?.toFixed(2)}€
            </span>
          )}
        </button>
      </p>
    </header>
  )
}