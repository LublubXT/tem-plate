import { BigImageLeftImageGridRight } from "../layouts/content/grid-layouts/big-image-left-image-grid-right";
import { BigImageLeftListRight } from "../layouts/content/grid-layouts/big-image-left-list-right";
import { CardOne } from "./cards/card1";
import { CardTwo } from "./cards/card2";
import { CardThree } from "./cards/card3";
import { CodeBlockArea } from "./CodeBlockArea";
import { Navbar } from "./navbar";

export function CardComponentCodeArea() {
  return (
    <div className="w-full bg-third">
      <Navbar />
      <div className="w-full max-w-[1480px] m-auto px-5">
        <h1 className="text-[40px] text-fourth font-text font-bold mt-[100px] mb-[40px]">
          Cards
        </h1>
        <div className="py-10 rounded-lg bg-third">
          <h1 className="text-[25px] font-text text-yellow font-semibold mb-1">
            Info
          </h1>

          <p className="text[17px] font-text text-first mb-5 mt-3">
            Here is the tailwind.config.cjs code -
          </p>
          {/* <BasicNavbar /> */}
          <CodeBlockArea
            language={"js"}
            visible={true}
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
            Header With Image Right with Text Left
          </h1> */}
          {/* <IRFHeaderWithText /> */}
          {/* <BigImageLeftListRight /> */}
          <CardOne />
          <CodeBlockArea
            language={`html`}
            visible={false}
            code={`<div className="min-w-[300px] w-[400px] h-[400px] overflow-y-clip group bg-white">
  <img src="image.jpg" alt="image" className="h-[400px] w-full object-cover relative bottom-0 group-hover:bottom-[64px] duration-500" />
  <div className="relative bottom-0 flex flex-row bg-white group-hover:bottom-[80px] duration-300 py-5 px-5 justify-between items-center border-y-4 border-yellow border-b-gray-100">
    <h1 className="font-bold font-text">Kentucky Cheese Burger</h1>
    <button className="font-text text-[15px] bg-yellow px-3 py-1 text-second font-semibold hover:opacity-90 duration-100">Order $10</button>
  </div>
</div>`}
          />
        </div>
        <div className="py-10 mt-10 rounded-lg bg-third">
          {/* <h1 className="text-[25px] font-text text-yellow font-semibold mb-8">
            Header With Image Right with Text Left
          </h1> */}
          {/* <IRFHeaderWithText /> */}
          {/* <BigImageLeftListRight /> */}
          <CardTwo />
          <CodeBlockArea
            language={`html`}
            visible={false}
            code={`<div className="min-w-[300px] w-[400px] h-[400px] overflow-y-clip group bg-white">
  <img src="image.jpg" alt="image" className="h-[400px] w-full object-cover relative bottom-0 group-hover:bottom-[0px] duration-500" />
  <div className="relative bottom-0 h-[400px] flex flex-col m-auto gap-5 bg-white group-hover:bottom-[400px] duration-300 py-5 px-5">
    <div>
      <h1 className="font-bold font-text text-[20px]">Kentucky Cheese Burger</h1>
      <h1 className="font-normal font-text text-[17px] mt-3 leading-7">Consequat officia adipisicing irure est sit laborum reprehenderit sunt anim id. Proident nulla enim et aute est proident ipsum anim eiusmod irure. Officia quis ea culpa quis ad velit amet aliqua proident.</h1>
    </div>
    <button className="font-text text-[15px] bg-yellow px-3 py-1 text-second font-semibold hover:opacity-90 duration-100 h-fit w-fit">Order $10</button>
  </div>
</div>`}
          />
        </div>
        <div className="py-10 mt-10 rounded-lg bg-third">
          {/* <h1 className="text-[25px] font-text text-yellow font-semibold mb-8">
            Header With Image Right with Text Left
          </h1> */}
          {/* <IRFHeaderWithText /> */}
          {/* <BigImageLeftListRight /> */}
          <CardThree />
          <CodeBlockArea
            language={`html`}
            visible={false}
            code={`<div className="min-w-[300px] w-[400px] h-[400px] overflow-y-clip group bg-white">
  <img src="image.jpg" alt="image" className="h-[400px] w-full object-cover relative bottom-0 group-hover:bottom-[0px] duration-500" />
  <div className="relative bottom-0 h-[360px] flex flex-col w-[90%] m-auto gap-5 bg-white group-hover:bottom-[380px] duration-300 py-5 px-5">
    <div>
      <h1 className="font-bold font-text text-[20px]">Kentucky Cheese Burger</h1>
      <h1 className="font-normal font-text text-[17px] mt-3 leading-7">Consequat officia adipisicing irure est sit laborum reprehenderit sunt anim id. Proident nulla enim et aute est proident ipsum anim eiusmod irure. Officia quis ea culpa quis ad velit amet aliqua proident.</h1>
    </div>
    <button className="font-text text-[15px] bg-yellow px-3 py-1 text-second font-semibold hover:opacity-90 duration-100 h-fit w-fit">Order $10</button>
  </div>
</div>`}
          />
        </div>

      </div>
    </div>
  );
}
