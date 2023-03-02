import styles from './ProgressBar.module.css'

interface BarProps {
  value: number
  black?: boolean
}

export function ProgressBar ({ value, black = false }: BarProps): JSX.Element {
  return (
    <>
      <span className={`${styles.span} ${styles.top}`}>{100 - value}%</span>
      <progress className={`${styles.bar} ${black ? styles.black : ''}`} value={value} max="100" />
      <span className={`${styles.span} ${black ? styles.black : ''}`}>{value}%</span>
    </>
  )
}
