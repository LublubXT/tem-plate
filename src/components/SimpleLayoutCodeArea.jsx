import { CodeBlockArea } from "./CodeBlockArea";
import { Navbar } from "./navbar";

import { IRFHeaderWithText } from "../layouts/headers/with-image-right/full/header-with-text-left";
import { IRFHeaderWithTextAndButton } from "../layouts/headers/with-image-right/full/header-with-text-left-with-button";
import { IRFHeaderWithTextAndTextInputAndButton } from "../layouts/headers/with-image-right/full/header-with-text-left-with-textinput-and-button";
import { IRPHeaderWithTextAndTextInputAndButton } from "../layouts/headers/with-image-right/part/header-with-text-left-with-textinput-and-button";
import { IRPHeaderWithText } from "../layouts/headers/with-image-right/part/header-with-text-left";
import { IRPHeaderWithTextAndButton } from "../layouts/headers/with-image-right/part/header-with-text-left-with-button";
import { ILFWithText } from "../layouts/headers/with-image-left/full/header-with-text-left";
import { ILFWithTextAndButton } from "../layouts/headers/with-image-left/full/header-with-text-left-with-button";
import { ILFWithTextAndTextInputAndButton } from "../layouts/headers/with-image-left/full/header-with-text-left-with-textinput-and-button";
import { ILPWithText } from "../layouts/headers/with-image-left/part/header-with-text-left";
import { ILPWithTextAndButton } from "../layouts/headers/with-image-left/part/header-with-text-left-with-button";
import { ILPWithTextAndTextInputAndButton } from "../layouts/headers/with-image-left/part/header-with-text-left-with-textinput-and-button";

