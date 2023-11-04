import Header from './component/1-header/Header.jsx'
import Hero from './component/2-hero/Hero.jsx'
import Main from './component/3-main/Main.jsx'
import Contact from './component/4-contact/Contact.jsx'
import Footer from './component/5-footer/Footer.jsx'

function App() {

  return (
    <div className='container'>
     <Header/>

     <Hero/>
     <div className='divider'></div>
     <Main/>
     <div className='divider'></div>

     <Contact/>
     <div className='divider'></div>

     <Footer/>

      
    </div>
  )
}

export default App
