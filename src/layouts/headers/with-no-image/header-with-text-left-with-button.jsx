export function HeaderWithTextLeftWithButton() {
  return (
    <div className=" h-[90vh] bg-white">
      <div className="h-[90vh] flex flex-col justify-center">
        <div className="h-[90vh] flex flex-col justify-center w-full max-w-[1280px] m-auto px-4">
          <p className="text-left font-text font-thin text-second text-[24px] max-sm:mb-4">Some Above Text</p>
          <h1 className="text-left  font-text font-bold text-[100px] text-second max-md:text-[70px] max-sm:text-[60px] max-sm:leading-none">Some Title Text</h1>
          <p className="text-left  font-text font-normal text-second text-[20px] max-w-[600px] max-sm:mt-3">Et dolore reprehenderit consequat eiusmod sint veniam do. Incididunt ea voluptate minim ex ea veniam. Non ut magna aute magna deserunt id officia laboris.</p>
          <button className="bg-yellow text-third text-[20px] font-text py-[7px] px-[17px] mt-5 w-fit">Join Now</button>
        </div>
      </div>
    </div>
  );
}