export function SimpleLayoutCodeArea() {
  return (
    <div className="w-full bg-third">
      <Navbar />
      <div className="w-full max-w-[1480px] m-auto px-5">
        <h1 className="text-[40px] text-fourth font-text font-bold mt-[100px] mb-[40px]">
          Simple Layouts
        </h1>
        <div className="p-5 pb-1 mb-10 rounded-lg bg-second">
          <p className="text[17px] font-text text-first mb-5 mt-1">
            <span className="px-3 py-1 mr-2 font-bold rounded-lg font-text bg-yellow text-third">
              Note
            </span>
            These can also be used as headers. You can use them wherever you
            want!
          </p>
        </div>
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
          <IRFHeaderWithText className="rounded-lg" />
          <CodeBlockArea
            language={`html`}
            visible={false}
            code={`<div className="min-h-[90vh] bg-white">
  <div className="min-h-[90vh] flex flex-row w-full max-md:flex-col max-md:justify-start max-md:h-auto max-md:gap-20 max-w-[1280px] m-auto gap-4 justify-center">
    <div className="h-auto flex flex-col justify-center w-full max-w-[1280px] m-auto px-4 max-md:pt-20">
      <p className="text-left font-text font-thin text-second text-[24px] max-sm:mb-4">Some Above Text</p>
      <h1 className="text-left font-text font-bold text-[80px] text-second max-md:text-[70px] leading-none my-4 ml-[-4px] max-sm:text-[60px] max-sm:leading-none">Some Title Text</h1>
      <p className="text-left font-text font-normal text-second text-[20px] max-w-[600px] max-sm:mt-3">Et dolore reprehenderit consequat eiusmod sint veniam do. Incididunt ea voluptate minim ex ea veniam. Non ut magna aute magna deserunt id officia laboris.</p>
    </div>
    <div className="w-full">
      <img src="bg-image.jpg" alt="image" className="object-cover object-center h-full w-12/12" />
    </div>
  </div>
</div>`}
          />
        </div>
        <div className="py-10 mt-10 rounded-lg bg-third">
          {/* <h1 className="text-[25px] font-text text-yellow font-semibold mb-8">
            Header With Image Right with Text Left and Button
          </h1> */}
          <IRFHeaderWithTextAndButton />
          <CodeBlockArea
            language={"html"}
            visible={false}
            code={`<div className="min-h-[90vh] bg-white">
  <div className="min-h-[90vh] flex flex-row w-full max-md:flex-col max-md:justify-start max-md:h-auto max-md:gap-20 max-w-[1280px] m-auto gap-4 justify-center">
    <div className="h-auto flex flex-col justify-center w-full max-w-[1280px] m-auto px-4 max-md:pt-20">
      <p className="text-left font-text font-thin text-second text-[24px] max-sm:mb-4">Some Above Text</p>
      <h1 className="text-left font-text font-bold text-[80px] text-second leading-none my-4 ml-[-4px] max-md:text-[70px] max-sm:text-[60px] max-sm:leading-none">Some Title Text</h1>
      <p className="text-left font-text font-normal text-second text-[20px] max-w-[600px] max-sm:mt-3">Et dolore reprehenderit consequat eiusmod sint veniam do. Incididunt ea voluptate minim ex ea veniam. Non ut magna aute magna deserunt id officia laboris.</p>
      <button className="bg-yellow text-third text-[20px] font-text py-[7px] px-[17px] mt-5 w-fit">Join Now</button>
    </div>
    <div className="w-full">
      <img src="bg-image.jpg" alt="image" className="object-cover object-center h-full w-12/12" />
    </div>
  </div>
</div>`}
          />
        </div>
        <div className="py-10 mt-10 rounded-lg bg-third">
          {/* <h1 className="text-[25px] font-text text-yellow font-semibold mb-8">
            Header With Image Right with Text Left Text Input and Button
          </h1> */}
          <IRFHeaderWithTextAndTextInputAndButton />
          <CodeBlockArea
            language={"html"}
            visible={false}
            code={`<div className="min-h-[90vh] bg-white">
  <div className="min-h-[90vh] flex flex-row w-full max-md:flex-col max-md:justify-start max-md:h-auto max-md:gap-20 max-w-[1280px] m-auto gap-4 justify-center">
    <div className="h-auto flex flex-col justify-center w-full max-w-[1280px] m-auto px-4 max-md:pt-20">
      <p className="text-left font-text font-thin text-second text-[24px] max-sm:mb-4">Some Above Text</p>
      <h1 className="text-left font-text font-bold text-[80px] leading-none my-4 ml-[-4px] text-second max-md:text-[70px] max-sm:text-[60px] max-sm:leading-none">Some Title Text</h1>
      <p className="text-left font-text font-normal text-second text-[20px] max-w-[600px] max-sm:mt-3">Et dolore reprehenderit consequat eiusmod sint veniam do. Incididunt ea voluptate minim ex ea veniam. Non ut magna aute magna deserunt id officia laboris.</p>
      <div className="flex flex-row mt-5 w-fit">
        <input type="text" className="py-[7px] px-[14px] bg-first border-second border-2 border-r-0 outline-none font-text" placeholder="Email..." />
        <button className="bg-yellow text-third font-text px-[14px]">Submit</button>
      </div>
    </div>
    <div className="w-full">
      <img src="bg-image.jpg" alt="image" className="object-cover object-center h-full w-12/12" />
    </div>
  </div>
</div>`}
          />
        </div>

        <div className="py-10 mt-10 rounded-lg bg-third">
          {/* <h1 className="text-[25px] font-text text-yellow font-semibold mb-8">
            Header With Image Right with Text Left Text Input and Button
          </h1> */}
          <IRPHeaderWithText />
          <CodeBlockArea
            language={"html"}
            visible={false}
            code={`<div className="h-[90vh] max-md:h-auto bg-white">
  <div className="h-[90vh] flex flex-row w-full max-md:flex-col max-md:justify-start max-md:h-auto max-md:gap-20 max-w-[1280px] m-auto gap-10 justify-center">
    <div className="h-auto flex flex-col justify-center w-full max-w-[1280px] m-auto px-4 max-md:pt-20 ">
      <p className="text-left font-text font-thin text-second text-[24px] max-sm:mb-4">Some Above Text</p>
      <h1 className="text-left  font-text font-bold text-[80px] text-second max-md:text-[70px] leading-none my-4 ml-[-4px] max-sm:text-[60px] max-sm:leading-none">Some Title Text</h1>
      <p className="text-left  font-text font-normal text-second text-[20px] max-w-[600px] max-sm:mt-3">Et dolore reprehenderit consequat eiusmod sint veniam do. Incididunt ea voluptate minim ex ea veniam. Non ut magna aute magna deserunt id officia laboris.</p>
    </div>
    <div className="flex flex-row justify-end w-full h-full">
      <img src="image.jpg" alt="image" className="self-center object-cover w-full h-3/4 " />
    </div>
  </div>
</div>`}
          />
        </div>
        <div className="h-auto py-10 mt-10 rounded-lg bg-third">
          {/* <h1 className="text-[25px] font-text text-yellow font-semibold mb-8">
            Header With Image Right with Text Left Text Input and Button
          </h1> */}
          <IRPHeaderWithTextAndButton />
          <CodeBlockArea
            language={"html"}
            visible={false}
            code={`<div className="h-[90vh] max-md:h-auto bg-white">
  <div className="h-[90vh] flex flex-row w-full max-md:flex-col max-md:justify-start max-md:h-auto max-md:gap-20 max-w-[1280px] m-auto gap-10 justify-center">
    <div className="h-auto flex flex-col justify-center w-full max-w-[1280px] m-auto px-4 max-md:pt-20">
      <p className="text-left font-text font-thin text-second text-[24px] max-sm:mb-4">Some Above Text</p>
      <h1 className="text-left  font-text font-bold text-[80px] text-second leading-none my-4 ml-[-4px] max-md:text-[70px] max-sm:text-[60px] max-sm:leading-none">Some Title Text</h1>
      <p className="text-left  font-text font-normal text-second text-[20px] max-w-[600px] max-sm:mt-3">Et dolore reprehenderit consequat eiusmod sint veniam do. Incididunt ea voluptate minim ex ea veniam. Non ut magna aute magna deserunt id officia laboris.</p>
      <button className="bg-yellow text-third text-[20px] font-text py-[7px] px-[17px] mt-5 w-fit">Join Now</button>
    </div>
    <div className="flex flex-row justify-end w-full h-full">
      <img src="image.jpg" alt="image" className="self-center object-cover w-full h-3/4 " />
    </div>
  </div>
</div>`}
          />
        </div>

        <div className="py-10 mt-10 rounded-lg bg-third">
          {/* <h1 className="text-[25px] font-text text-yellow font-semibold mb-8">
            Header With Image Right with Text Left Text Input and Button
          </h1> */}
          <IRPHeaderWithTextAndTextInputAndButton />
          <CodeBlockArea
            language={"html"}
            visible={false}
            code={`<div className="h-auto bg-white">
  <div className="h-[90vh] flex flex-row w-full max-md:flex-col max-md:justify-start max-md:h-auto max-md:gap-20 max-w-[1280px] m-auto gap-10 justify-center">
    <div className="h-auto flex flex-col justify-center w-full max-w-[1280px] m-auto px-4 max-md:pt-20">
      <p className="text-left font-text font-thin text-second text-[24px] max-sm:mb-4">Some Above Text</p>
      <h1 className="text-left  font-text font-bold text-[80px] leading-none my-4 ml-[-4px] text-second max-md:text-[70px] max-sm:text-[60px] max-sm:leading-none">Some Title Text</h1>
      <p className="text-left  font-text font-normal text-second text-[20px] max-w-[600px] max-sm:mt-3">Et dolore reprehenderit consequat eiusmod sint veniam do. Incididunt ea voluptate minim ex ea veniam. Non ut magna aute magna deserunt id officia laboris.</p>
      <div className="flex flex-row mt-5 w-fit">
        <input type="text" className="py-[7px] px-[14px] bg-first border-second border-2 border-r-0 outline-none font-text" placeholder="Email..." />
        <button className="bg-yellow text-third font-text px-[14px]">Submit</button>
      </div>
    </div>
    <div className="flex flex-row justify-end w-full h-full">
      <img src="image.jpg" alt="image" className="self-center object-cover w-full h-3/4 " />
    </div>
  </div>
</div>`}
          />
        </div>




        {/*  ------------------------------------------------------------------------------------------------------------------*/}





        <div className="py-10 mt-10 rounded-lg bg-third">
          {/* <h1 className="text-[25px] font-text text-yellow font-semibold mb-8">
            Header With Image Right with Text Left
          </h1> */}
          <ILFWithText />
          <CodeBlockArea
            language={"html"}
            visible={false}
            code={`<div className="h-[90vh] max-md:h-auto bg-white">
  <div className="h-[90vh] flex flex-row w-full max-md:flex-col max-md:justify-start max-md:h-auto max-md:gap-20 max-w-[1280px] m-auto gap-4 justify-center">
    <div className="w-full">
      <img src="bg-image.jpg" alt="image" className="object-cover object-center h-full w-12/12" />
    </div>
    <div className="h-auto flex flex-col justify-center w-full max-w-[1280px] m-auto px-4 max-md:pb-20">
      <p className="text-left font-text font-thin text-second text-[24px] max-sm:mb-4">Some Above Text</p>
      <h1 className="text-left  font-text font-bold text-[80px] text-second max-md:text-[70px] leading-none my-4 ml-[-4px] max-sm:text-[60px] max-sm:leading-none">Some Title Text</h1>
      <p className="text-left  font-text font-normal text-second text-[20px] max-w-[600px] max-sm:mt-3">Et dolore reprehenderit consequat eiusmod sint veniam do. Incididunt ea voluptate minim ex ea veniam. Non ut magna aute magna deserunt id officia laboris.</p>
    </div>
  </div>
</div>`}
          />
        </div>
        <div className="py-10 mt-10 rounded-lg bg-third">
          {/* <h1 className="text-[25px] font-text text-yellow font-semibold mb-8">
            Header With Image Right with Text Left and Button
          </h1> */}
          <ILFWithTextAndButton />
          <CodeBlockArea
            language={"html"}
            visible={false}
            code={`<div className=" h-[90vh] max-md:h-auto bg-white">
  <div className="h-[90vh] flex flex-row w-full max-md:flex-col max-md:justify-start max-md:h-auto max-md:gap-20 max-w-[1280px] m-auto gap-4 justify-center">
    <div className="w-full">
      <img src="bg-image.jpg" alt="image" className="object-cover object-center h-full w-12/12" />
    </div>
    <div className="h-auto flex flex-col justify-center w-full max-w-[1280px] m-auto px-4 max-md:pb-20">
      <p className="text-left font-text font-thin text-second text-[24px] max-sm:mb-4">Some Above Text</p>
      <h1 className="text-left  font-text font-bold text-[80px] text-second leading-none my-4 ml-[-4px] max-md:text-[70px] max-sm:text-[60px] max-sm:leading-none">Some Title Text</h1>
      <p className="text-left  font-text font-normal text-second text-[20px] max-w-[600px] max-sm:mt-3">Et dolore reprehenderit consequat eiusmod sint veniam do. Incididunt ea voluptate minim ex ea veniam. Non ut magna aute magna deserunt id officia laboris.</p>
      <button className="bg-yellow text-third text-[20px] font-text py-[7px] px-[17px] mt-5 w-fit">Join Now</button>
    </div>
  </div>
</div>`}
          />
        </div>
        <div className="py-10 mt-10 rounded-lg bg-third">
          {/* <h1 className="text-[25px] font-text text-yellow font-semibold mb-8">
            Header With Image Right with Text Left Text Input and Button
          </h1> */}
          <ILFWithTextAndTextInputAndButton />
          <CodeBlockArea
            language={"html"}
            visible={false}
            code={`<div className="h-[90vh] max-md:h-auto bg-white">
  <div className="h-[90vh] flex flex-row w-full max-md:flex-col max-md:justify-start max-md:h-auto max-md:gap-20 max-w-[1280px] m-auto gap-4 justify-center">
    <div className="w-full">
      <img src="bg-image.jpg" alt="image" className="object-cover object-center h-full w-12/12" />
    </div>
    <div className="h-auto flex flex-col justify-center w-full max-w-[1280px] m-auto px-4 max-md:pb-20">
      <p className="text-left font-text font-thin text-second text-[24px] max-sm:mb-4">Some Above Text</p>
      <h1 className="text-left  font-text font-bold text-[80px] leading-none my-4 ml-[-4px] text-second max-md:text-[70px] max-sm:text-[60px] max-sm:leading-none">Some Title Text</h1>
      <p className="text-left  font-text font-normal text-second text-[20px] max-w-[600px] max-sm:mt-3">Et dolore reprehenderit consequat eiusmod sint veniam do. Incididunt ea voluptate minim ex ea veniam. Non ut magna aute magna deserunt id officia laboris.</p>
      <div className="flex flex-row mt-5 w-fit">
        <input type="text" className="py-[7px] px-[14px] bg-first border-second border-2 border-r-0 outline-none font-text" placeholder="Email..." />
        <button className="bg-yellow text-third font-text px-[14px]">Submit</button>
      </div>
    </div>
  </div>
</div>`}
          />
        </div>

        <div className="py-10 mt-10 rounded-lg bg-third">
          {/* <h1 className="text-[25px] font-text text-yellow font-semibold mb-8">
            Header With Image Right with Text Left Text Input and Button
          </h1> */}
          <ILPWithText />
          <CodeBlockArea
            language={"html"}
            visible={false}
            code={`<div className="h-[90vh] max-md:h-auto bg-white">
  <div className="h-[90vh] flex flex-row w-full max-md:flex-col max-md:justify-start max-md:h-auto max-md:gap-20 max-w-[1280px] m-auto gap-10 justify-center">
    <div className="flex flex-row justify-start w-full h-full">
      <img src="image.jpg" alt="image" className="self-center object-cover w-full h-3/4 " />
    </div>
    <div className="h-auto flex flex-col justify-center w-full max-w-[1280px] m-auto px-4 max-md:pb-20 ">
      <p className="text-left font-text font-thin text-second text-[24px] max-sm:mb-4">Some Above Text</p>
      <h1 className="text-left  font-text font-bold text-[80px] text-second max-md:text-[70px] leading-none my-4 ml-[-4px] max-sm:text-[60px] max-sm:leading-none">Some Title Text</h1>
      <p className="text-left  font-text font-normal text-second text-[20px] max-w-[600px] max-sm:mt-3">Et dolore reprehenderit consequat eiusmod sint veniam do. Incididunt ea voluptate minim ex ea veniam. Non ut magna aute magna deserunt id officia laboris.</p>
    </div>
  </div>
</div>`}
          />
        </div>
        <div className="py-10 mt-10 rounded-lg bg-third">
          {/* <h1 className="text-[25px] font-text text-yellow font-semibold mb-8">
            Header With Image Right with Text Left Text Input and Button
          </h1> */}
          <ILPWithTextAndButton />
          <CodeBlockArea
            language={"html"}
            visible={false}
            code={`<div className=" h-[90vh] max-md:h-auto bg-white">
  <div className="h-[90vh] flex flex-row w-full max-md:flex-col max-md:justify-start max-md:h-auto max-md:gap-20 max-w-[1280px] m-auto gap-10 justify-center">
    <div className="flex flex-row justify-start w-full h-full">
      <img src="image.jpg" alt="image" className="self-center object-cover w-full h-3/4 " />
    </div>
    <div className="h-auto flex flex-col justify-center w-full max-w-[1280px] m-auto px-4 max-md:pb-20">
      <p className="text-left font-text font-thin text-second text-[24px] max-sm:mb-4">Some Above Text</p>
      <h1 className="text-left  font-text font-bold text-[80px] text-second leading-none my-4 ml-[-4px] max-md:text-[70px] max-sm:text-[60px] max-sm:leading-none">Some Title Text</h1>
      <p className="text-left  font-text font-normal text-second text-[20px] max-w-[600px] max-sm:mt-3">Et dolore reprehenderit consequat eiusmod sint veniam do. Incididunt ea voluptate minim ex ea veniam. Non ut magna aute magna deserunt id officia laboris.</p>
      <button className="bg-yellow text-third text-[20px] font-text py-[7px] px-[17px] mt-5 w-fit">Join Now</button>
    </div>
  </div>
</div>`}
          />
        </div>

        <div className="py-10 mt-10 rounded-lg bg-third">
          {/* <h1 className="text-[25px] font-text text-yellow font-semibold mb-8">
            Header With Image Right with Text Left Text Input and Button
          </h1> */}
          <ILPWithTextAndTextInputAndButton />
          <CodeBlockArea
            language={"html"}
            visible={false}
            code={`<div className=" h-[90vh] max-md:h-auto bg-white">
  <div className="h-[90vh] flex flex-row w-full max-md:flex-col max-md:justify-start max-md:h-auto max-md:gap-20 max-w-[1280px] m-auto gap-10 justify-center">
    <div className="flex flex-row justify-start w-full h-full">
      <img src="image.jpg" alt="image" className="self-center object-cover w-full h-3/4 " />
    </div>
    <div className="h-auto flex flex-col justify-center w-full max-w-[1280px] m-auto px-4 max-md:pb-20">
      <p className="text-left font-text font-thin text-second text-[24px] max-sm:mb-4">Some Above Text</p>
      <h1 className="text-left  font-text font-bold text-[80px] leading-none my-4 ml-[-4px] text-second max-md:text-[70px] max-sm:text-[60px] max-sm:leading-none">Some Title Text</h1>
      <p className="text-left  font-text font-normal text-second text-[20px] max-w-[600px] max-sm:mt-3">Et dolore reprehenderit consequat eiusmod sint veniam do. Incididunt ea voluptate minim ex ea veniam. Non ut magna aute magna deserunt id officia laboris.</p>
      <div className="flex flex-row mt-5 w-fit">
        <input type="text" className="py-[7px] px-[14px] bg-first border-second border-2 border-r-0 outline-none font-text" placeholder="Email..." />
        <button className="bg-yellow text-third font-text px-[14px]">Submit</button>
      </div>
    </div>
  </div>
</div>`}
          />
        </div>
      </div>
    </div>
  );
}
