import {Navbar , Hero} from  './components';
import Plans from './components/plans/Plans';

function App() {


  return (
    <>
      {/* <div className='z-0 bg-white'>

      </div> */}

      <div className="bg-hero-pattern w-full  h-screen">
        <Navbar/>
        <Hero/>
        {/* <Plans></Plans> */}
      </div>
    </>
  )
}

export default App
