import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Registration.css'
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape(
    {
        firstname: yup.string().required('**First name is required'), 
        lastname: yup.string().required('**Last name is required'),
        email: yup.string().email('**Please enter the Valid email').required('**Email is required '),
        // age: yup.number().integer().positive().required(),
        password: yup.string().required().min(6,"**Minimun 6 chars is Required").max(14,"**Enter upto 14 chars only"),
        confirmpassword: yup.string().oneOf([yup.ref("password"), null])
    }
)
const Registration = () => {
    // const [fname, setFname] = useState(''); console.log(fname)
    // const [lname, setLname] = useState('');
    const { register, handleSubmit, formState: { errors} } = useForm({ resolver: yupResolver(schema) });
    // console.log(isValid);
 console.log(errors)

    return (
        <>
            <div className='registration-app'>
                <div className="registration-container">
                    <div className='Header'>
                        <h2 data-testid='registration-heading'>Registration</h2>
                    </div>
                    <div className='form-container'>
                        <form onSubmit={handleSubmit((data) => console.log(data))} >
                            <input {...register('firstname')} placeholder='First Name.....' data-testid='firstnamefield'></input>
                            <p>{errors.firstname?.message}</p>

                            <input {...register('lastname')} placeholder='Last Name....' type='text' data-testid='lastnamefield'></input>
                            <p>{errors.lastname?.message}</p>

                            <input {...register('email')} type='email' placeholder='Email.....' data-testid='emailfield'></input>
                            <p>{errors.email?.message}</p>

                            {/* <input {...register('age')} type='age' placeholder='Age...'></input>
                            <p>{errors.age?.message}</p> */}

                            <input {...register('password')} type='password' placeholder='Password.....'data-testid='passwordfield'></input>
                            <p>{errors.password?.message}</p>

                            <input {...register('confirmpassword')} type='password' placeholder='Confirm Password.....' data-testid='confirmpasswordfield'></input>
                            <p>{errors.confirmpassword?.message}</p>

                            <button className='btn btn-primary'>Register!</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registration
