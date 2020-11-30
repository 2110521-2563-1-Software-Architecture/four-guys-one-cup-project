import React, { useState } from 'react';
import "./RegisterForm.css"
import axios from "axios"
function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [nationality, setNationality] = useState('');
    const [occupation, setOccupation] = useState('');

    const onRegister = async (e) => {
        e.preventDefault();

        if (password!==confirmPassword) {
            alert("You need to confirm the same password")

        } else {

            const data = {
                "email": email,
                "password": password,
                "name": name,
                "age": Number(age),
                "gender": gender,
                "nationality": nationality,
                "occupation": occupation
            }
        try {
            const response = await axios.post("/api/users/register", data)
        } catch (err) {
            alert('Something Wrong')
        }

        

        axios.post("/api/users/login",data).then((res) => {
            if(res.data.auth === true){
                localStorage.setItem('token', res.data.token);
                axios.defaults.headers.common['x-access-token'] = res.data.token;
                window.location.reload()
            }
          }).catch((err) => {
              alert('Something wrong');
              console.log(err);
          })
        // const response = await fetch("/api/users/register", {
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify(data)
        // })

        // const user = response.json()
        // console.log(user)
        // return user
        }

    }

    return (
        <div className="card login">
            <div class="card-body">
                <h4 class="card-title mb-4">Register</h4>
                <form onSubmit={onRegister}>
                    <div className='form-group'>
                        <label>Email</label>
                        <input className='form-control' type='email' required='required' onChange={(event)=>setEmail(event.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <label>Password</label>
                        <input className='form-control' type='password' required='required' onChange={(event)=>setPassword(event.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <label>Confirm Password</label>
                        <input className='form-control' type='password' required='required' onChange={(event)=>setConfirmPassword(event.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <label>Name</label>
                        <input className='form-control' type='text' required='required' onChange={(event)=>setName(event.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <label>Age</label>
                        <input className='form-control' type='age' required='required' onChange={(event)=>setAge(event.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <label>Gender</label>
                        <input className='form-control' type='text' required='required' onChange={(event)=>setGender(event.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <label>Nationality</label>
                        <input className='form-control' type='text' required='required' onChange={(event)=>setNationality(event.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <label>Occupation</label>
                        <input className='form-control' type='text' required='required' onChange={(event)=>setOccupation(event.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <button type="submit" className="btn btn-primary btn-block"> Register  </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register