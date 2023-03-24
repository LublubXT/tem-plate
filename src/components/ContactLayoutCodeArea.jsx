import { ContactLayout1 } from "../layouts/contact/ContactLayout1";
import { ContactLayout2 } from "../layouts/contact/ContactLayout2";
import { ContactLayout3 } from "../layouts/contact/ContactLayout3";
import { CodeBlockArea } from "./CodeBlockArea";
import { Navbar } from "./navbar";

export function ContactLayoutCodeArea() {
  return (
    <div className="w-full bg-third">
      <Navbar />
      <div className="w-full max-w-[1480px] m-auto px-5">
        <h1 className="text-[40px] text-fourth font-text font-bold mt-[100px] mb-[40px]">
          Contact Layouts
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
          <ContactLayout1 />
          <CodeBlockArea
            language={`html`}
            visible={false}
            code={`<div className="h-auto bg-white">
  <div className="min-h-[90vh] px-5 flex flex-row w-full max-md:flex-col max-md:px-5 max-md:py-5 max-md:justify-start max-md:h-auto max-md:gap-10 max-w-[1280px] m-auto gap-10 justify-between items-center">
    <div className="w-full">
      <h1 className="text-[70px] font-text text-third font-bold">Contact Us</h1>
      <p className="font-text text-[20px] leading-8 text-third">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
    </div>
    <div className="flex flex-col self-center w-full h-auto gap-5 bg-fourth rounded-lg p-7">
      <div className="w-full">
        <p className="font-text font-bold text-third mb-1">First Name</p>
        <input type="text" className="bg-first border-[1px] border-third/10 rounded-lg px-4 py-2 font-text w-full outline-none" placeholder="First Name"/>
      </div>
      <div className="w-full">
        <p className="font-text font-bold text-third mb-1">Last Name</p>
        <input type="text" className="bg-first border-[1px] border-third/10 rounded-lg px-4 py-2 font-text w-full outline-none" placeholder="Last Name"/>
      </div>
      <div className="w-full">
        <p className="font-text font-bold text-third mb-1">Email</p>
        <input type="Email" className="bg-first border-[1px] border-third/10 rounded-lg px-4 py-2 font-text w-full outline-none" placeholder="Email"/>
      </div>
      <div className="w-full">
        <p className="font-text font-bold text-third mb-1">Phone Number</p>
        <input type="Phone" className="bg-first border-[1px] border-third/10 rounded-lg px-4 py-2 font-text w-full outline-none" placeholder="Password"/>
      </div>
      <div className="w-full">
        <p className="font-text font-bold text-third mb-1">Message</p>
        <textarea type="Phone" className="bg-first border-[1px] border-third/10 rounded-lg px-4 py-2 font-text w-full outline-none h-40" placeholder="Message..."></textarea>
      </div>
      <a href="#" className="bg-yellow text-third font-bold font-text hover:opacity-95 duration-200 py-2 px-7 text-[20px] w-fit mt-[-8px] rounded-lg shadow-lg shadow-yellow/40">Send</a>
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
          <ContactLayout2 />
          <CodeBlockArea
            language={`html`}
            visible={false}
            code={`<div className="h-auto bg-white">
  <div className="min-h-[90vh] relative p-5 flex flex-row w-full max-md:flex-col max-md:px-5 max-md:py-5 max-md:justify-center max-md:h-auto max-md:gap-10 max-w-[1280px] m-auto gap-10 justify-end items-center">
    <div className="w-[43%] h-auto min-h-[75%] absolute left-0 bg-white border-[1px] border-third/5 rounded-lg max-md:static max-md:w-full shadow-lg shadow-gray-100">
      <img
        src="bg-image.jpg"
        className="w-full h-full max-h-[300px] object-cover object-center rounded-lg"
        alt=""
      />
      <h1 className="text-[70px] font-text text-third font-bold mx-7 mt-10 leading-none mb-5">
        Contact Us
      </h1>
      <p className="font-text text-[20px] leading-8 text-third mx-7 mb-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
        vulputate libero et velit interdum, ac aliquet odio mattis. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos.
      </p>
    </div>
    <div className="flex flex-row w-10/12 h-auto gap-5 items-center justify-end bg-fourth rounded-lg p-7 max-md:w-full py-5">
      <div className="flex flex-col self-center w-4/6 h-auto gap-5 bg-fourth rounded-lg p-7 max-md:w-full">
        <div className="w-full">
          <p className="font-text font-bold text-third mb-1">First Name</p>
          <input
            type="text"
            className="bg-first border-[1px] border-third/10 rounded-lg px-4 py-2 font-text w-full outline-none"
            placeholder="First Name"
          />
        </div>
        <div className="w-full">
          <p className="font-text font-bold text-third mb-1">Last Name</p>
          <input
            type="text"
            className="bg-first border-[1px] border-third/10 rounded-lg px-4 py-2 font-text w-full outline-none"
            placeholder="Last Name"
          />
        </div>
        <div className="w-full">
          <p className="font-text font-bold text-third mb-1">Email</p>
          <input
            type="Email"
            className="bg-first border-[1px] border-third/10 rounded-lg px-4 py-2 font-text w-full outline-none"
            placeholder="Email"
          />
        </div>
        <div className="w-full">
          <p className="font-text font-bold text-third mb-1">
            Phone Number
          </p>
          <input
            type="Phone"
            className="bg-first border-[1px] border-third/10 rounded-lg px-4 py-2 font-text w-full outline-none"
            placeholder="Password"
          />
        </div>
        <div className="w-full">
          <p className="font-text font-bold text-third mb-1">Message</p>
          <textarea
            type="Phone"
            className="bg-first border-[1px] border-third/10 rounded-lg px-4 py-2 font-text w-full outline-none h-40"
            placeholder="Message..."
          ></textarea>
        </div>
        <a
          href="#"
          className="bg-yellow text-third font-bold font-text hover:opacity-95 duration-200 py-2 px-7 text-[20px] w-fit mt-[-8px] rounded-lg shadow-lg shadow-yellow/40"
        >
          Send
        </a>
      </div>
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
          <ContactLayout3 />
          <CodeBlockArea
            language={`html`}
            visible={false}
            code={`<div className="h-auto bg-white">
  <div className="h-[90vh] px-5 flex flex-row w-full py-10 max-md:flex-col max-md:px-5 max-md:py-5 max-md:justify-start max-md:h-auto max-w-[1280px] m-auto justify-between items-center">
    <img
      src="bg-image.jpg"
      alt="image"
      className="w-1/2 h-full object-cover object-center max-md:w-full rounded-l-lg"
    />
    <div className="flex flex-col self-center w-full h-full gap-5 bg-fourth rounded-r-lg p-7">
      <div className="w-full">
        <p className="font-text font-bold text-third mb-1">First Name</p>
        <input
          type="text"
          className="bg-first border-[1px] border-third/10 rounded-lg px-4 py-2 font-text w-full outline-none"
          placeholder="First Name"
        />
      </div>
      <div className="w-full">
        <p className="font-text font-bold text-third mb-1">Last Name</p>
        <input
          type="text"
          className="bg-first border-[1px] border-third/10 rounded-lg px-4 py-2 font-text w-full outline-none"
          placeholder="Last Name"
        />
      </div>
      <div className="w-full">
        <p className="font-text font-bold text-third mb-1">Email</p>
        <input
          type="Email"
          className="bg-first border-[1px] border-third/10 rounded-lg px-4 py-2 font-text w-full outline-none"
          placeholder="Email"
        />
      </div>
      <div className="w-full">
        <p className="font-text font-bold text-third mb-1">Phone Number</p>
        <input
          type="Phone"
          className="bg-first border-[1px] border-third/10 rounded-lg px-4 py-2 font-text w-full outline-none"
          placeholder="Password"
        />
      </div>
      <div className="w-full">
        <p className="font-text font-bold text-third mb-1">Message</p>
        <textarea
          type="Phone"
          className="bg-first border-[1px] border-third/10 rounded-lg px-4 py-2 font-text w-full outline-none h-40"
          placeholder="Message..."
        ></textarea>
      </div>
      <a
        href="#"
        className="bg-yellow text-third font-bold font-text hover:opacity-95 duration-200 py-2 px-7 text-[20px] w-fit mt-[-8px] rounded-lg shadow-lg shadow-yellow/40"
      >
        Send
      </a>
    </div>
  </div>
</div>`}
          />
        </div>

      </div>
    </div>
  );
}
