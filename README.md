# Tem Plate

**What is Tem Plate?** Tem Plate is a free opensource web layouts and components built with tailwind css.

**Why use Tem Plate?** Tem Plate was built to make building websites a fast and easy. It is loaded with many layouts and components. I am constantly adding more layouts and components for you guys to use in your projects.

# Cards

### Type 1

Image Card Before Hover

<img width="400" alt="Screenshot from 2023-03-21 10-52-36" src="https://user-images.githubusercontent.com/73581388/226563887-2863556f-e3eb-48ef-a492-d95038fd48c8.png">

Image Card While Hovering Over

<img width="401" alt="Screenshot from 2023-03-21 10-52-39" src="https://user-images.githubusercontent.com/73581388/226563877-676ad6f2-2cfe-450f-a445-4309164d7610.png">

```html
<div className="min-w-[300px] w-[400px] h-[400px] overflow-y-clip group bg-white">
  <img src="image.jpg" alt="image" className="h-[400px] w-full object-cover relative bottom-0 group-hover:bottom-[64px] duration-500" />
  <div className="relative bottom-0 flex flex-row bg-white group-hover:bottom-[80px] duration-300 py-5 px-5 justify-between items-center border-y-4 border-yellow border-b-gray-100">
    <h1 className="font-bold font-text">Kentucky Cheese Burger</h1>
    <button className="font-text text-[15px] bg-yellow px-3 py-1 text-second font-semibold hover:opacity-90 duration-100">Order $10</button>
  </div>
</div>
```
