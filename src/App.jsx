import {Navbar , Hero} from  './components';
import Plans from './components/plans/Plans';
import './App.css'

function App() {


  return (
    <>
      {/* <div className='z-0 bg-white'>

      </div> */}

      <div className="circle-gradient w-full  h-screen">
        <Navbar/>
        <Hero/>
        {/* <Plans></Plans> */}
      </div>
    </>
  )
}

export default App
