import styles from './Main.module.css'
import { Quoter } from '../quoter'

export function Main (): JSX.Element {
  return <main className={styles.main}>
    <div className={styles.quoter}>
      <h1 className={styles.h1}>Solución rentable y sostenible</h1>
      <h2 className={styles.h2}>Simula la rentabilidad de tu negocio</h2>
      <Quoter />
    </div>
    <div className={styles.content__img}>
      <img src="hero.webp" alt="puede ser una imagen de un par de botellas de agua de la  marca purezza" />
    </div>
  </main>
}
