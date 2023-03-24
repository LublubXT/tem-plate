export function BigImageLeftImageGridRight() {
  return (
    <div className="h-auto bg-white">
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
    </div>
  );
}
