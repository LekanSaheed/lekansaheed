
import 'bootstrap-icons/font/bootstrap-icons.css'

//import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
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

const App = () => {
  const {state} = GlobalContext()
  return (
 
    <>
<div className="">
  <Router>
  <Header/>
 {state.showStatusModal &&  <StatusModal modalContent={state.modalContent}/>}
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
      <Login/>
      
    </Route>
    <Route path='/admin'>
      <Login/>
       <Admin/>
    </Route>
    <Route path='/process-order-payment'>
       <PaystackPay/>
    </Route>
  </Switch>
  
  </Router>
  
 

</div>
    </>
  );
}

export default App;
