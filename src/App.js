import {useEffect} from 'react'
import './App.css';
import React from 'react'
import Header from './Header'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Checkout from './Checkout'
import Footer from './Footer';
import Nav from './Nav';
import {auth} from './firebase'
import { useStatevalue } from './StateProvider';


function App() {  

    const [{loggedinuser}, dispatch] = useStatevalue()

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((userauth) =>{
        if(userauth){
          dispatch({
            type: 'SET_LOGIN',
            loggedinuser: userauth
          })
        }else{
          dispatch({
            type: 'SET_LOGIN',
            loggedinuser: null
          })
        }
      })
      return() => {
        unsubscribe();
      }
    },[])

      console.log("user >>", loggedinuser)
  return (
    <Router>
    <div className="App">
        <Switch>
            <Route path="/checkout">
              <Header/>
              <Checkout/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/">
              <Header/>
              <Nav/>
              <Home/>
              <Footer/>
            </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
