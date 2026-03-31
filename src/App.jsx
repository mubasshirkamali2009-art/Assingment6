import NavBar from "./compunent/NavBar"
import Hero from "./compunent/Hero"
import Start from "./compunent/Start"
import Tools from "./compunent/Tools"

import Cart from "./compunent/Cart"
import GetStarted from "./compunent/Steps"
import Pricing from "./compunent/Pricing"
import Footer from "./compunent/Footer"
import { useState,  } from "react"

const getTools = async () => {
  const res = await fetch("/Tools.json");
  return res.json();
};

const toolsPromise = getTools();

function App() {
  const [activeTab, setActiveTab] = useState("tools");
  const [carts, setCarts] = useState([]);

  return (
    <>
      <NavBar />
      <Hero />
      <Start />

      

     {activeTab === "tools" && (
  <Tools toolsPromise={toolsPromise} carts={carts} setCarts={setCarts} setActiveTab={setActiveTab} />
)}
{activeTab === "cart" && (
  <Cart carts={carts} setCarts={setCarts} setActiveTab={setActiveTab} />
)}

      <GetStarted />
      <Pricing />
      <Footer />
    </>
  )
}

export default App