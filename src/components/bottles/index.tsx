import { useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import styles from './Bottles.module.css'
import { ProgressBar } from '../progressBar'

export function Bottles (): JSX.Element {
  const { data } = useContext(DataContext)

  const { valueOther, valuePurezza } = data

  return (
    <div id="quoter" className={styles.content}>
      <div className={styles.item}>
        <img
          src="with-bottle-current.webp"
          alt="puede ser una imagen de un par de botellas de plástico"
        />
        <ProgressBar value={valueOther} black />
      </div>

      <p className={styles.vs}>Vs</p>

      <div className={styles.item}>
        <img
          src="with-bottle-purezza.webp"
          alt="puede ser una imagen de una botella de purezza"
        />
        <ProgressBar value={valuePurezza} />
      </div>
    </div>
  )
}
