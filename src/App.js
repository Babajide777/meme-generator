import React from "react"
import Header from "./components/Header"
import MemeGenerator from "./components/MemeGenerator"

class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div>
        <Header />
        <MemeGenerator />
      </div>
    )
  }
}

export default App