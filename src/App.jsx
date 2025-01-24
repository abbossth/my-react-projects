import { Routes, Route } from "react-router"
import Layout from "./layouts/layout"
import Home from "./components/home"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Home /> } ></Route>
          <Route path="/about" element={ <h1> About </h1> } ></Route>

          <Route path="*" element={ <h1> Not found... Sorry bro! </h1> } ></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
