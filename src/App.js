
import 'bootstrap-icons/font/bootstrap-icons.css'
import React from 'react'
//import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Header from './components/Header'
import Products from './components/Products'
import Cart from './components/Cart'
import './App.css';
import FlatList from './components/FlatList'
import Nav from './components/Nav'
import Admin from './components/Admin'
import Tag from './components/Tag'
import StatusModal from './components/StatusModal'
import { GlobalContext } from './components/context'
import PaystackPay from './components/PaystackPay'
import Login from './components/Login'
import Account from './components/Account'
import Logout from './components/Logout'
import SignUp from './components/SignUp'
import Footer from './components/Footer'

const App = () => {

  const [winwid, setWinwidth] = React.useState(null)

  const {state} = GlobalContext()
const checkWidth = () => {
  if(window.innerWidth < 901 ){
    setWinwidth(true)
  }
  else{
    setWinwidth(false)
  }
}

  window.addEventListener('resize', (checkWidth))
  return (
 
    <>
<div className="">
  <Router>
  <Header/>
 {state.showStatusModal &&  <StatusModal modalContent={state.modalContent}/>}
{winwid && <Nav/>}
  <Switch>
    <Route exact path='/'>
      <div className="nav_and_flatlist">
       <Nav/>
      <FlatList/>
     
       </div>
       <Tag text={'Phones'}/>
    <Products/>
    </Route>

    <Route path='/cart'>
       <Cart/>
    </Route>
    <Route path='/login'>
    {state.isLoggedIn ? <Redirect to='/account'/> : <Login/> }
      
      
    </Route>
    <Route path='/logout'>
        <Logout/>
        {!state.isLoggedIn && <Redirect to='/'/>}
      </Route>
      <Route path='/signup'>
        <SignUp/>
      </Route>
    <Route path='/admin'>
      <Login/>
       <Admin/>
    </Route>
    <Route path='/account'>
    <Account/>
    </Route>
    <Route path='/process-order-payment'>
       <PaystackPay/>
    </Route>
  </Switch>
  <Footer/>
  </Router>
  
 

</div>
    </>
  );
}

export default App;
