import { BasicNavbar } from "../layouts/navbars/basic-nav";
import { NavbarWithButton } from "../layouts/navbars/nav-with-button";
import { NavbarWithLinksCenterWithButton } from "../layouts/navbars/nav-with-links-center-with-button";
import { NavbarWithLinksLeft } from "../layouts/navbars/nav-with-links-left";
import { NavbarWithLinksLeftWithButton } from "../layouts/navbars/nav-with-links-left-with-button";
import { CodeBlockArea } from "./CodeBlockArea";
import { Navbar } from "./navbar";

export function NavbarCodeArea() {
  return (
    <div className="w-full m-auto bg-third">
      <Navbar />
      <div className="w-full max-w-[1480px] m-auto px-5">
        <h1 className="text-[40px] text-fourth font-text font-bold mt-[50px] mb-[40px]">
          Navbars
        </h1>
        <div className="py-10 rounded-lg shadow-[0px 0px 20px 10px] bg-third shadow-black/10">
          <h1 className="text-[25px] font-text text-yellow font-semibold mb-1">
            Info
          </h1>
          <p className="text[17px] font-text text-first mb-8">Here is a way to toggle the link dropdown in the navbar with ReactJS. Use the <span className="code">useState()</span> function, and toggle between true and false when hamburger pressed.</p>
          {/* <BasicNavbar /> */}
          <CodeBlockArea language={'jsx'} visible={true}
            code={`import { useState } from "react"
            
export function Navbar() {
  const [showNav, setShowNav] = useState(false)

  function showNavBar() {
    setShowNav(!showNav)
  }

  console.log(showNav)

  return (
    <div className="sticky top-0 w-full bg-first">
      <div className="mx-auto container-xl mx-auto-xl">
        <div className="w-full p-[20px] h-auto flex flex-row content-center items-center justify-between bg-first z-100">
          <a href="#" className="font-text text-[24px] font-black text-second text-left leading-tight">Tem Plate</a>

          <svg width="2em" height="2em" onClick={showNavBar} className="hidden max-sm:block mt-[3px] cursor-pointer" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1h18M1 6h18M1 11h18" stroke="#000" strokeWidth={1.5} strokeLinecap="round" />
          </svg>

          <div className="flex flex-row align-middle max-sm:flex-col max-sm:hidden">
            <div className="flex flex-col mx-5 group">
              <a href="#" className="font-text text-[17px] text-second font-normal leading-tight">Home</a>
              <div className="h-[2px] w-0 bg-second mt-0 group-hover:w-full duration-200"></div>
            </div>
            <div className="flex flex-col mx-5 group">
              <a href="#" className="font-text text-[17px] text-second font-normal leading-tight">About</a>
              <div className="h-[2px] w-0 bg-second mt-0 group-hover:w-full duration-200"></div>
            </div>
            <div className="flex flex-col mx-5 group">
              <a href="#" className="font-text text-[17px] text-second font-normal leading-tight">Pricing</a>
              <div className="h-[2px] w-0 bg-second mt-0 group-hover:w-full duration-200"></div>
            </div>
            <div className="flex flex-col mx-5 mr-0 group">
              <a href="#" className="font-text text-[17px] text-second font-normal leading-tight">Contact</a>
              <div className="h-[2px] w-0 bg-second mt-0 group-hover:w-full duration-200"></div>
            </div>
          </div>
        </div>
        <div className={\`\${showNav === false ? 'fixed top-[-150px] opacity-0' : 'fixed top-[75px] bg-white w-full flex flex-col pb-4 opacity-100'} duration-200\`}>
          <div className="flex flex-col mx-5 group w-fit">
            <a href="#" className="font-text text-[17px] text-second font-normal">Home</a>
            <div className="h-[2px] w-0 bg-second mt-0 group-hover:w-full duration-200"></div>
          </div>
          <div className="flex flex-col mx-5 group w-fit">
            <a href="#" className="font-text text-[17px] text-second font-normal">About</a>
            <div className="h-[2px] w-0 bg-second mt-0 group-hover:w-full duration-200"></div>
          </div>
          <div className="flex flex-col mx-5 group w-fit">
            <a href="#" className="font-text text-[17px] text-second font-normal">Pricing</a>
            <div className="h-[2px] w-0 bg-second mt-0 group-hover:w-full duration-200"></div>
          </div>
          <div className="flex flex-col mx-5 mr-0 group w-fit">
            <a href="#" className="font-text text-[17px] text-second font-normal">Contact</a>
            <div className="h-[2px] w-0 bg-second mt-0 group-hover:w-full duration-200"></div>
          </div>
        </div>
      </div>
    </div>
  )
}`}
          />
          <p className="text[17px] font-text text-first mb-5 mt-10">Here is the <span className="code">tailwind.config.cjs</span> code -</p>
          {/* <BasicNavbar /> */}
          <CodeBlockArea language={'js'} visible={true}
            code={`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'first': '#ffffff',
        'second': '#3D5472',
        'third': '#333C4A',
        'fourth': '#F4FAFF',
        'yellow': '#FFD447',
      },
      fontFamily: {
        'text': 'Inter'
      }
    },
  },
  plugins: [],
}`}
          />
        </div>
        <div className="py-10 mt-10 rounded-lg bg-third">
          {/* <h1 className="text-[25px] font-text text-yellow font-semibold mb-8">
            Basic Navbar
          </h1> */}
          <BasicNavbar />
          <CodeBlockArea language={'html'} visible={false}
            code={`<div className="w-full bg-second">
  <div className="mx-auto container-xl mx-auto-xl">
    <div className="w-full p-[20px] h-auto flex flex-row content-center items-center justify-between bg-second">
      <h1 className="font-text text-[24px] font-black text-first text-left leading-tight">Nav Title</h1>

      <svg width="2em" height="2em" className="hidden max-sm:block mt-[3px] cursor-pointer" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1h18M1 6h18M1 11h18" stroke="#fff" strokeWidth={1.5} strokeLinecap="round" />
      </svg>

      <div className="flex flex-row align-middle max-sm:flex-col max-sm:hidden">
        <div className="flex flex-col mx-5 group">
          <a href="#" className="font-text text-[17px] text-first font-normal leading-tight">Home</a>
          <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
        </div>
        <div className="flex flex-col mx-5 group">
          <a href="#" className="font-text text-[17px] text-first font-normal leading-tight">About</a>
          <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
        </div>
        <div className="flex flex-col mx-5 group">
          <a href="#" className="font-text text-[17px] text-first font-normal leading-tight">Pricing</a>
          <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
        </div>
        <div className="flex flex-col mx-5 mr-0 group">
          <a href="#" className="font-text text-[17px] text-first font-normal leading-tight">Contact</a>
          <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
        </div>
      </div>
    </div>
    <div className="flex hidden pb-4 flex-column max-sm:block">
      <div className="flex flex-col mx-5 group">
        <a href="#" className="font-text text-[17px] text-first font-normal">Home</a>
        <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
      </div>
      <div className="flex flex-col mx-5 group">
        <a href="#" className="font-text text-[17px] text-first font-normal">About</a>
        <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
      </div>
      <div className="flex flex-col mx-5 group">
        <a href="#" className="font-text text-[17px] text-first font-normal">Pricing</a>
        <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
      </div>
      <div className="flex flex-col mx-5 mr-0 group">
        <a href="#" className="font-text text-[17px] text-first font-normal">Contact</a>
        <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
      </div>
    </div>
  </div>
</div>`}
          />
        </div>
        <div className="py-10 mt-10 rounded-lg bg-third">
          {/* <h1 className="text-[25px] font-text text-yellow font-semibold mb-8">
            Basic Navbar With Button
          </h1> */}
          <NavbarWithButton />
          <CodeBlockArea language={'html'} visible={false}
            code={`<div className="w-full bg-second">
  <div className="mx-auto container-xl">
    <div className="w-full p-[20px] h-auto flex flex-row items-center justify-between bg-second">
      <h1 className="font-text text-[24px] font-black text-first text-left leading-tight">Nav Title</h1>

      <svg width="2em" height="2em" className="hidden max-sm:block mt-[3px] cursor-pointer" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1h18M1 6h18M1 11h18" stroke="#fff" strokeWidth={1.5} strokeLinecap="round" />
      </svg>

      <div className="flex flex-row items-center max-sm:flex-col max-sm:hidden">
        <div className="flex flex-col mx-5 group">
          <a href="#" className="font-text text-[17px] text-first font-normal leading-tight">Home</a>
          <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
        </div>
        <div className="flex flex-col mx-5 group">
          <a href="#" className="font-text text-[17px] text-first font-normal leading-tight">About</a>
          <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
        </div>
        <div className="flex flex-col mx-5 group">
          <a href="#" className="font-text text-[17px] text-first font-normal leading-tight">Pricing</a>
          <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
        </div>
        <div className="flex flex-col mx-5 group">
          <a href="#" className="font-text text-[17px] text-first font-normal leading-tight">Contact</a>
          <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
        </div>
        <a href="#" className="bg-yellow text-second font-bold font-text hover:opacity-95 duration-200 py-2 ml-5 px-5 text-[20px]">Sign Up</a>
      </div>
    </div>
    <div className="flex hidden h-auto pb-4 flex-column max-sm:block">
      <div className="flex flex-col mx-5 group">
        <a href="#" className="font-text text-[17px] text-first font-normal">Home</a>
        <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
      </div>
      <div className="flex flex-col mx-5 group">
        <a href="#" className="font-text text-[17px] text-first font-normal">About</a>
        <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
      </div>
      <div className="flex flex-col mx-5 group">
        <a href="#" className="font-text text-[17px] text-first font-normal">Pricing</a>
        <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
      </div>
      <div className="flex flex-col mx-5 mb-5 mr-0 group">
        <a href="#" className="font-text text-[17px] text-first font-normal">Contact</a>
        <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
      </div>
      <a href="#" className="bg-yellow text-second font-bold hover:opacity-95 font-text duration-200 py-2 ml-5 px-5 text-[20px] mt-7">Sign Up</a>

    </div>
  </div>
</div>`}
          />
        </div>
        <div className="py-10 mt-10 rounded-lg bg-third">
          {/* <h1 className="text-[25px] font-text text-yellow font-semibold mb-8">
            Basic Navbar With Links Center Button
          </h1> */}
          <NavbarWithLinksCenterWithButton />
          <CodeBlockArea language={'html'} visible={false}
            code={`<div className="w-full bg-second">
  <div className="mx-auto container-xl">
    <div className="w-full p-[20px] h-auto flex flex-row items-center justify-between bg-second">
      <h1 className="font-text text-[24px] font-black text-first text-left leading-tight">Nav Title</h1>
      <div className="flex flex-row items-center ml-3 max-sm:flex-col max-sm:hidden">
        <div className="flex flex-col mx-5 group">
          <a href="#" className="font-text text-[17px] text-first font-normalBasicNavbarWithLinksLeft leading-tight">Home</a>
          <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
        </div>
        <div className="flex flex-col mx-5 group">
          <a href="#" className="font-text text-[17px] text-first font-normal leading-tight">About</a>
          <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
        </div>
        <div className="flex flex-col mx-5 group">
          <a href="#" className="font-text text-[17px] text-first font-normal leading-tight">Pricing</a>
          <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
        </div>
        <div className="flex flex-col mx-5 mr-0 group">
          <a href="#" className="font-text text-[17px] text-first font-normal leading-tight">Contact</a>
          <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
        </div>
      </div>
      <a href="#" className="bg-yellow text-second font-text font-bold hover:opacity-95 duration-200 py-2 ml-5 px-5 text-[20px] max-sm:hidden block">Sign Up</a>
      <svg width="2em" height="2em" className="hidden max-sm:block mt-[3px] cursor-pointer" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1h18M1 6h18M1 11h18" stroke="#fff" strokeWidth={1.5} strokeLinecap="round" />
      </svg>
    </div>
    <div className="flex hidden pb-4 flex-column max-sm:block">
      <div className="flex flex-col mx-5 group">
        <a href="#" className="font-text text-[17px] text-first font-normal">Home</a>
        <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
      </div>
      <div className="flex flex-col mx-5 group">
        <a href="#" className="font-text text-[17px] text-first font-normal">About</a>
        <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
      </div>
      <div className="flex flex-col mx-5 group">
        <a href="#" className="font-text text-[17px] text-first font-normal">Pricing</a>
        <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
      </div>
      <div className="flex flex-col mx-5 mb-5 mr-0 group">
        <a href="#" className="font-text text-[17px] text-first font-normal">Contact</a>
        <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
      </div>
      <a href="#" className="bg-yellow text-second font-text font-bold hover:opacity-95 duration-200 py-2 ml-5 px-5 text-[20px]">Sign Up</a>
    </div>
  </div>
</div>`}
          />
        </div>
        <div className="py-10 mt-10 rounded-lg bg-third">
          {/* <h1 className="text-[25px] font-text text-yellow font-semibold mb-8">
            Basic Navbar With Links Left
          </h1> */}
          <NavbarWithLinksLeft />
          <CodeBlockArea language={'html'} visible={false}
            code={`<div className="w-full bg-second">
  <div className="mx-auto container-xl">
    <div className="w-full p-[20px] h-auto flex flex-row items-center justify-between bg-second">
      <div className="flex flex-row content-center item-center">
        <h1 className="font-text text-[24px] font-black text-first text-left leading-tight">Nav Title</h1>
        <div className="flex flex-row items-center ml-3 max-sm:flex-col max-sm:hidden">
          <div className="flex flex-col mx-5 group">
            <a href="#" className="font-text text-[17px] text-first font-normalBasicNavbarWithLinksLeft leading-tight">Home</a>
            <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
          </div>
          <div className="flex flex-col mx-5 group">
            <a href="#" className="font-text text-[17px] text-first font-normal leading-tight">About</a>
            <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
          </div>
          <div className="flex flex-col mx-5 group">
            <a href="#" className="font-text text-[17px] text-first font-normal leading-tight">Pricing</a>
            <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
          </div>
          <div className="flex flex-col mx-5 mr-0 group">
            <a href="#" className="font-text text-[17px] text-first font-normal leading-tight">Contact</a>
            <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
          </div>
        </div>
      </div>
      <svg width="2em" height="2em" className="hidden max-sm:block mt-[3px] cursor-pointer" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1h18M1 6h18M1 11h18" stroke="#fff" strokeWidth={1.5} strokeLinecap="round" />
      </svg>
    </div>
    <div className="flex hidden pb-4 flex-column max-sm:block">
      <div className="flex flex-col mx-5 group">
        <a href="#" className="font-text text-[17px] text-first font-normal">Home</a>
        <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
      </div>
      <div className="flex flex-col mx-5 group">
        <a href="#" className="font-text text-[17px] text-first font-normal">About</a>
        <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
      </div>
      <div className="flex flex-col mx-5 group">
        <a href="#" className="font-text text-[17px] text-first font-normal">Pricing</a>
        <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
      </div>
      <div className="flex flex-col mx-5 mr-0 group">
        <a href="#" className="font-text text-[17px] text-first font-normal">Contact</a>
        <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
      </div>
    </div>
  </div>
</div>`}
          />
        </div>
        <div className="py-10 mt-10 rounded-lg bg-third">
          {/* <h1 className="text-[25px] font-text text-yellow font-semibold mb-8">
            Basic Navbar With Links Left With button
          </h1> */}
          <NavbarWithLinksLeftWithButton />
          <CodeBlockArea language={'html'} visible={false}
            code={`<div className="w-full bg-second">
  <div className="mx-auto container-xl">
    <div className="w-full p-[20px] h-auto flex flex-row items-center justify-between bg-second">
      <div className="flex flex-row content-center item-center">
        <h1 className="font-text text-[24px] font-black text-first text-left leading-tight">Nav Title</h1>
        <div className="flex flex-row items-center ml-3 max-sm:flex-col max-sm:hidden">
          <div className="flex flex-col mx-5 group">
            <a href="#" className="font-text text-[17px] text-first font-normalBasicNavbarWithLinksLeft leading-tight">Home</a>
            <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
          </div>
          <div className="flex flex-col mx-5 group">
            <a href="#" className="font-text text-[17px] text-first font-normal leading-tight">About</a>
            <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
          </div>
          <div className="flex flex-col mx-5 group">
            <a href="#" className="font-text text-[17px] text-first font-normal leading-tight">Pricing</a>
            <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
          </div>
          <div className="flex flex-col mx-5 mr-0 group">
            <a href="#" className="font-text text-[17px] text-first font-normal leading-tight">Contact</a>
            <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
          </div>
        </div>
      </div>
      <a href="#" className="bg-yellow text-second font-text font-bold hover:opacity-95 duration-200 py-2 ml-5 px-5 text-[20px] max-sm:hidden block">Sign Up</a>
      <svg width="2em" height="2em" className="hidden max-sm:block mt-[3px] cursor-pointer" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1h18M1 6h18M1 11h18" stroke="#fff" strokeWidth={1.5} strokeLinecap="round" />
      </svg>
    </div>
    <div className="flex hidden h-auto pb-4 flex-column max-sm:block">
      <div className="flex flex-col mx-5 group">
        <a href="#" className="font-text text-[17px] text-first font-normal ">Home</a>
        <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
      </div>
      <div className="flex flex-col mx-5 group">
        <a href="#" className="font-text text-[17px] text-first font-normal ">About</a>
        <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
      </div>
      <div className="flex flex-col mx-5 group">
        <a href="#" className="font-text text-[17px] text-first font-normal ">Pricing</a>
        <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
      </div>
      <div className="flex flex-col mx-5 mb-5 mr-0 group">
        <a href="#" className="font-text text-[17px] text-first font-normal ">Contact</a>
        <div className="h-[2px] w-0 bg-first mt-0 group-hover:w-full duration-200"></div>
      </div>
      <a href="#" className="bg-yellow text-second font-bold hover:opacity-95 duration-200 py-2 ml-5 px-5 text-[20px] mt-7">Sign Up</a>
    </div>
  </div>
</div>`}
          />
        </div>
      </div>
    </div>
  );
}
