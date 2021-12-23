import React, { FC, Fragment } from "react"
import "./App.css"
import Form from "./components/Form"
import logo from "./assets/logo.png"

const App: FC = () => {
  return (
    <Fragment>
      <section className="hero is-light has-text-centered">
        <div className="hero-head">
          <header className="navbar">
            <img src={logo} alt="logo" />
          </header>
        </div>
        <div className="hero-body">
          <div className="container">
            <h1 className="is-size-1">
              ReactJS multi step form with validation
            </h1>
          </div>
          <div className="container pt-5">
            <div className="columns">
              <div className="column is-half is-offset-one-quarter">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default App
