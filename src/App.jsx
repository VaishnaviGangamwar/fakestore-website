import { useEffect, useState } from "react"
import './index.css'

const App =() => {
    const[data,setData] = useState([]);
    const[search,setSearch]=useState("")
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(d=>setData(d))
    },);
    return(
    <div className="flex flex-wrap justify-center w-auto h-auto gap-8 mt-0" >
        <header class="bg-black text-white h-20 text-center flex min-w-full">
<nav className='flex justify-between items-center w-[92%]  mx-auto'>
    <div>
        <h1 className='text-2xl text-orange-500'>FakeStore💼</h1>
    </div>
    <div
        class="nav-links duration-500 md:static absolute bg-black md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
        <ul class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li>
                <a class="hover:text-gray-500" href="#">Home</a>
            </li>
            <li>
                <a class="hover:text-gray-500" href="#">Products</a>
            </li>
            <li>
                <a class="hover:text-gray-500" href="#">Services</a>
            </li>
            <li>
                <a class="hover:text-gray-500" href="#">Contact</a>
            </li>
            <li>
                <a class="hover:text-gray-500" href="#">About</a>
            </li>
        </ul>
    </div>
    <div class="flex items-center gap-6">
    <input type="text" placeholder=" search here" className="text-white bg-transparent border border-white" onChange={(e)=>setSearch(e.target.value)}/>
        <ion-icon onClick="onToggleMenu(this)" name="menu" class="text-3xl cursor-pointer md:hidden"></ion-icon>
    </div>
</nav>
</header>
{data.length>0 && data.filter((d)=>d.title.toLowerCase().includes(search)).map((d)=>{
         return(
         <div className="flex flex-col items-center justify-center w-auto text-xs text-center border-2 border-black rounded-xl h-90">            
          <img className="w-48 h-56 mt-6 text-center" src={d.image} alt="" />
             <h1>price: ${d.price}</h1>
             <div key={d.image}>
                <br />
                 <p>{d.title}</p>
             </div>
             <br />
             <button className='px-5 py-2 mb-3 text-black bg-orange-500 rounded-2xl outline-2 ring-2 hover:ring-black hover:text-white hover:bg-black focus:ring-red-600 focus:text-white '>Buy Now</button>
         </div>
         )
         })}
     </div>
     )
        }
 export default App