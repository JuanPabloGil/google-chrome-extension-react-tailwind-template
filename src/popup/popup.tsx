import React from 'react'
import { createRoot } from 'react-dom/client'
import "../assets/tailwind.css";

const App: React.FC<{}> = () => {
  return (
    <div className='p-5'>
      <h1 className='text-red-600 text-lg'>Hello World!</h1>
    </div>
  )
}
const root = document.createElement('div')
document.body.appendChild(root)
createRoot(root).render(<App />)