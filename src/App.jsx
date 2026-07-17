import { Routes, Route } from 'react-router';
import {HomePage} from './pages/HomePage.jsx';
import {CheckoutPage} from './pages/checkout/CheckoutPage';
import { OrdersPage } from './pages/OrdersPage';
import { TrackingPage } from './pages/TrackingPage'; 
import './App.css'
import { ErrorPage } from './components/ErrorPage.jsx';

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="checkout" element={<CheckoutPage />}></Route>
      <Route path="orders" element={<OrdersPage />} />
      <Route path='tracking' element={<TrackingPage />}/>
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  )
}

export default App
