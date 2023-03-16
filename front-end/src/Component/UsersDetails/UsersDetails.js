import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { api } from '../../Api';

const ProductList = () => {
    const [usersData, setUsersData] = useState([]);
    useEffect(() => {
        getproducts()
    },[])
    const getproducts = async () => {
        const datas = await api.get('/get-users')
        setUsersData(datas.data)
    }

  return (
<>
    <div className='product-list'>
        <h3>Users Details</h3>
        <ul>
            <li>S. No</li>
            <li>Name</li>
            <li>Age</li>
            <li>Email I'd</li>
            <li>Phone No</li>
        </ul>
        { usersData &&
            usersData.map((users,index )=>
            <ul key={users._id}>
            <li>{index+1}</li>
            <li>{users.name}</li>
            <li>{users.age}</li>
            <li>{users.email}</li>
            <li>{users.phoneNo}</li>
        </ul>)
        }
    </div>
</>
  )
}

export default ProductList