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
    <h1 className='text-center text-7xl text-indigo-400 font-bold'>Password Generator</h1>
  </>
  )
}

export default App
