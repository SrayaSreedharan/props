import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from '../pages/Card';
import '../pages/Card.css';

const Api = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
        console.log(response)
        setData(response.data);
      })
.catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className='card-inside'>
      <h1 style={{marginTop:'10px'}}>Product List</h1>
      <div className='card-grid'>
      {data.map((item) => (
        <Card key={item.id} product={item} />
      ))}
      </div>
    </div>
  );
};


export default Api
