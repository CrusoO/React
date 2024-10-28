import { useState } from 'react'
import { useForm } from "react-hook-form";
import './App.css'

function App() {
  const { register, 
    handleSubmit, 
    watch, 
    formState: { errors ,isSubmitting} } = useForm();

async function onSubmit(data){
 await new Promise((res)=> setTimeout(res,5000))
  console.log('submitting form',data)
}
  return (
   <form action="" onSubmit={handleSubmit(onSubmit)}>
    <div>
      <label >First Name: </label>
      <input  className={errors.firstName?'inputError':' '}
      {...register("firstName",{ required: true,minLength:{value:3,message:'need more than 3 characters'},pattern:{value:/^[A-Za-z]+$/i ,message:'follow the required pattern'}})}/>
      {errors.firstName && <p className='errorMsg'>{errors.firstName.message}</p>}
    </div>
    <div>
      <label >Last Name: </label>
      <input   className={errors.lastName?'inputError':' '} {...register("lastName",{ required: true,pattern:{value:/^[A-Za-z]+$/i ,message:'follow the required pattern'}})}/>
      {errors.lastName && <p className='errorMsg'>{errors.lastName.message}</p>}
    </div>
    <input type="Submit" disabled={isSubmitting} value={isSubmitting?'Submitting':'Submit'}/>
   </form>
  )
}

export default App
