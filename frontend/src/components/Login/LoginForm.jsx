import React, { useState } from 'react';
import "../Login/LoginForm.css"
import axios from "axios"
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const onLogin = async (e) => {
        e.preventDefault();

        const data = {
            "email": email,
            "password": password
        }

        axios.post("http://localhost:9000/api/users/login",data).then((res) => {
      

            if(res.data.auth === true){
                localStorage.setItem('token', res.data.token);
                axios.defaults.headers.common['x-access-token'] = res.data.token;
            }
          }).catch((err) => {
              alert('Something wrong');
              console.log(err);
          })

    }

    return (
        <div className="card login">
            <div class="card-body">
                <h4 class="card-title mb-4">Sign-in</h4>
                <form onSubmit={onLogin}>
                    <div className='form-group'>
                        <label>Email</label>
                        <input className='form-control' placeholder='ex@sample.com' type='email' onChange={(event)=>setEmail(event.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <label>Password</label>
                        <input className='form-control' placeholder='*********' type='password' onChange={(event)=>setPassword(event.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <button type="submit" className="btn btn-primary btn-block" > Login  </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login