
import 'bootstrap-icons/font/bootstrap-icons.css'

//import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header'
import Products from './components/Products'
import Cart from './components/Cart'
import './App.css';
import FlatList from './components/FlatList'


const App = () => {
  return (
    <>
<div className="">
  <Router>
  <Header/>
  <Switch>
    <Route exact path='/'>
      <FlatList/>
    <Products/>
    </Route>

    <Route path='/cart'>
       <Cart/>
    </Route>
  </Switch>
  </Router>
  
 

</div>
    </>
  );
}

export default App;
