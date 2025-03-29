
import React from "react"

function Input({placeholder,label,setState,state,type='text'}) {
  return (
    <div className="flex flex-col gap-2">
<label htmlFor="sd" id="sd">
{label}
</label>
<input type={type} className="outline p-3" onChange={(e)=>setState(e.target.value)} value={state}  id="sd" placeholder={placeholder} />
</div>
  )
}

export default Input