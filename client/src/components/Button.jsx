import React from 'react'
import { useStateContext } from '../contexts/ContextProvider'

const Button = ({icon, width, bgHoverColor, bgColor, color, size, text, borderRadius}) => {
  const {setIsClicked, initialState} = useStateContext();
  return (
    <button
    type='button'
    style={{backgroundColor: bgColor, color, borderRadius}}
    className={`text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    onClick={()=> setIsClicked(initialState)}
    >
      {icon} {text}
    </button>
  )
  }
export default Button
