import React, { useState } from 'react';
import "../Login/LoginForm.css"
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const onLogin = async () => {

        const data = {
            "email": email,
            "password": password
        }

        const response = await fetch("/api/users/login", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })

        const user = response.json()

        return user

    }

    return (
        <div className="card login">
            <div class="card-body">
                <h4 class="card-title mb-4">Sign-in</h4>
                <form>
                    <div className='form-group'>
                        <label>Email</label>
                        <input className='form-control' placeholder='ex@sample.com' type='email' onChange={(event)=>setEmail(event.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <label>Password</label>
                        <input className='form-control' placeholder='*********' type='password' onChange={(event)=>setPassword(event.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <button type="submit" className="btn btn-primary btn-block" onSubmit={onLogin}> Login  </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login