import Nav       from './components/Nav'
import Footer    from './components/Footer'
import Hero      from './sections/Hero'
import Fonts     from './sections/Fonts'
import Effects   from './sections/Effects'
import Burst     from './sections/Burst'
import Install   from './sections/Install'
import Playground from './sections/Playground'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Fonts />
        <Effects />
        <Burst />
        <Install />
        <Playground />
      </main>
      <Footer />
    </>
  )
}
