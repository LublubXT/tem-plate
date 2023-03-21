# Tem Plate

**What is Tem Plate?** Tem Plate is a free opensource web layouts and components built with tailwind css.

**Why use Tem Plate?** Tem Plate was built to make building websites a fast and easy. It is loaded with many layouts and components. I am constantly adding more layouts and components for you guys to use in your projects.

# Cards

### Type 1

Image Card Before Hover

<img width="400" alt="Screenshot from 2023-03-21 10-52-36" src="https://user-images.githubusercontent.com/73581388/226563887-2863556f-e3eb-48ef-a492-d95038fd48c8.png">

Image Card While Hovering Over

<img width="401" alt="Screenshot from 2023-03-21 10-52-39" src="https://user-images.githubusercontent.com/73581388/226563877-676ad6f2-2cfe-450f-a445-4309164d7610.png">

While hovering, the bottom bar smoothly slides up to reveal content.
```html
<div className="min-w-[300px] w-[400px] h-[400px] overflow-y-clip group bg-white">
  <img src="image.jpg" alt="image" className="h-[400px] w-full object-cover relative bottom-0 group-hover:bottom-[64px] duration-500" />
  <div className="relative bottom-0 flex flex-row bg-white group-hover:bottom-[80px] duration-300 py-5 px-5 justify-between items-center border-y-4 border-yellow border-b-gray-100">
    <h1 className="font-bold font-text">Kentucky Cheese Burger</h1>
    <button className="font-text text-[15px] bg-yellow px-3 py-1 text-second font-semibold hover:opacity-90 duration-100">Order $10</button>
  </div>
</div>
```



## Type 2

Image Card Before Hover

<img width="400" alt="Screenshot from 2023-03-21 10-52-36" src="https://user-images.githubusercontent.com/73581388/226563887-2863556f-e3eb-48ef-a492-d95038fd48c8.png">

Image Card While Hovering Over

<img width="400" alt="Screenshot from 2023-03-21 10-52-45" src="https://user-images.githubusercontent.com/73581388/226565150-0fda7c92-9427-49fa-8124-f3fbc185de5c.png">

While hovering, the bottom bar smoothly slides up to reveal content.
```html
<div className="min-w-[300px] w-[400px] h-[400px] overflow-y-clip group bg-white">
  <img src="image.jpg" alt="image" className="h-[400px] w-full object-cover relative bottom-0 group-hover:bottom-[0px] duration-500" />
  <div className="relative bottom-0 h-[400px] flex flex-col m-auto gap-5 bg-white group-hover:bottom-[400px] duration-300 py-5 px-5">
    <div>
      <h1 className="font-bold font-text text-[20px]">Kentucky Cheese Burger</h1>
      <p className="font-normal font-text text-[17px] mt-3 leading-7">Consequat officia adipisicing irure est sit laborum reprehenderit sunt anim id. Proident nulla enim et aute est proident ipsum anim eiusmod irure. Officia quis ea culpa quis ad velit amet aliqua proident.</p>
    </div>
    <button className="font-text text-[15px] bg-yellow px-3 py-1 text-second font-semibold hover:opacity-90 duration-100 h-fit w-fit">Order $10</button>
  </div>
</div>
```


## Type 3

Image Card Before Hover

<img width="400" alt="Screenshot from 2023-03-21 10-52-36" src="https://user-images.githubusercontent.com/73581388/226563887-2863556f-e3eb-48ef-a492-d95038fd48c8.png">

Image Card While Hovering Over

<img width="399" alt="Screenshot from 2023-03-21 10-52-47" src="https://user-images.githubusercontent.com/73581388/226565609-bdd71c4f-f0ec-43e1-8a1c-95c727ad926a.png">

While hovering, the bottom bar smoothly slides up to reveal content.
```html
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
```