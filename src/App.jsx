import { Suspense } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PricingOptions from './components/PricingOptions/PricingOptions'

const pricingPromise = fetch('pricingData.json')
                       .then(res=>res.json())

function App() {

  return (
    <>
      <header>
       <Navbar></Navbar>
      </header>
       <main>
       <Suspense fallback={<span class="loading loading-dots loading-xl"></span>}>
       <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
       </Suspense>
       </main>
    </>
  )
}

export default App
