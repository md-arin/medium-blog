import  { ChangeEvent } from 'react'

interface LabelledInputType{
    label: string;
    placeholder: string;
    type: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

function LabelledInput({label, placeholder, onChange, type}: LabelledInputType) {
  return (
    <div>
        <div className='mt-2'>
            <label className="block mb-2 text-md font-semibold text-black">{label}</label>
            <input onChange={onChange} type={type} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
        </div>
    </div>
  )
}

export default LabelledInput