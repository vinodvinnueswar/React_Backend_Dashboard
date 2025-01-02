import React, { useEffect, useState } from 'react'
import { API_URI } from '../../helpers/ApiPath';

const AllProducts = () => {

    const [products , setAllProducts] = useState([]);

    const productsHandler = async() =>{
      
      const firmId = localStorage.getItem('firmId');

      try {

        const response = await fetch(`${API_URI}/product/${firmId}/products`);
        const newProductsData = await response.json();
        setAllProducts(newProductsData.products);
        console.log(newProductsData);
        
      } catch (error) {
        console.error('failed to fetch products',error);
        alert('failed to fetch products')
        
      }

    }

    useEffect(()=>{
        productsHandler()
        console.log('This is useEffect')

    },[]);

    const deleteProductById = async (productId) => {
        try {
            const response = await fetch(`${API_URI}/product/${productId}`, {
                method : 'DELETE'
            });
            

        if(response.ok){
            setAllProducts(products.filter(product => product._id !== productId));
            confirm('Are you sure you want to delete?'),
            alert('Product deleted successfully');
        }

            
        } catch (error) {
            console.error('Failed to delete product');
            alert('Failed to delete product')
            
        }
    }


  return (
    <div>
        { !products ? (
            <p>No Products added</p>
        ) : (
            <table className="product-table">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item) =>{
                        return(
                            <>
                            <tr key={item._id} >
                                <td>{item.productName}</td>
                                <td>${item.price}</td>
                                <td>
                                    {item.image && (
                                        <img src={`${API_URI}/uploads/${item.image}`} 
                                        alt={item.productName} 
                                        
                                        style={{width:'50px' , height:'50px'}}/>
                                    )}
                                </td>
                                <td><button onClick={() => deleteProductById(item._id)} >Delete</button></td>

                            </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>
        )}
    </div>
  )
}

export default AllProducts