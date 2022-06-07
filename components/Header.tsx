import Link from "next/link";
import { useSnipcart } from 'use-snipcart';
import styles from '../styles/Header.module.scss';

export default function Header() {
  const { cart = {} } = useSnipcart();

  return (
    <header className={styles.header}>
      {/* <Link href="/">
        <img src="/static/logo.svg" alt="" />
      </Link> */}
      <Link href="/">
        <p className={styles.header__headerLogo}>WhenToCop?</p>
      </Link>
      <a href="#" style={{textDecoration: "none"}}>
        <svg width="31" height="27" viewBox="0 0 31 27" fill="none" xmlns="<http://www.w3.org/2000/svg>">
          <path d="" fill="#9094FF"/>
        </svg>
        <span></span>
      </a>
      <p className={styles.header__headerCart}>
        <button className="snipcart-checkout">
          <span>
            ${cart.subtotal?.toFixed(2)}
          </span>
        </button>
      </p>
    </header>
  )
}