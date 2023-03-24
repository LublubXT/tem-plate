
import { Navbar } from '../components/navbar';

function AboutPage() {

  return (
    <div className="bg-third">
      <Navbar />
      <div className="w-full mx-auto pt-20 h-auto px-5 pb-20 container-sm max-w-[900px]">
        <div className="flex flex-col h-auto min-h-[80vh]">
          <img src="tem-plate-logo.svg" alt="logo" className='block w-1/6 min-w-[200px] mb-10 max-md:w-2/6 max-sm:w-3/6' />
          <h1 className="text-left font-text font-bold text-[70px] text-fourth leading-none max-md:text-[60px] max-sm:text-[50px] max-sm:leading-none">About Tem Plate</h1>
          <p className="text-left font-text font-normal text-first text-[20px] mt-2 max-w-[600px] max-sm:mt-3">Tem Plate was built in mind for developers, which you probably already know. Instead of taking hours to create the layout for a website, you can now do it in minutes with the help of Tem Plate. Tem Plate is totally free and open source. I am constantly updating it and adding new layouts and components.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
