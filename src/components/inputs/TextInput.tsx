import React from 'react'
type Props = {
    value:string,
    onChange:(event: React.ChangeEvent<HTMLInputElement>)=>null,
    type?:"text"|"password"
}
const TextInput = ({value, onChange=()=>null, type = "text"}:Props) => {
  return (
    <input type={type} value={value} onChange={(e)=>onChange(e)} />
  )
}

export default TextInput