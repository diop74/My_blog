import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInStart, signInSuccess,signInFailure } from '../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import OAuth from '../components/OAuth';

const Signin = () => {
    const [formData, setFormData] = useState({});
    const {loading, error =errorMessage} = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
           return  dispatch(signInFailure('Please fill all the fields'));
            
        }

        try {
            dispatch(signInStart());
            const response = await fetch('api/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (data.success === false) {
                return dispatch(signInFailure(data.message));
            }
            if (response.ok) {
                dispatch(signInSuccess(data));
                navigate('/');
            }
        } catch (error) {
             return dispatch(signInFailure(error.message)); 
        }
    };

    return (
        <div className='min-h-screen mt-20'>
            <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
                <div className='flex-1'>
                    <Link to="/" className='font-bold dark:text-white text-4xl'>
                        <span className='px-2 py-1 bg-gradient-to-r from-green-700 via-tail-500 to-lime-300 rounded-lg text-white'>Chitari's</span>
                        Blog
                    </Link>
                    <p className='text-sm mt-5'>Vous pouvez vous connecter avec votre adresse e-mail et votre mot de passe ou avec Google.</p>
                </div>
                <div className='flex-1'>
                    <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                        <div>
                            <Label value='Email'></Label>
                            <TextInput type='email' placeholder='Exemple@gmail.com' id='email' onChange={handleChange}></TextInput>
                        </div>
                        <div>
                            <Label value='Your password'></Label>
                            <TextInput type='password' placeholder='**************' id='password' onChange={handleChange}></TextInput>
                        </div>

                        <Button gradientDuoTone="tealToLime"type='submit' disabled={loading}>
                            {loading ? (
                                <>
                                    <Spinner size='sm' />
                                    <span className='pl-3'>Loading...</span>
                                </>
                            ) : (
                                'Sign In'
                            )}
                        </Button>
                        <OAuth/>
                    </form>
                    <div className='flex gap-2 text-sm mt-5'>
                        <span> Don't Have an account?</span>
                        <Link to='/signup' className='text-blue-500'>Sign Up</Link>
                    </div>
                    {error && (<Alert className='mt-5' color='failure'>{error}</Alert>)}
                </div>
            </div>
        </div>
    );
}

export default Signin;
