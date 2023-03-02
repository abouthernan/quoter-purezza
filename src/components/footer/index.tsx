import styles from './Footer.module.css'

export function Footer (): JSX.Element {
  return <footer className={styles.footer}>
    <p>&copy; <a href="https://www.purezzawater.co/" target="_blank" rel="noreferrer">PUREZZA</a> {new Date().getFullYear()} All Right Reserved. Powered by <a href="https://vehement.co" target="_blank" rel="noreferrer">Vehement</a></p>
  </footer>
}
