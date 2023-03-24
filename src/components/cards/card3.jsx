export function CardThree() {
  return (
    <div className="min-w-[300px] w-[400px] h-[400px] overflow-y-clip group bg-white">
      <img src="image.jpg" alt="image" className="h-[400px] w-full object-cover relative bottom-0 group-hover:bottom-[0px] duration-500" />
      <div className="relative bottom-0 h-[360px] flex flex-col w-[90%] m-auto gap-5 bg-white group-hover:bottom-[380px] duration-300 py-5 px-5">
        <div>
          <h1 className="font-bold font-text text-[20px]">Kentucky Cheese Burger</h1>
          <h1 className="font-normal font-text text-[17px] mt-3 leading-7">Consequat officia adipisicing irure est sit laborum reprehenderit sunt anim id. Proident nulla enim et aute est proident ipsum anim eiusmod irure. Officia quis ea culpa quis ad velit amet aliqua proident.</h1>

        </div>
        <button className="font-text text-[15px] bg-yellow px-3 py-1 text-second font-semibold hover:opacity-90 duration-100 h-fit w-fit">Order $10</button>
      </div>
    </div>
  );
}
