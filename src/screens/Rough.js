// import React from 'react'
import React,{useEffect,useState} from 'react'
import axios from "axios"

const Rough = () => {
    const [products, setProducts] = useState([])
    useEffect(async() => {
        try {
            const res= await axios.get("http://localhost:5000/api/products")
            setProducts(res);
            console.log(res, "photos");    
        } catch (error) {
            console.log(error);
        }
        
    }, [])
  return (
    <>
        {
            products && products.length>0 && products.map((product)=>{
                <>
                <p>{product.id}</p>
                <p>{product.description}</p>
                </>
            })
        }
    </>
  )
}

export default Rough