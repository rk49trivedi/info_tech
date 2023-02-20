import Header from './components/Layout/Header';
import './App.css'
import HeaderWhite from './components/Layout/HeaderWhite';
import About from './components/About/About';
import Intro from './components/Intro/Intro';
import Portfollio from './components/Portfollio/Portfollio';

function App() {

  return (
    <div className='App'>
      <HeaderWhite/>
      <Intro />
      <About/>
      <Portfollio/>
    </div>
    
  )
}

export default App
