import { useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import styles from './Quoter.module.css'

export function Quoter (): JSX.Element {
  const { setData } = useContext(DataContext)
  const handleSubmit = e => {
    e.preventDefault()

    const item1 = e.target.item1.value
    const item2 = e.target.item2.value
    const item3 = e.target.item3.value
    const item4 = e.target.item4.value

    // ¿Cuántas botellas de agua vendes al día? = item1 x item4
    const input1 = item1 * item4
    // ¿Cuánto pagas por cada botella? = item2 x totalInput1
    const input2 = item2 * input1
    // ¿Cuál es el valor de venta de la botella de agua? = item3 x totalInput1
    const input3 = input1 * item3
    // ¿Cuantos días al mes está abierto el establecimiento al público? = item4

    const estimadoOther = 0.08
    const estimadoPurezza = 0.013

    // OTHER
    const tmp = input2 * estimadoOther
    const costoTotal = input2 + tmp
    // const rentabilidad = input3 - costoTotal
    const margenOther = -(costoTotal / input3 - 1)
    // const costoOther = costoTotal / input3

    // PUREZZA
    const tmpPurezza = input2 * estimadoPurezza
    const costoTotalPurezza = input2 + tmpPurezza
    // const rentabilidadPurezza = input3 - costoTotalPurezza
    const margenPurezza = -(costoTotalPurezza / input3 - 1)

    const totalOther = Number(margenOther.toFixed(2).split('.')[1])
    const totalPurezza = Number(margenPurezza.toFixed(2).split('.')[1])

    const graphic = document.querySelector('#quoter')
    graphic.scrollIntoView({ behavior: 'smooth' })

    setTimeout(() => {
      setData({
        valueOther: totalOther,
        valuePurezza: totalPurezza
      })
    }, 800)
  }

  return (
    <section className={styles.contentQuoter}>
      <div>
        <form onSubmit={handleSubmit}>
          <div className={styles.item}>
            <label htmlFor="item1">
              ¿Cuántas botellas de agua vendes al día?
            </label>
            <input
              type="number"
              required
              name="item1"
              id="item1"
              placeholder="0"
            />
          </div>

          <div className={styles.item}>
            <label htmlFor="item2">¿Cuánto pagas por cada botella?</label>
            <input
              type="number"
              required
              name="item2"
              id="item2"
              placeholder="0"
            />
          </div>

          <div className={styles.item}>
            <label htmlFor="item3">
              ¿Cuál es el valor de venta de la botella de agua?
            </label>
            <input
              type="number"
              required
              name="item3"
              id="item3"
              placeholder="0"
            />
          </div>

          <div className={styles.item}>
            <label htmlFor="item4">
              ¿Cuántos días al mes está abierto el estableciminto?
            </label>
            <input
              type="number"
              required
              name="item4"
              id="item4"
              placeholder="0"
            />
          </div>

          <div className={styles.submit}>
            <button type="submit">Calcular</button>
          </div>
        </form>
      </div>
    </section>
  )
}
