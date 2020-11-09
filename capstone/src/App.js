import React from 'react'
import FormType from './components/FormType'
import MovieCollection from './components/movieCollection.js'
import TvCollection from './components/tvCollection.js'
import { Switch, Route } from 'react-router-dom'
import Header from './styledComponets/header.js'
import NavBar from './styledComponets/navBar.js'
import Footer from './styledComponets/footer'
import './StyleSheet.css'


function App() {
  return (
    <div className="App">

      <Header />
      <NavBar />
      <Switch>
        <Route exact path='/' component={FormType} />
        <Route path='/movies' component={MovieCollection} />
        <Route path='/tvshows' component={TvCollection} />
      </Switch>
      <Footer />

    </div>
  );
}

export default App