import Header from './components/Layout/Header';
import './App.css'
import HeaderWhite from './components/Layout/HeaderWhite';
import About from './components/About/About';
import Intro from './components/Intro/Intro';
import Portfollio from './components/Portfollio/Portfollio';
import Testimonial from './components/Testimonial/Testimonial';

function App() {

  return (
    <div className='App'>
      <HeaderWhite/>
      <Intro />
      <About/>
      <Portfollio/>
      <Testimonial/>
    </div>
    
  )
}

export default App
