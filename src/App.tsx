import { Header } from './components/header'
import { Main } from './components/main'
import { Bottles } from './components/bottles'
import { Footer } from './components/footer'
import { Contact } from './components/contact'

export function App (): JSX.Element {
  return (
    <div className="App">
      <Header />
      <Main />
      <Bottles />
      <Contact />
      <Footer />
    </div>
  )
}
