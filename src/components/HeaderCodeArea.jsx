import { HeaderWithBGImageWithTextCenter } from "../layouts/headers/with-image-full/header-with-bgimage-with-text-center";
import { HeaderWithBGImageWithTextCenterWithButton } from "../layouts/headers/with-image-full/header-with-bgimage-with-text-center-with-button";
import { HeaderWithBGImageWithTextCenterWithTextInputAndButton } from "../layouts/headers/with-image-full/header-with-bgimage-with-text-center-with-textinput-and-button";
import { HeaderWithBGImageWithTextLeft } from "../layouts/headers/with-image-full/header-with-bgimage-with-text-left";
import { HeaderWithBGImageWithTextLeftWithButton } from "../layouts/headers/with-image-full/header-with-bgimage-with-text-left-with-button";
import { HeaderWithBGImageWithTextLeftWithTextInputAndButton } from "../layouts/headers/with-image-full/header-with-bgimage-with-text-left-with-textinput-and-button";
import { HeaderWithTextCenter } from "../layouts/headers/with-no-image/header-with-text-center";
import { HeaderWithTextCenterWithButton } from "../layouts/headers/with-no-image/header-with-text-center-with-button";
import { HeaderWithTextCenterWithTextInputAndButton } from "../layouts/headers/with-no-image/header-with-text-center-with-textinput-and-button";
import { HeaderWithTextLeft } from "../layouts/headers/with-no-image/header-with-text-left";
import { HeaderWithTextLeftWithButton } from "../layouts/headers/with-no-image/header-with-text-left-with-button";
import { HeaderWithTextLeftWithTextInputAndButton } from "../layouts/headers/with-no-image/header-with-text-left-with-textinput-and-button";
import { CodeBlockArea } from "./CodeBlockArea";
import { Navbar } from "./navbar";

