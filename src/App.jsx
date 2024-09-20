import Aboutcontent from './About/Aboutcontent'
import './App.css'
import Contactform from './contact/contactform'
import Footer from './footer/footer'
import Herocontent from './Herosection/herocontent'
import Works from './industry sectors/works'
import Header from './Navbar/Header'
import Service from './services/service'
import Trust from './Why trust us/trust'
import Whyus from './Why us/Whyus'
function App() {
  return (
    <>
      <div className="headers">
        <Header />
        <Herocontent />
      </div>
      <Aboutcontent />
      <Service />
      <Whyus />
      <Trust />
      <Works />
      <Contactform />
      <Footer />
    </>
  )
}
export default App
