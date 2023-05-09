import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Orders = () => {
    const navigate = useNavigate()
    const [order,setOrder] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/orders',{
            method:'GET',
            headers:{
                authorization:`arer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>{
            if(res.status === 401 || res.status === 403){
                navigate('/login');
            }
            return res.json()
        })
        .then(data=>{
            console.log(data);
            setOrder(data)
        })
    },[])
    return (
        <div>
            <h4>THis is orders page {order.length}</h4>
            {
                order.map(product=><h3>{product.email} <br></br> and Name: {product.name} <br></br> Role: {product.role}</h3>)
            }
        </div>
    );
};

export default Orders;