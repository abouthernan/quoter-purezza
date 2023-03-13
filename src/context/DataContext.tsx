import { useState, createContext } from 'react'

export interface Data {
  valueOther: number
  valuePurezza: number
}

export interface DataContextProps {
  data: Data
  setData: (data: Data) => void
}

export const DataContext = createContext({} as DataContextProps)

export function DataProvider ({ children }: any): JSX.Element {
  const [data, setData] = useState<Data>({
    valueOther: 50,
    valuePurezza: 50
  })

  const props = {
    data,
    setData
  }

  return <DataContext.Provider value={props}>{children}</DataContext.Provider>
}
