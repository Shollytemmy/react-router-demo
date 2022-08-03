import {Routes, Route} from 'react-router-dom'
import { About } from './pages/About';
import { Home } from './pages/Home';
import {Error} from './pages/Error'
import './App.css'
import { Navbar } from './components/Navbar';
import { OrderSummary } from './pages/OrderSummary';

function App() {
  return (
    <>
    <Navbar />
  
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='order-summary' element={<OrderSummary />} />
      <Route path='*' element={<Error />} />
    </Routes>
    </>
   


  
  );
}

export default App;
