import React from 'react';
import { useNavigate } from 'react-router-dom';

const inputStyle = {
    width: '100%',
    height: '30px',
    marginBottom: '10px'
}
const Login = () => {
    const navigate = useNavigate();
    const handleLogin = (e)=>{
        e.preventDefault()
        // console.log(e.target);
        const email = e.target.email.value;
        const password = e.target.password.value;
        const userInfo = {email,password,simpleUser: true,isStudent : false,isTeacher : false,isSiteChecker:false}
        // console.log(email,password);
        // navigate('/order')
        fetch('http://localhost:5000/login',{
            method:'POST',
            headers:{
                'content-type':'application/json' 
            },
            body:JSON.stringify(userInfo)
        }).then(res=>res.json())
        .then(data=>{
            console.log('data from login before success',data);
            if(data.success){
                console.log('data from login After success',data);
                console.log('dataaccessToken from login after success',data.accessToken);
                //data success:true hole orders route a cole zabe za backend e true kore deya hoyeche few kichu condition er vittite.
                localStorage.setItem('accessToken',data.accessToken);
                navigate('/cong')
            }
        })

    }
    //value='testmail@gmail.com'

    return (
         <form onSubmit={handleLogin} style={{ width: '50%', margin: '20px auto' }}>
            <h3>I love you</h3>
            <input  style={inputStyle} type="email" name="email" placeholder='Email' />
            <br />
            <input value='1234' style={inputStyle} type="password" name="password" placeholder='Password' />
            <br />
            <input type="submit" value="Login" />
        </form>
    );
};

export default Login;