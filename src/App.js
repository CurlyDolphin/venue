import React from "react"
import "./resources/styles.css"
import {Header, Footer, Featured, VenueNfo, Highlight, Pricing, Location} from "./components"
import { Element } from "react-scroll"

const App = () => {
  return (
    <div className="App">

      <Header />

      <Element name="featured">
        <Featured />
      </Element>

      <Element name="venuenfo">
        <VenueNfo />
      </Element>

      <Element name="highlight">
        <Highlight />
      </Element>

      <Element name="pricing">
        <Pricing />
      </Element>

      <Element name="location">
        <Location />
      </Element>

      <Footer />

    </div>
  )
}

export default App;
