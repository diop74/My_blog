import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [formData, setFormData] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
        
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.username || !formData.email || !formData.password) {
            setErrorMessage('Please fill all the fields');
            return;
        }
        
        try {
            setLoading(true);
            setErrorMessage(null);
            const response = await fetch('api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (data.success === false) {
                return setErrorMessage(data.message);
            }
            setLoading(false);
            if(response.ok) {
                setErrorMessage(null);
                setFormData({});
                return useNavigate('/signin');
            }
        } catch (error) {
            setErrorMessage(error.message);
            setLoading(false);
            
        }
    };
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
                    <form className='flex flex-col gap-4' onSubmit={handleSubmit} >
                        <div>
                            <Label value='Your username'></Label>
                            <TextInput type='text' placeholder='Username' id='username' onChange={handleChange} ></TextInput>
                        </div>
                        <div>
                            <Label value='Email'></Label>
                            <TextInput type='email' placeholder='Exemple@gmail.com' id='email' onChange={handleChange} ></TextInput>
                        </div>
                        <div>
                            <Label value='Your password'></Label>
                            <TextInput type='password' placeholder='Password' id='password' onChange={handleChange}></TextInput> </div>

                        <Button gradientDuoTone='' type='sumit' disabled={loading} >
                            {loading ? (
                                <><Spinner size='sm'/>
                                    <span className='pl-3'>Loading...</span>
                                    </>
                            
                            ) : (
                                'Sign up'
                            )
                            }
                        </Button>

                    </form>
                    <div className='flex gap-2 text-sm mt-5'>
                    <span>Have an account?</span>
                    <Link to='/signin' className='text-blue-500'>Sign in</Link>
                         </div>
                         {errorMessage && (<Alert className='mt-5' color='failure' >{errorMessage}</Alert>)
                    }
                </div> 
            </div>
        </div>
    );
}

export default Signup;
