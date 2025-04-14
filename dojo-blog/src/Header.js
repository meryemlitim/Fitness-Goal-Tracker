import './App.css';
import './index.css';
import {Link } from 'react-router-dom';




function Header(){
return (
    <div className='Header'>
    <div className="flex justify-around  content-center ">
        <h1 className=" mt-5 text-3xl font-bold text-black-500">Fitness Goal  Tracker</h1>
        <nav className=" mt-5 flex gap-5 text-black-500 font-semibold">
          <a href="/">HOME</a>
          <a href="/about">ABOUT</a>
          <a href="/">CONTACT</a>
        </nav>
        
      </div> 
      <div class="relative z-10 text-center text-black py-28">
            <h1 class="text-4xl sm:text-6xl font-extrabold">Welcome to:</h1>
            <br />
            <h1 class="text-4xl sm:text-6xl font-extrabold">Fitness Goal  Tracker</h1>
            <button  class="bg-blue-500 text-white py-2 px-4 mt-8 w-64 text-1xl rounded-md hover:bg-yelow-600 transition">
               <Link to="/start" >Get started</Link>
            </button>           
         
        </div>   
      </div>    
      );
  


}
export default Header;