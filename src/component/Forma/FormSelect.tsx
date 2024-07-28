import { useEffect, useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { AiOutlineSearch } from 'react-icons/ai'
const FormSelect = ({children}:any) => {
  const [field,setField]= useState(null)
  const [inputValue,setInputValue]= useState("")
    const [selected,setSelected]=useState("")
    const [open,setOpen]=useState(false)

  

  useEffect(()=>{
    fetch('https://restcountries.com/v2/all?fields=name')
  .then(res=>res.json())
  .then(data=>setField(data))
  },[])
  return (
    <div>
    
        <div className="w-72 font-medium h-80">
          <div
          onClick={()=>setOpen(!open)}
          className={`bg-gray-300 w-full p-2 flex items-center justify-between rounded ${!selected && "text-gray-700"}`}>
{
  selected?selected:"selecte name"
}            <BiChevronDown size={20}/>
          </div>
          <ul className={`bg-gray-300 mt-2  overflow-y-auto ${open?"max-h-60":"max-h-0"}`}>
           
           <div className='flex items-center px-2 sticky top-0 border bg-white'>
            <AiOutlineSearch size={20}/>
            <input
            value={inputValue}
            onChange={(e)=>setInputValue(e.target.value.toLowerCase())}
            type='text' placeholder='enter country name' className='placeholder:text-gray-700 p-2 outline-none'/>
           </div>
            {
              field?.map(i=>
             ( <li className={`p-2 text-sm hover:bg-sky-600  hover:text-white ${i.name.toLowerCase().startsWith(inputValue)?"block":"hidden"}`}
             onClick={()=>{
              if(i.name.toLowerCase()!== selected.toLowerCase())
              {
                setSelected(i.name)
              }
             }}
             >{i.name}</li>
             ))
            }
            <li className='p-2 text-sm hover:bg-sky-600  hover:text-white'>sample</li>
            <li>sample</li>
            <li>sample</li>
            <li>sample</li>
          </ul>

        </div>
    </div>
  )
}

export default FormSelect