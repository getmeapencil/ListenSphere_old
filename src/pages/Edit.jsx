import { BiSolidUser } from 'react-icons/bi';
import { useState } from 'react';

function FormInput({label, type, name, inputs, handleChange, bio=false}) {
  return (
    <>
      <div className='w-96 px-5 translate-y-3'>
        <label className='bg-label-blue px-[0.5rem] py-[0.25rem] border-[3px] border-black rounded-full font-semibold'>{label}</label>
      </div>
      {
        (bio === false) ? 
        <input type={type} name={name} value={inputs.name || ""} onChange={handleChange} className={`w-96 h-16 px-[0.5rem] py-[0.25rem] border-[3px] border-black rounded-2xl hover:ring hover:ring-label-blue focus:ring focus:ring-label-blue items-center ml-auto`} /> : 
        (<textarea type={type} name={name} value={inputs.name || ""} onChange={handleChange} className={`w-96 h-36 px-[0.5rem] py-[1rem] border-[3px] border-black rounded-2xl hover:ring hover:ring-label-blue focus:ring focus:ring-label-blue items-center ml-auto`}></textarea>)}
    </>
  )
}

function Form() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }
  return (
    <form onSubmit={handleSubmit} className="mt-20 flex flex-col items-center border-4 border-black px-4 pt-4 pb-2 rounded-2xl bg-gradient-to-r from-card-grad-l to-card-grad-r "> 
      <img alt="Remy Sharp" src="/src/assets/avatar (1).png" className='absolute -translate-y-20 mt-2 w-28 h-28 border-4 border-black rounded-full'/>
      <div className='flex flex-col items-center mt-14'>
        <FormInput label="Your Name" type="text" name="username" inputs={inputs} handleChange={handleChange}/>
        <FormInput label="Instagram" type="text" name="instagram" inputs={inputs} handleChange={handleChange}/>
        <FormInput label="Twitter" type="text" name="twitter" inputs={inputs} handleChange={handleChange}/>
        <FormInput label="Bio" type="text" name="bio" inputs={inputs} handleChange={handleChange} bio={true} />
      </div>
      <input type="submit" value="Save" className='translate-y-8 bg-button-green hover:bg-button-green-dark px-[1rem] py-[0.5rem] border-[3px] border-black rounded-full font-semibold'/>
    </form>
  )
}

function Edit() {
    return (
      <div className='max-w-screen-xl h-screen flex flex-col items-center mb-20'>
        <h1 className='text-4xl pt-4 pb-2 font-["League_Spartan"]'>ListenSphere</h1>
        <circle className='my-2 bg-black rounded-full w-8 h-8 flex justify-center items-center border-2 border-black'>
          <BiSolidUser className='text-nav-yellow'/>
        </circle>
        <Form />
      </div>
    )
}
  
export default Edit;