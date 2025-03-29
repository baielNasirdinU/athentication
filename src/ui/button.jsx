
function button({label,click}) {
  return (
    <div>
        <button onClick={click} className="outline px-2 w-full my-4 bg-amber-600 py-2 text-white">{label}</button>
    </div>
  )
}

export default button