export function HeaderCodeArea() {
	return (
		<div className="w-full bg-third">
			<Navbar />
			<div className="w-full max-w-[1480px] m-auto px-5">
				<h1 className="text-[40px] text-fourth font-text font-bold mt-[100px] mb-[40px]">
					Headers
				</h1>
				<div className="py-10 rounded-lg bg-third">
					<h1 className="text-[25px] font-text text-yellow font-semibold mb-1">
						Info
					</h1>

					<p className="text[17px] font-text text-first mb-5 mt-3">Here is the tailwind.config.cjs code -</p>
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
						Header With Background Image with Text Center
					</h1> */}
					<HeaderWithBGImageWithTextCenter />
					<CodeBlockArea
						language={"html"}
						visible={false}
						code={`<div className="w-full h-[90vh]" style={{ backgroundImage: 'url("bg-image.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
  <div className="h-[90vh] flex flex-col justify-center bg-[#1717179b]">
    <p className="text-center font-text font-thin text-first text-[24px] max-sm:mb-4">Some Above Text</p>
    <h1 className="text-center font-text font-bold text-[100px] text-first max-md:text-[70px] max-sm:text-[60px] max-sm:leading-none">Some Title Text</h1>
    <p className="text-center font-text font-normal text-first text-[20px] max-w-[600px] mx-auto max-sm:mt-3">Et dolore reprehenderit consequat eiusmod sint veniam do. Incididunt ea voluptate minim ex ea veniam. Non ut magna aute magna deserunt id officia laboris.</p>
  </div>
</div>`}
					/>
				</div>
				<div className="py-10 mt-10 rounded-lg bg-third">
					{/* <h1 className="text-[25px] font-text text-yellow font-semibold mb-8">
						Header With Background Image with Text Center With Button
					</h1> */}
					<HeaderWithBGImageWithTextCenterWithButton />
					<CodeBlockArea
						language={"html"}
						visible={false}
						code={`<div className="w-full h-[90vh]" style={{ backgroundImage: 'url("bg-image.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
  <div className="h-[90vh] flex flex-col justify-center bg-[#1717179b]">
    <p className="text-center font-text font-thin text-first text-[24px] max-sm:mb-4">Some Above Text</p>
    <h1 className="text-center font-text font-bold text-[100px] text-first max-md:text-[70px] max-sm:text-[60px] max-sm:leading-none">Some Title Text</h1>
    <p className="text-center font-text font-normal text-first text-[20px] max-w-[600px] mx-auto max-sm:mt-3">Et dolore reprehenderit consequat eiusmod sint veniam do. Incididunt ea voluptate minim ex ea veniam. Non ut magna aute magna deserunt id officia laboris.</p>
    <button className="bg-yellow text-third text-[20px] font-text py-[7px] px-[17px] mt-5 w-fit mx-auto">Join Now</button>
  </div>
</div>`}
					/>
				</div>
				<div className="py-10 mt-10 rounded-lg bg-third">
					{/* <h1 className="text-[25px] font-text text-yellow font-semibold mb-8">
						Header With Background Image with Text Center With Text Input and
						Button
					</h1> */}
					<HeaderWithBGImageWithTextCenterWithTextInputAndButton />
					<CodeBlockArea
						language={"html"}
						visible={false}
						code={`<div className="w-full h-[90vh]" style={{ backgroundImage: 'url("bg-image.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
  <div className="h-[90vh] flex flex-col justify-center bg-[#1717179b]">
    <p className="text-center font-text font-thin text-first text-[24px] max-sm:mb-4">Some Above Text</p>
    <h1 className="text-center font-text font-bold text-[100px] text-first max-md:text-[70px] max-sm:text-[60px] max-sm:leading-none">Some Title Text</h1>
    <p className="text-center font-text font-normal text-first text-[20px] max-w-[600px] mx-auto max-sm:mt-3">Et dolore reprehenderit consequat eiusmod sint veniam do. Incididunt ea voluptate minim ex ea veniam. Non ut magna aute magna deserunt id officia laboris.</p>
    <div className="flex flex-row mx-auto mt-10 w-fit">
      <input type="text" className="py-[7px] px-[14px] bg-white outline-none font-text" placeholder="Email..." />
      <button className="bg-yellow text-third font-text px-[14px]">Submit</button>
    </div>
  </div>
</div>`}
					/>
				</div>
				<div className="py-10 mt-10 rounded-lg bg-third">
					{/* <h1 className="text-[25px] font-text text-second font-semibold mb-1">
						Header With Background Image with Text Left
					</h1> */}
					{/* <p className="text[17px] font-text text-second mb-8">
						The reason for the small padding on the edge is because all these
						layouts are built with max width of 1280px. On full screen size it
						looks normal.
					</p> */}
					<HeaderWithBGImageWithTextLeft />
					<CodeBlockArea
						language={"html"}
						visible={false}
						code={`<div className=" h-[90vh]" style={{ backgroundImage: 'url("bg-image.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
  <div className="h-[90vh] flex flex-col justify-center bg-[#1717179b]">
    <div className="h-[90vh] flex flex-col justify-center w-full max-w-[1280px] m-auto px-4">
      <p className="text-left font-text font-thin text-first text-[24px] max-sm:mb-4">Some Above Text</p>
      <h1 className="text-left  font-text font-bold text-[100px] text-first max-md:text-[70px] max-sm:text-[60px] max-sm:leading-none">Some Title Text</h1>
      <p className="text-left  font-text font-normal text-first text-[20px] max-w-[600px] max-sm:mt-3">Et dolore reprehenderit consequat eiusmod sint veniam do. Incididunt ea voluptate minim ex ea veniam. Non ut magna aute magna deserunt id officia laboris.</p>
    </div>
  </div>
</div>`}
					/>
				</div>
				<div className="py-10 mt-10 rounded-lg bg-third">
					{/* <h1 className="text-[25px] font-text text-second font-semibold mb-1">
						Header With Background Image with Text Left with Button
					</h1> */}
					{/* <p className="text[17px] font-text text-second mb-8">
						The reason for the small padding on the edge is because all these
						layouts are built with max width of 1280px. On full screen size it
						looks normal.
					</p> */}
					<HeaderWithBGImageWithTextLeftWithButton />
					<CodeBlockArea
						language={"html"}
						visible={false}
						code={`<div className=" h-[90vh]" style={{ backgroundImage: 'url("bg-image.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
  <div className="h-[90vh] flex flex-col justify-center bg-[#1717179b]">
    <div className="h-[90vh] flex flex-col justify-center w-full max-w-[1280px] m-auto px-4">
      <p className="text-left font-text font-thin text-first text-[24px] max-sm:mb-4">Some Above Text</p>
      <h1 className="text-left  font-text font-bold text-[100px] text-first max-md:text-[70px] max-sm:text-[60px] max-sm:leading-none">Some Title Text</h1>
      <p className="text-left  font-text font-normal text-first text-[20px] max-w-[600px] max-sm:mt-3">Et dolore reprehenderit consequat eiusmod sint veniam do. Incididunt ea voluptate minim ex ea veniam. Non ut magna aute magna deserunt id officia laboris.</p>
      <button className="bg-yellow text-third text-[20px] font-text py-[7px] px-[17px] mt-5 w-fit">Join Now</button>
    </div>
  </div>
</div>`}
					/>
				</div>
				<div className="py-10 mt-10 rounded-lg bg-third">
					{/* <h1 className="text-[25px] font-text text-second font-semibold mb-1">
						Header With Background Image with Text Left with Text Input and
						Button
					</h1> */}
					{/* <p className="text[17px] font-text text-second mb-8">
						The reason for the small padding on the edge is because all these
						layouts are built with max width of 1280px. On full screen size it
						looks normal.
					</p> */}
					<HeaderWithBGImageWithTextLeftWithTextInputAndButton />
					<CodeBlockArea
						language={"html"}
						visible={false}
						code={`<div className=" h-[90vh]" style={{ backgroundImage: 'url("bg-image.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
  <div className="h-[90vh] flex flex-col justify-center bg-[#1717179b]">
    <div className="h-[90vh] flex flex-col justify-center w-full max-w-[1280px] m-auto px-4">
      <p className="text-left font-text font-thin text-first text-[24px] max-sm:mb-4">Some Above Text</p>
      <h1 className="text-left  font-text font-bold text-[100px] text-first max-md:text-[70px] max-sm:text-[60px] max-sm:leading-none">Some Title Text</h1>
      <p className="text-left  font-text font-normal text-first text-[20px] max-w-[600px] max-sm:mt-3">Et dolore reprehenderit consequat eiusmod sint veniam do. Incididunt ea voluptate minim ex ea veniam. Non ut magna aute magna deserunt id officia laboris.</p>
      <div className="flex flex-row mt-5 w-fit">
        <input type="text" className="py-[7px] px-[14px] bg-white outline-none font-text" placeholder="Email..." />
        <button className="bg-yellow text-third font-text px-[14px]">Submit</button>
      </div>
    </div>
  </div>
</div>`}
					/>
				</div>
				{/* Helo */}

				<div className="py-10 mt-10 rounded-lg bg-third">
					{/* <h1 className="text-[25px] font-text text-yellow font-semibold mb-8">
						Header with Text Center
					</h1> */}
					<HeaderWithTextCenter />
					<CodeBlockArea
						language={"html"}
						visible={false}
						code={`<div className="w-full h-[90vh] bg-white">
  <div className="h-[90vh] flex flex-col justify-center">
    <p className="text-center font-text font-thin text-second text-[24px] max-sm:mb-4">Some Above Text</p>
    <h1 className="text-center font-text font-bold text-[100px] text-second max-md:text-[70px] max-sm:text-[60px] max-sm:leading-none">Some Title Text</h1>
    <p className="text-center font-text font-normal text-second text-[20px] max-w-[600px] mx-auto max-sm:mt-3">Et dolore reprehenderit consequat eiusmod sint veniam do. Incididunt ea voluptate minim ex ea veniam. Non ut magna aute magna deserunt id officia laboris.</p>
  </div>
</div>`}
					/>
				</div>
				<div className="py-10 mt-10 rounded-lg bg-third">
					{/* <h1 className="text-[25px] font-text text-yellow font-semibold mb-8">
						Header with Text Center With Button
					</h1> */}
					<HeaderWithTextCenterWithButton />
					<CodeBlockArea
						language={"html"}
						visible={false}
						code={`<div className="w-full h-[90vh] bg-white">
  <div className="h-[90vh] flex flex-col justify-center">
    <p className="text-center font-text font-thin text-second text-[24px] max-sm:mb-4">Some Above Text</p>
    <h1 className="text-center font-text font-bold text-[100px] text-second max-md:text-[70px] max-sm:text-[60px] max-sm:leading-none">Some Title Text</h1>
    <p className="text-center font-text font-normal text-second text-[20px] max-w-[600px] mx-auto max-sm:mt-3">Et dolore reprehenderit consequat eiusmod sint veniam do. Incididunt ea voluptate minim ex ea veniam. Non ut magna aute magna deserunt id officia laboris.</p>
    <button className="bg-yellow text-third text-[20px] font-text py-[7px] px-[17px] mt-5 w-fit mx-auto">Join Now</button>
  </div>
</div>`}
					/>
				</div>
				<div className="py-10 mt-10 rounded-lg bg-third">
					{/* <h1 className="text-[25px] font-text text-yellow font-semibold mb-8">
						Header with Text Center With Text Input and Button
					</h1> */}
					<HeaderWithTextCenterWithTextInputAndButton />
					<CodeBlockArea
						language={"html"}
						visible={false}
						code={`<div className="w-full h-[90vh] bg-white">
  <div className="h-[90vh] flex flex-col justify-center">
    <p className="text-center font-text font-thin text-second text-[24px] max-sm:mb-4">Some Above Text</p>
    <h1 className="text-center font-text font-bold text-[100px] text-second max-md:text-[70px] max-sm:text-[60px] max-sm:leading-none">Some Title Text</h1>
    <p className="text-center font-text font-normal text-second text-[20px] max-w-[600px] mx-auto max-sm:mt-3">Et dolore reprehenderit consequat eiusmod sint veniam do. Incididunt ea voluptate minim ex ea veniam. Non ut magna aute magna deserunt id officia laboris.</p>
    <div className="flex flex-row mx-auto mt-10 w-fit">
      <input type="text" className="py-[7px] px-[14px] bg-first border-second border-2 border-r-0 outline-none font-text" placeholder="Email..." />
      <button className="bg-yellow text-third font-text px-[14px]">Submit</button>
    </div>
  </div>
</div>`}
					/>
				</div>
				<div className="py-10 mt-10 rounded-lg bg-third">
					{/* <h1 className="text-[25px] font-text text-second font-semibold mb-1">
						Header with Text Left
					</h1> */}
					{/* <p className="text[17px] font-text text-second mb-8">
						The reason for the small padding on the edge is because all these
						layouts are built with max width of 1280px. On full screen size it
						looks normal.
					</p> */}
					<HeaderWithTextLeft />
					<CodeBlockArea
						language={"html"}
						visible={false}
						code={`<div className=" h-[90vh] bg-white">
  <div className="h-[90vh] flex flex-col justify-center">
    <div className="h-[90vh] flex flex-col justify-center w-full max-w-[1280px] m-auto px-4">
      <p className="text-left font-text font-thin text-second text-[24px] max-sm:mb-4">Some Above Text</p>
      <h1 className="text-left  font-text font-bold text-[100px] text-second max-md:text-[70px] max-sm:text-[60px] max-sm:leading-none">Some Title Text</h1>
      <p className="text-left  font-text font-normal text-second text-[20px] max-w-[600px] max-sm:mt-3">Et dolore reprehenderit consequat eiusmod sint veniam do. Incididunt ea voluptate minim ex ea veniam. Non ut magna aute magna deserunt id officia laboris.</p>
    </div>
  </div>
</div>`}
					/>
				</div>
				<div className="py-10 mt-10 rounded-lg bg-third">
					{/* <h1 className="text-[25px] font-text text-second font-semibold mb-1">
						Header with Text Left with Button
					</h1> */}
					{/* <p className="text[17px] font-text text-second mb-8">
						The reason for the small padding on the edge is because all these
						layouts are built with max width of 1280px. On full screen size it
						looks normal.
					</p> */}
					<HeaderWithTextLeftWithButton />
					<CodeBlockArea
						language={"html"}
						visible={false}
						code={`<div className=" h-[90vh] bg-white">
  <div className="h-[90vh] flex flex-col justify-center">
    <div className="h-[90vh] flex flex-col justify-center w-full max-w-[1280px] m-auto px-4">
      <p className="text-left font-text font-thin text-second text-[24px] max-sm:mb-4">Some Above Text</p>
      <h1 className="text-left  font-text font-bold text-[100px] text-second max-md:text-[70px] max-sm:text-[60px] max-sm:leading-none">Some Title Text</h1>
      <p className="text-left  font-text font-normal text-second text-[20px] max-w-[600px] max-sm:mt-3">Et dolore reprehenderit consequat eiusmod sint veniam do. Incididunt ea voluptate minim ex ea veniam. Non ut magna aute magna deserunt id officia laboris.</p>
      <button className="bg-yellow text-third text-[20px] font-text py-[7px] px-[17px] mt-5 w-fit">Join Now</button>
    </div>
  </div>
</div>`}
					/>
				</div>
				<div className="py-10 mt-10 rounded-lg bg-third">
					{/* <h1 className="text-[25px] font-text text-second font-semibold mb-1">
						Header with Text Left with Text Input and Button
					</h1> */}
					{/* <p className="text[17px] font-text text-second mb-8">
						The reason for the small padding on the edge is because all these
						layouts are built with max width of 1280px. On full screen size it
						looks normal.
					</p> */}
					<HeaderWithTextLeftWithTextInputAndButton />
					<CodeBlockArea
						language={"html"}
						visible={false}
						code={`<div className=" h-[90vh] bg-white">
  <div className="h-[90vh] flex flex-col justify-center">
    <div className="h-[90vh] flex flex-col justify-center w-full max-w-[1280px] m-auto px-4">
      <p className="text-left font-text font-thin text-second text-[24px] max-sm:mb-4">Some Above Text</p>
      <h1 className="text-left  font-text font-bold text-[100px] text-second max-md:text-[70px] max-sm:text-[60px] max-sm:leading-none">Some Title Text</h1>
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
