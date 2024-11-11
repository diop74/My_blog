import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='min-h-screen mt-20'>
            <div className='flex p-3 max-w-3xt mx-auto flex-col md:flex-row md:items-center gap-5'>
                <div className='flex-1'>
                    <Link to="/" className='font-bold dark:text-white text-4xl'>
                        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purpule-500 to-pink-500 rounded-lg text-white'>Chitari's</span>
                        Blog
                    </Link>
                    <p className='text-sm mt-5' >this is a demo signup page. You can signup up with your email and password or with Google. </p>
                </div>
                <div className='flex-1'>
                    <form className='flex flex-col gap-4'>
                        <div>
                            <Label value='Your username'></Label>
                            <TextInput type='text' placeholder='Username' id='username' ></TextInput>
                        </div>
                        <div>
                            <Label value='Your email'></Label>
                            <TextInput type='email' placeholder='Email' id='email' ></TextInput>
                        </div>
                        <div>
                            <Label value='Your password'></Label>
                            <TextInput type='password' placeholder='Password' id='password' ></TextInput> </div>

                        <Button gradientDuoTone='' type='sumit' >Sign Up</Button>

                    </form>
                    <div className='flex gap-2 text-sm mt-5'>
                    <span>Have an account?</span>
                    <Link to='/signin' className='text-blue-500'>Sign in</Link>
                         </div>
                    
                </div> 
            </div>
        </div>
    );
}

export default Signup;
