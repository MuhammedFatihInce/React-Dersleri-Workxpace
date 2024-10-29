import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCounter from './hooks/useCounter'
import useToggle from './hooks/useToggle'
import useCopyToClipboard from './hooks/useCopyToClipboard'

function App() {

  // const {count, increase, decrease} = useCounter();
  // return (
  //  <div>
  //     <div>{count}</div>
  //     <button onClick={increase}>Arttır</button>
  //     <button onClick={decrease}>Azalt</button>
  //  </div>
  // )

  // const { open, change } = useToggle();

  // return (
  //   <div>
  //     {open && <div style={{width: '100px', height: '100px', backgroundColor: 'red'}}>kutu</div>}
  //     <button onClick={change}>{open ? 'Gizle' : 'Göster'}</button>
  //   </div>
  // )

  const [copied, copy] = useCopyToClipboard("Pes etme çalış");

  return (
    <div>
     {copied && 'kopyalandı'}
     <button onClick={copy}>Kopyala</button>
    </div>
  )
  
}

export default App
