import React, { Component } from 'react'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className='body'>
        <Header />
        <Main />
      </div>
    )
  }
}

