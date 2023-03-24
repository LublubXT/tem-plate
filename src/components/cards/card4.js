export function CardFour() {
  return (
    <div className="w-[400px] h-[400px] flex flex-row overflow-x-hidden group bg-white">
      <img src="image.jpg" alt="image" className="h-[400px] w-[400px] object-cover relative bottom-0 group-hover:bottom-[64px] duration-500" />
      <div className="relative bottom-0 flex flex-row bg-white group-hover:bottom-[80px] duration-300 py-5 px-5 justify-between items-center border-y-4 border-yellow border-b-gray-100">
        <h1 className="font-bold font-text">Kentucky Cheese Burger</h1>
        <button className="font-text text-[15px] bg-yellow px-3 py-1 text-second font-semibold hover:opacity-90 duration-100">Order $10</button>
      </div>
    </div>
  );
}
