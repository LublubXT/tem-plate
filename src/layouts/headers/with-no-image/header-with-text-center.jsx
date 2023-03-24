export function HeaderWithTextCenter() {
  return (
    <div className="w-full h-[90vh] bg-white">
      <div className="h-[90vh] flex flex-col justify-center">
        <p className="text-center font-text font-thin text-second text-[24px] max-sm:mb-4">Some Above Text</p>
        <h1 className="text-center font-text font-bold text-[100px] text-second max-md:text-[70px] max-sm:text-[60px] max-sm:leading-none">Some Title Text</h1>
        <p className="text-center font-text font-normal text-second text-[20px] max-w-[600px] mx-auto max-sm:mt-3">Et dolore reprehenderit consequat eiusmod sint veniam do. Incididunt ea voluptate minim ex ea veniam. Non ut magna aute magna deserunt id officia laboris.</p>
      </div>
    </div>
  );
}
