import React from 'react'
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import { useForm } from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// React form  hook schema validation
const schema = yup.object().shape(
    {
        email: yup.string().email("**Invalid Email address").required("**Email is required"),
        password: yup.string().required("**Password is Required").min(6, "**Minmun 6 chars is Required").max(14, "**Enter upto 14 chars is ")
    }
)

// created a login function to validate the user.

const Login = () => {

    // Calling the below  functions will help us in accessing our data and error messages using hooks.

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

    return (
        <>
            <div className='login-app'>
                <div className='login-container'>
                    <div className="form-container">
                        <div className="login-header">
                            <h2>Login</h2>
                        </div>
                        <form onSubmit={handleSubmit((data) => console.log(data))}>
                            <div>
                                <a href='#'>{<PersonIcon />}</a>
                                <input {...register('email')} type='email' placeholder='Enter you email....'></input>
                            </div>
                            <p>{errors.email?.message}</p>
                            <div>
                                <a href='#'>{<KeyIcon />}</a>
                                <input {...register('password')} type='password' placeholder='Enter your password...'></input>
                            </div>
                            <p>{errors.password?.message}</p>
                            <div className='button-login'>
                                <button className='btn btn-primary'>Login</button>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Login
