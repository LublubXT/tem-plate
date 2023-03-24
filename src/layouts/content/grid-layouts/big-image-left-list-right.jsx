export function BigImageLeftListRight() {
  return (
    <div className="h-auto bg-white">
      <div className=" h-[90vh] flex flex-row w-full max-md:flex-col max-md:justify-start max-md:h-auto max-md:gap-20 max-w-[1280px] m-auto gap-10 justify-center">
        <div className="flex flex-row justify-start w-full h-full">
          <img src="image.jpg" alt="image" className="self-center object-cover w-full h-3/4 " />
        </div>
        <div className="flex flex-col self-center justify-between w-full gap-16 max-md:pb-20 h-3/4 max-md:px-5">
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
      </div>
    </div>
  );
}
