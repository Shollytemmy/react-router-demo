import {Routes, Route} from 'react-router-dom'
import { About } from './pages/About';
import { Home } from './pages/Home';
import {Error} from './pages/Error'

import { Navbar } from './components/Navbar';
import { OrderSummary } from './pages/OrderSummary';
import { CheckOut } from './pages/CheckOut';

import { Products } from './pages/Products';
import { FeaturedProducts } from './pages/FeaturedProducts';
import { NewProducts } from './pages/NewProducts';
import './App.css'
import { IntroPage } from './pages/IntroPage';
import { Users } from './pages/Users';
import { UserDetails } from './pages/UserDetails';
import { Admin } from './pages/Admin';
function App() {
  return (
    <div className=''>
    <Navbar />
  
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='order-summary' element={<OrderSummary />} />
      <Route path='checkout' element={<CheckOut />} />
      <Route path='/products' element={<Products />}>
        <Route index element={<IntroPage />}/>
        <Route path='featured' element={<FeaturedProducts />} />
        <Route path='new' element={<NewProducts />} />
         </Route>
        <Route path='users' element={<Users />} />
      <Route path='users/:userID' element={<UserDetails />} />
      <Route path='users/admin' element={<Admin />} />
     
      <Route path='*' element={<Error />} />
    </Routes>
    </div>
   


  
  );
}

export default App;
