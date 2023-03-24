
import { Navbar } from './components/navbar';
import { Outlet, Link } from "react-router-dom";

function App() {

  return (
    <div className="bg-third">
      <Navbar />
      <div className="w-full h-auto pb-20">
        <div className="flex flex-col justify-center h-auto min-h-[80vh]">
          <img src="tem-plate-logo.svg" alt="logo" className='block w-1/6 min-w-[200px] mx-auto mb-10 max-md:w-2/6 max-sm:w-3/6' />
          <h1 className="text-center font-text font-bold text-[100px] text-fourth leading-none max-md:text-[70px] max-sm:text-[60px] max-sm:leading-none">Tem Plate</h1>
          <p className="text-center font-text font-normal text-first text-[20px] mt-2 max-w-[600px] mx-auto max-sm:mt-3">Free open source web layouts and components </p>
          <div className='flex flex-row gap-5 mx-auto mt-3 w-fit'>
            <Link to={`/layouts`} className="bg-yellow hover:shadow-yellow/20 text-third text-[20px] font-text py-[7px] px-[17px] mt-5 w-fit mx-auto rounded-lg duration-200 shadow-lg shadow-yellow/30">Layouts</Link>
            <Link to={`/components`} className="bg-fourth text-third hover:shadow-fourth/20 duration-200 text-[20px] font-text py-[7px] px-[17px] mt-5 w-fit mx-auto rounded-lg shadow-lg shadow-fourth/30">Components</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
