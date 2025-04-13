import { Suspense } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PricingOptions from './components/PricingOptions/PricingOptions'
import ResultChart from './components/ResultChart/ResultChart'
import axios from 'axios'
import MarksChart from './components/MarksChart/MarksChart'

const pricingPromise = fetch('pricingData.json')
                       .then(res=>res.json())

const marksPromise = axios.get('markData.json')

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

       <Suspense fallback={<span class="loading loading-dots loading-xl"></span>}>
          <MarksChart marksPromise={marksPromise}></MarksChart>
       </Suspense>

       <ResultChart></ResultChart>
       </main>
    </>
  )
}

export default App
