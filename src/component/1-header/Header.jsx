import React, { useState,useEffect } from 'react'
import './header.css'


export default function Header() {
  const [showModel ,setShowModel] = useState(false);
  const [theme,setthe] = useState('dark');
  useEffect(() => {

    if(theme==='light'){
      document.body.classList.remove('dark');
      document.body.classList.add('light');

    }else{ document.body.classList.remove('light');
    document.body.classList.add('dark');}
    
  }, [theme])
  
  return (
    
    <header className='flex'>
        <button onClick={()=>{setShowModel(true)}} className='meno flex icon-menu'></button>

    <div></div>
    <nav >
   <ul className='flex'>
    <li><a href=''>About</a></li>
    <li><a href=''>Articles</a></li>
    <li><a href=''>projects</a></li>
    <li><a href=''>Speaking</a></li>
    <li><a href=''>Contact</a></li>
   </ul>
  
    </nav>  
<button onClick={()=>{
  localStorage.setItem('cuurent',theme==='light'?'dark':'light')

  setthe(localStorage.getItem("cuurent"))
  

}} className='men flex' >
<span className='icon-moon-o'></span></button>

{showModel &&(<div className='fixed'>
 
 <ul className='model'>
 <li><button className='icon-cross' onClick={()=>{setShowModel(false)}}>  </button></li>
    <li><a href=''>About</a></li>
    <li><a href=''>Articles</a></li>
    <li><a href=''>projects</a></li>
    <li><a href=''>Speaking</a></li>
    <li><a href=''>Uses</a></li>
   </ul>
  



</div>)}
    </header>
  )
}
