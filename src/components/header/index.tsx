import styles from './Header.module.css'

export function Header (): JSX.Element {
  return <header className={styles.header}>
    <img src="logo.webp" alt="puede ser una imagen del logo de agua purezza" />
  </header>
}
