import { useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import styles from './Quoter.module.css'

export function Quoter (): JSX.Element {
  const { setData } = useContext(DataContext)
  const handleSubmit = (e: any): any => {
    e.preventDefault()

    const vendidas = e.target.item1.value // número de botellas vendidas al día
    const costo = e.target.item2.value // costo por cada botella
    const venta = e.target.item3.value // valor de venta de la botella
    const dias = e.target.item4.value // días al mes que está abierto el establecimiento

    // Cálculo de totáles
    const totalVendidas = vendidas * dias // número de botellas vendidas al mes
    const totalCosto = costo * totalVendidas // costo total de las botellas vendidas al mes
    const totalVenta = venta * totalVendidas // valor total de las botellas vendidas al mes

    const costosOcultos = 0.08 // costos ocultos estimados para la marca A (8%)
    const costosOcultosB = 0.013 // costos ocultos estimados para la marca B (1.3%)

    const rentaMensualB = 990000 // renta mensual para la marca B
    const costoBotellaB = (rentaMensualB / dias) / vendidas // costo de la botella de la marca B

    const tmpOcultos = totalCosto * costosOcultos
    const tmpOcultosB = rentaMensualB * costosOcultosB

    // Cálculo de la ganancia neta diaria y mensual para la marca A
    const costoTotalA = totalCosto + tmpOcultos
    const rentabilidadA = totalVenta - costoTotalA
    const porcentajeGananciaA = +rentabilidadA / totalVenta * 100

    // Cálculo de la ganancia neta diaria y mensual para la marca B
    const costoTotalB = rentaMensualB + tmpOcultosB
    const rentabilidadB = totalVenta - costoTotalB
    const porcentajeGananciaB = +rentabilidadB / totalVenta * 100

    const totalOther = porcentajeGananciaA.toFixed(2).split('.')[0]
    const totalPurezza = porcentajeGananciaB.toFixed(2).split('.')[0]

    const graphic = document.querySelector('#quoter')
    if (graphic !== null) graphic.scrollIntoView({ behavior: 'smooth' })

    setTimeout(() => {
      setData({
        valueOther: Number(totalOther),
        valuePurezza: Number(totalPurezza)
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
              ¿Cuántos días al mes está abierto el establecimiento?
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
