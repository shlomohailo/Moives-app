import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/fechers/Header/Header';
import Fotter from './components/fechers/Fotter/Fotter';
import Router from './Router/Router';

function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <Router />
        <Fotter />
      </BrowserRouter>
    </div>
  )
}

export default App
