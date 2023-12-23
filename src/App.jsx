import { useState,useCallback } from 'react'
import './App.css'

function App() {
const [length,setLength] = useState(8);
const [numberAllowed,setNumberAllowed] = useState(true);
const [specialCharacterAllowed,setSpecialCharacterAllowed] = useState(true)
const [password,setPassword] = useState("")



const passwordGenerator = useCallback(() => {
let pass="";
let str = "ABCDEFGHIJKLMNOQRSTUVWXYZabcdefghijklmnopqrstuvwqyz"

if(numberAllowed) str+= "1234567890"

if(specialCharacterAllowed) str+=`<>,./?"':;{[|-=(*+_-)]}`

for (let i = 0; i < str.length; i++) {
 let index = Math.random(Math.random() * str.length + 1)
  pass = str.charAt(index);
}

setPassword(pass);


},[length,numberAllowed,specialCharacterAllowed,setPassword])


  return (
  <>
   <div className='bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 h-[100vh] w-[100vw] flex justify-center items-center flex-col'>
   <h1 className='text-center text-7xl text-indigo-400 font-bold'>Password Generator</h1>
    <div className='flex justify-center items-center h-2/6 w-3/6 '>
    <input 
    className='w-[500px] h-[70px] outline-none p-5  shadow-lg'
   type="text"
   value={password}
   readOnly
   placeholder='Password'
   />
   <button className='h-[70px] w-[130px] bg-slate-400 shadow-lg'>
    Copy
   </button>
    </div>
    <div className='text-white font-mono text-2xl'>
      <input type="range" 
      min={8}
      max={32}
      value={length}
      onChange={(e) => {setLength(e.target.value)}}
      className='cursor-pointer'
      />
      <label className='mx-3 font-mono text-2xl'>Length:{length}</label>
      <input type="checkbox" 
      defaultChecked={numberAllowed}
      onChange={()=> {
        setNumberAllowed((prev) => !prev)
      }}
      />
      <label className='mx-3 '>Numbers</label>

      <input type="checkbox" 
      defaultChecked={specialCharacterAllowed}
      onChange={() => {
        setSpecialCharacterAllowed((prev) => !prev)
      }}
/>
      <label className='mx-3'>Special-Characters</label>
    </div>
   </div>
  </>
  )
}

export default App
