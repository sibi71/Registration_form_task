import React from 'react'
import"./Form.css"
import { useForm } from 'react-hook-form';
import Select from 'react-select';

const options = [
    { value: 'Full Stack developer ', label: 'Full Stack developer' },
    { value: 'Web developer ', label: 'Web developer' },
    { value: 'React developer ', label: 'React developer ' },
  ];
const Form = () => {
    const { register, handleSubmit, formState:{errors}, watch } = useForm();

    
  const onSubmit = (data) => {
    console.log(data);
  };

  const password = watch('password');

  return (
   <form onSubmit={handleSubmit(onSubmit)} className='form'>
     <div  className='form__inputbox
     '>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          placeholder='Enter your Name'
          {...register("name",{ required: true })}
        />
        {errors?.name && <span>This field is required</span>}
      </div>

      <div className='form__inputbox
      '>
        <label>Mobile:</label>
        <input
          type="text"
          name="mobile"
          placeholder='Enter your Mobile Number'
          {...register("mobile",{
            required: true,
            pattern: /^[0-9+-]+$/,
          })}
        />
        {errors?.mobile && (
          <span>Please enter a valid mobile number</span>
        )}
      </div>
      <div className='form__inputbox
      '>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          placeholder='Enter Your Email'
        {...register("email",{
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />
        {errors?.email && <span>Please enter a valid email</span>}
      </div>
      <div className='form__inputbox
      '>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder='Enter Your Password'
          {...register("password",{
            required: true,
            pattern: /^(?=.*\d{4})(?=.*[a-z]{2})(?=.*[A-Z]{2})(?=.*[@#$]).{8,}$/,
          })}
        />
        {errors?.password && (
          <span>
            Password must contain at least 1 special character, 4 numbers, 2
            capital letters, and 2 small letters
          </span>
        )}
      </div>
      <div className='form__inputbox
      '>
        <label>Re-enter Password:</label>
        <input
          type="password"
          name="repassword"
          placeholder='Re-Enter password'
        {...register("repassword",{
            required: true,
            validate: (value) =>
              value === password || 'The passwords do not match',
          })}
        />
        {errors?.repassword && <span>{errors.repassword.message}</span>}
      </div>
      
      <div className='form__select' >
        <label>Select Field:</label>
        <Select options={options} />
      </div>
     
      <div className='form__optionbox'>
        <label>
          <input
            type="radio"
            name="radio"
            value="option1"
            {...register("radio",{ required: true })}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="radio"
            value="option2"
            {...register("radio",{ required: true })}
          />
         Female
        </label>
        {errors?.radio && <span>This field is required</span>}
      </div>
      <div className='form__checkbox'>
        <label>
          <input
            type="checkbox"
            name="checkbox"
            {...register("checkbox",{ required: true })}
          />
          submitted form
        </label>
        {errors?.checkbox && <span>This field is required</span>}
      </div>

      <button type="submit">Submit</button>

   </form>
  )
}

export default Form