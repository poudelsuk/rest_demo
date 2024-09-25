export default function TextInput ({value,onChange}){
  return(
    <input
       className="border rounded-lg focus:outline-blue-700 p-1 "
       value={value}
       onChange={onChange}
       />
  )
}