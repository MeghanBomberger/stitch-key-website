import React from 'react'
import "./app.css"
import Landing from "./pages/landing"
import Header from "./components/header"
import Footer from "./components/footer"


export default function App () {
  return (
    <div className="app">
      <Header/>
      <Landing/>
      <Footer/>
    </div>
  )
}
