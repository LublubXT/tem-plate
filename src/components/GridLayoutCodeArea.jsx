import { BigImageLeftImageGridRight } from "../layouts/content/grid-layouts/big-image-left-image-grid-right";
import { BigImageLeftListRight } from "../layouts/content/grid-layouts/big-image-left-list-right";
import { CodeBlockArea } from "./CodeBlockArea";
import { Navbar } from "./navbar";

export function GridLayoutCodeArea() {
  return (
    <div className="w-full bg-third">
      <Navbar />
      <div className="w-full max-w-[1480px] m-auto px-5">
        <h1 className="text-[40px] text-fourth font-text font-bold mt-[100px] mb-[40px]">
          Grid Layouts
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
          <BigImageLeftListRight />
          <CodeBlockArea
            language={`html`}
            visible={false}
            code={`<div className="h-auto">
  <div className=" h-[90vh] flex flex-row w-full max-md:flex-col max-md:justify-start max-md:h-auto max-md:gap-20 max-w-[1280px] m-auto gap-10 justify-center">
    <div className="flex flex-col self-center justify-between w-full gap-16 max-md:pb-20 h-3/4">
      <div className="flex flex-row items-center w-full gap-4">
        <img src="image2.jpg" alt="" className="w-[150px] h-[150px] object-cover" />
        <div className="w-9/12">
          <h1 className="font-semibold font-text text-[20px] mb-1">Some Text</h1>
          <p className="mb-1 font-tex">Et dolore reprehenderit consequat eiusmod sint veniam do. Incididunt ea voluptate minim ex ea veniam.</p>
          <a href="#" className="font-text text-[14px] text-blue">Go here</a>
        </div>
      </div>
      <div className="flex flex-row items-center w-full gap-4">
        <img src="image2.jpg" alt="" className="w-[150px] h-[150px] object-cover" />
        <div className="w-9/12">
          <h1 className="font-semibold font-text text-[20px] mb-1">Some Text</h1>
          <p className="mb-1 font-tex">Et dolore reprehenderit consequat eiusmod sint veniam do. Incididunt ea voluptate minim ex ea veniam.</p>
          <a href="#" className="font-text text-[14px] text-blue">Go here</a>
        </div>
      </div>
      <div className="flex flex-row items-center w-full gap-4">
        <img src="image2.jpg" alt="" className="w-[150px] h-[150px] object-cover" />
        <div className="w-9/12">
          <h1 className="font-semibold font-text text-[20px] mb-1">Some Text</h1>
          <p className="mb-1 font-tex">Et dolore reprehenderit consequat eiusmod sint veniam do. Incididunt ea voluptate minim ex ea veniam.</p>
          <a href="#" className="font-text text-[14px] text-blue">Go here</a>
        </div>
      </div>

    </div>
    <div className="flex flex-row justify-start w-full h-full">
      <img src="image.jpg" alt="image" className="self-center object-cover w-full h-3/4 " />
    </div>
  </div>
</div>`}
          />
        </div>
        <div className="py-10 mt-10 rounded-lg bg-third">
          {/* <h1 className="text-[25px] font-text text-yellow font-semibold mb-8">
            Header With Image Right with Text Left
          </h1> */}
          {/* <IRFHeaderWithText /> */}
          <BigImageLeftImageGridRight />
          <CodeBlockArea
            language={`html`}
            visible={false}
            code={`<div className="h-auto bg-white">
  <div className=" h-[90vh] flex flex-row w-full max-md:flex-col max-md:justify-start max-md:h-auto max-md:gap-20 max-w-[1280px] m-auto gap-10 justify-center">
    <div className="flex flex-row justify-start w-full h-full">
      <img src="image.jpg" alt="image" className="self-center object-cover w-full h-3/4 " />
    </div>
    <div className="flex flex-row flex-wrap self-center justify-end w-full h-auto gap-10 max-md:justify-center max-md:pb-20">
      <img src="image2.jpg" alt="" className="w-[42%] max-md:w-[250px] h-[250px] object-cover" />
      <img src="image2.jpg" alt="" className="w-[42%] max-md:w-[250px] h-[250px] object-cover" />
      <img src="image2.jpg" alt="" className="w-[42%] max-md:w-[250px] h-[250px] object-cover" />
      <img src="image2.jpg" alt="" className="w-[42%] max-md:w-[250px] h-[250px] object-cover" />
    </div>
  </div>
</div>`}
          />
        </div>

      </div>
    </div>
  );
}
