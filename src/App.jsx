
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import PricingOptions from './components/PricingOptions/PricingOptions'
import ResultsChart from './components/ResultChart/ResultsChart'

const pricingPromise = fetch('pricingData.json')
            .then(res => res.json())

function App() {


  return (
    <>

   <header> 

    <NavBar></NavBar>
    {/* <DaisyNav></DaisyNav> */}
   </header>
   <main>
    <Suspense fallback={<span className="loading loading-spinner text-warning"></span>}>
      <PricingOptions pricingPromise={pricingPromise} ></PricingOptions>
    </Suspense>

    <ResultsChart></ResultsChart>
   </main>

    </>
  )
}

export default App
