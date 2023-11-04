import React, { useState } from 'react'
import './main.css'
import { AnimatePresence, motion, spring } from "framer-motion"


const myproject = [
  {protitle:'date calculator project',categoty:['css','js','html'],imgPath:'./project7.png',link:'https://abdelrahman200.github.io/date-calc/'},
  {protitle:'email project',categoty:['css','js','html'],imgPath:'./img1.png',link:'https://abdelrahman200.github.io/Email/'},
  {protitle:'calculator project',categoty:['css','js','html'],imgPath:'./project8.png',link:'https://abdelrahman200.github.io/CALC/'},
  {protitle:'react project',categoty:['css','react','html'],imgPath:'./project9.png',link:'https://abdelrahman200.github.io/date-calc/'},
  {protitle:'study project',categoty:['css','js','html'],imgPath:'./project2.png',link:'https://abdelrahman200.github.io/date-calc/'},
  {protitle:'black landing project',categoty:['css','html'],imgPath:'./project3.png',link:'https://abdelrahman200.github.io/black-landing-page2/'},
  {protitle:'disney project',categoty:['css','js','html'],imgPath:'./project4.png',link:'https://abdelrahman200.github.io/disney/'},
  {protitle:'pricing project',categoty:['css','html'],imgPath:'./project5.png',link:'https://abdelrahman200.github.io/pricing/'},
  {protitle:'animation login project',categoty:['css','js','html'],imgPath:'./project6.png',link:'https://abdelrahman200.github.io/Animated-Login/'},
 
]

export default function Main() {
  const [current,setcurrent] = useState('all');
  const [arr,setarr] = useState(myproject);
  return (
    <main className='flex' >
      


      <div className='left-sec flex'>
        <button onClick={()=>{
          setcurrent('all');
          setarr(myproject)
        }} className={current==='all'?'active':null}>all-project</button>
       
       
        <button onClick={()=>{
           setcurrent('css')

           const newarr =myproject.filter((item)=>{
            const secarr =item.categoty.filter((myitem)=>{
              return myitem ==='css'
            })

             return secarr[0] ==='css';
             
           })
           setarr(newarr)

        }} className={current==='css'?'active':null}>Html and css</button>



<button onClick={()=>{
           setcurrent('js')

           const newarr =myproject.filter((item)=>{
            const secarr =item.categoty.filter((myitem)=>{
              return myitem ==='js'
            })

             return secarr[0] ==='js';
             
           })
           setarr(newarr)

        }} className={current==='js'?'active':null}>javasctipt</button>

<button onClick={()=>{
           setcurrent('react')

           const newarr =myproject.filter((item)=>{
            const secarr =item.categoty.filter((myitem)=>{
              return myitem ==='react'
            })

             return secarr[0] ==='react';
             
           })
           setarr(newarr)

        }} className={current==='react'?'active':null}>react</button>


        
      </div>

      <div className='right-sec flex'>
      <AnimatePresence>



      {arr.map((item) =>{
        return(
          <>
          <motion.article
             style={{ overflow: "hidden" }}
             
              layout
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{type:'spring',damping:4}}
              exit={{ transform: "scale(0)" }}
          
          
          
           key={item.imgPath} className='card'>
        <img  width={266} height={266} src={item.imgPath}/>
        <div style={{width: '266px'}} className='box'>
          <h1 className='title'>{item.protitle}</h1>
          <p className='sub-title'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis magnam mollitia, voluptatibus, minima inventore, quam reprehenderit sapiente consequuntur qui consequatur molestias adipisci omnis cupiditate perferendis est ad ipsam obcaecati quo.</p>
       <div className='flex icons'>
       <div style={{gap:'11px'}} className='flex'>
        <div  className='icon-link'></div>

        <div className='icon-github'></div>
        </div>
        <a href={item.link} className='flex'>more <span className='icon-arrow-right'></span></a>
        
       </div>
        </div>
      </motion.article>
          </>
        )

      })}

      </AnimatePresence>
      </div>
    </main>
  )
}
