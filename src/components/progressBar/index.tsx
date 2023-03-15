import styles from './ProgressBar.module.css'

interface BarProps {
  value: number
  black?: boolean
}

export function ProgressBar ({ value, black = false }: BarProps): JSX.Element {
  return (
    <>
      <span className={`${styles.span} ${styles.top} ${black ? styles.black : ''}`}>{100 - value}%</span>
      <span className={styles.rentabilidad}>rentabilidad</span>
      <progress className={`${styles.bar} ${black ? styles.black : ''}`} value={value} max="100" />
      <span className={`${styles.span} ${black ? styles.black : ''}`}>{value}%</span>
      <span className={styles.costos}>costos</span>
    </>
  )
}
