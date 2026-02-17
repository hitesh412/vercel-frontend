import Home from "./Pages/Home"
import Cart from "./Pages/Cart"
import Menu from "./Pages/Menu"
import Contact from "./Pages/Contact"
import About from "./Pages/About"

import Login from "./Pages/Login"
import Signup from "./Pages/Signup"

import Details from "./Pages/Details"
import Checkout from "./Pages/Checkout"
import Order from "./Pages/Order"

import Faq from "./Pages/Faq"
import Privacy from "./Pages/Privacy"
import Terms from "./Pages/Terms"

import MainLayout from "./Layouts/MainLayout";
import AuthLayout from "./Layouts/AuthLayout";



import { BrowserRouter, Routes, Route} from 'react-router-dom'

import ProtectedRoute from "./Pages/ProtectedRoute"

import ForgotPassword from "./Pages/ForgotPassword"

import ResetPassword from "./Pages/ResetPassword"


import MyOrders from "./Pages/MyOrders"

















function App() {

 



  

  return (
    <>
        

     
     <BrowserRouter>
     <Routes>

     <Route element={<MainLayout />}>
     
     
     <Route path="/" element={<ProtectedRoute> <Home />  </ProtectedRoute>} />
    

     <Route path="/menu" element={<Menu />} />
     <Route path="/menu-details/:id" element={<Details />} />
     <Route path="/cart" element={<Cart />} />
     <Route path="/checkout" element={<Checkout />} />
     <Route path="/contact" element={<Contact />} />
     <Route path="/about" element={<About />} /> 
     <Route path="/faq" element={<Faq/>} />
     <Route path="/privacy" element={<Privacy/>} />
     <Route path="/terms" element={<Terms/>} />
     

     


      


    </Route>

     <Route element={<AuthLayout />}>
     <Route path="/login" element={<Login />} />
     <Route path="/signup" element={<Signup />} />
     <Route path="/forgot-password" element={<ForgotPassword />} />
     <Route path="/reset-password/:token" element={<ResetPassword />} />
     <Route path="/order/:id" element={<Order />} />
     <Route path="/my-orders" element={<MyOrders />} />
     </Route>
     
     </Routes> 
     </BrowserRouter>

    </>
  )
}

export default App
