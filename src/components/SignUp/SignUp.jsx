import React, { useContext, useState } from 'react';
import "./SignUp.css"
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState('')
    const {createUser} = useContext(AuthContext);

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm)
        setError("")
        if(password !== confirm){
            setError("password didn't match");
            return;
        }
        else if (password.length < 6){
            setError("password must be 6 characters or longer");
            return;
        }
        createUser(email, password)
        .then(result => console.log(result.user))
        .catch(err => console.log(err))
        form.reset()
    }

    return (
        <div className='border w-[400px] p-8 mx-auto mt-16 rounded-md'>
            <h2 className='font-bold text-3xl text-center mb-6'>Signup</h2>
            <form onSubmit={handleSignUp}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' autoComplete='user-name' className='w-full border mb-5 px-2 py-4 rounded-md'/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>  
                    <input type="password" name='password' autoComplete='new-password' className='w-full border mb-5 px-2 py-4 rounded-md'/>      
                </div>
                <div>
                    <label htmlFor="password">confirm Password</label>  
                    <input type="password" name='confirm' autoComplete='new-password' className='w-full border mb-5 px-2 py-4 rounded-md'/>      
                </div>
                <input type="submit" value="Signup" className='text-lg font-semibold py-4 w-full bg-[#ffb545] rounded-md hover:bg-[#ffa41c] cursor-pointer mb-2'/>
                <small>Already have an account? <Link to="/login" className='text-[#FF9900]'>Please login</Link></small>
                <small className='text-red-600 block'>{error}</small>
            </form>
        </div>
    );
};

export default SignUp;