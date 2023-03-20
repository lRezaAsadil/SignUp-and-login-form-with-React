import React from 'react';

const SignUp = () => {
    return (
        <div>
            <form>
                <h1>Sign Up</h1>
                <div>
                    <label>Name</label>
                    <input type="text" name='Name'/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" name='Email'/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="Password" name='Password'/>
                </div>
                <div>
                    <label>Confrim Password</label>
                    <input type="Password" name='ConfrimPassword'/>
                </div>
                <div>
                    <label>I accept terms of privacy policy</label>
                    <input type="checkbox" name='IsAccepted'/>
                </div>
                <div>
                    <a href="#/">Login</a>
                    <button type='submit'>Sign up</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;