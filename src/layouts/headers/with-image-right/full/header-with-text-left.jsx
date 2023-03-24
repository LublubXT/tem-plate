export function IRFHeaderWithText() {
  return (
    <div className="min-h-[90vh] bg-white">
      <div className="min-h-[90vh] flex flex-row w-full max-md:flex-col max-md:justify-start max-md:h-auto max-md:gap-20 max-w-[1280px] m-auto gap-4 justify-center">
        <div className="h-auto flex flex-col justify-center w-full max-w-[1280px] m-auto px-4 max-md:pt-20">
          <p className="text-left font-text font-thin text-second text-[24px] max-sm:mb-4">Some Above Text</p>
          <h1 className="text-left  font-text font-bold text-[80px] text-second max-md:text-[70px] leading-none my-4 ml-[-4px] max-sm:text-[60px] max-sm:leading-none">Some Title Text</h1>
          <p className="text-left  font-text font-normal text-second text-[20px] max-w-[600px] max-sm:mt-3">Et dolore reprehenderit consequat eiusmod sint veniam do. Incididunt ea voluptate minim ex ea veniam. Non ut magna aute magna deserunt id officia laboris.</p>
        </div>
        <div className="w-full">
          <img src="bg-image.jpg" alt="image" className="object-cover object-center h-full w-12/12" />
        </div>
      </div>
    </div>
  );
}
