import React, { FC, Fragment } from "react"
import "./App.css"
import Form from "./components/Form"
import logo from "./assets/logo.png"
import hero from "./assets/hero.png"

const App: FC = () => {
  return (
    <Fragment>
      <section className="hero is-dark">
        <div className="h-screen flex items-center">
          <div className="flex flex-col w-1/2 justify-center items-center ">
            <img className="mb-4" src={logo} alt="logo" width="313" />
            <Form />
          </div>
          <div
            style={{
              flexGrow: 1,
              flexBasis: 0,
              backgroundImage: "url(" + hero + ")",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              height: "80vmin",
            }}
          ></div>
        </div>
      </section>
    </Fragment>
  )
}

export default App
