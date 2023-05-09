import { useEffect, useState } from "react";

const useToken = email =>{
    const [token,setToken] = useState('');
    useEffect(()=>{
        if(token){
            fetch(`http://localhost:5000/jwt?email=${email}`)
            //এখানে ?email= দিতে ভুল করেছিলাম
            .then(res=>res.json())
            .then(data=>{
                if(data){
                    setToken(data.neToken)
                }
            });
        }
    },[email])
    return [token];
}
export default useToken;