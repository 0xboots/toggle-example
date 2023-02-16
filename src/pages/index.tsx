import { useEffect, useState} from "react";
import Head from 'next/head'


const inputArray = [1, 2, 3, 4, 5]

export default function Home() {
  
  const [selectedArray, setSelectedArray] = useState([]);

  const displayNFT = () => {
    let nftArray = inputArray?inputArray:[]
    return (
      <div className='flex grid sm:grid-cols-2 lg:grid-cols-4 gap-5 px-10 py-5'>
        {nftArray.map((value:any, index:any) => 
        <button

          onClick={()=>(setSelectedArray(selectedArray.includes(value)
            ?selectedArray.filter(el => el !== value)
            :[...selectedArray,value]),
            console.log("buttonClickLog:"+selectedArray))}

          className={selectedArray.includes(value)?
            'p-4 bg-gray-800/80 border-2 border-gray-200 rounded-xl'
            :'p-4 bg-gray-800/20 border-2 border-gray-600 rounded-xl'}>

            {value}
        </button>
        )}
      </div>
    )
    }

  ///////////    USEEFFECT HOOKS

  useEffect ( ()=> {
    
     console.log("useEffectlog:" + selectedArray)
  },[selectedArray])
    
  
  return (
    <>
      <Head>
        <title>Toggle Example by 0xboots</title>
        <meta name="description" content="toggle Example by 0xboots" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex bg-black h-[100vh] text-center text-gray-400 justify-center">
        <div className="p-3">
          <p className='text-3xl'>
            Get started by selecting below&nbsp; <br/>
            
          
          </p>
          Selected will glow and console log the selected array
        
        {displayNFT?.()}
         

         

       

          
        </div>
      </main>
    </>
  )
}
