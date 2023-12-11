import {Component} from 'react'
import './App.css';
import Home from "./components/Home";
import { BrowserRouter, Route, Switch, } from 'react-router-dom'

const App = () => (

  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home}/>
    </Switch>
  </BrowserRouter>
    
  
)

export default App
