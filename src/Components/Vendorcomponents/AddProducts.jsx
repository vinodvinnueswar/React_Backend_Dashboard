import React, { useState } from 'react'
import { use } from 'react';
import { API_URI } from '../../helpers/ApiPath';

const AddProducts = () => {

  const [productName , setProductName] = useState("");
  const [price , setPrice] = useState("");
  const [category , setCategory] = useState([]);
  const [description , setDescription] = useState("");
  const [bestseller ,setBestseller] = useState(false);
  const [image , setImage] = useState(null);


const handleCategoryChange = (event) =>{
  const value = event.target.value;
  if(category.includes(value)){
    setCategory(category.filter((item) => item !== value)); 
  }else{
    setCategory([...category , value]);
  }
}
  
  const handleBestseller = (event) => {
    const value = event.target.value === 'true'
      setBestseller(value)
  }

  const handleImageUpload = (event) =>{
    const selectedImage = event.target.files[0];
    setImage(selectedImage)
  }


  const handleAddProduct = async(e) =>{
    e.preventDefault();

    try {
      const loginToken = localStorage.getItem('loginToken');
      const firmId = localStorage.getItem('firmId');

      if(!loginToken || !firmId){
        console.error("user not authenticated")
      }
     
      const formData =  new FormData();
      formData.append('productName' , productName);
      formData.append('price' , price);
      formData.append('description' , description);
      formData.append('bestseller' ,bestseller)
      formData.append('image' , image);

      category.forEach((value) => {
        formData.append('category' , value); 
      });
      

      const response = await fetch(`${API_URI}/product/add-product/${firmId}`,{
        method : 'POST',
        body : formData,
      })
      
      const data = await response.json()

      if(response.ok){
        console.log(data);
        setProductName("");
        setPrice("");
        setCategory([]);
        setBestseller(false);
        setDescription("");
        setImage(null);
        alert('product added successfully')
      }



      
    } catch (error) {
      console.error(data.message);
      alert('Failed to add products')
      
    }
  }





  return (
    <div className="Firm">
        
    <form className='tableForm' onSubmit={handleAddProduct}>
    <h3>Add Product</h3>
        <label >Product Name</label>
        <input type="text" value={productName} onChange={(e)=>setProductName(e.target.value)} />
        <label >Price</label>
        <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)}/>
        <div className="checkInp">
     <label >Category</label>
         <div className="inputsContainer">
         <div className="checkboxContainer">
                 <label>Veg</label>
                 <input type="checkbox" checked={category.includes('veg')} value="veg"   onChange={handleCategoryChange}/>
               </div>
               <div className="checkboxContainer">
                 <label>Non-Veg</label>
                 <input type="checkbox"checked={category.includes('non-veg')}  value="non-veg" onChange={handleCategoryChange  } />
               </div>
         </div>

   </div>
          <br />

       <label >description</label>
       <input type="text" name="description"  value={description} onChange={(e) => setDescription(e.target.value)}/><br />

       <div className="checkInp">
       <label >Bestseller</label>
       <div className="inputsContainer">
       <div className="checkboxContainer">
           <label >yes</label>
           <input type="radio" value="true" checked={bestseller === true} onChange={handleBestseller} />
           <div className="checkboxContainer">
           <label >No</label>
           <input type="radio" value="false"  checked={bestseller === false} onChange={handleBestseller} /> 

           </div>
       </div>
       </div>
       </div><br />

       <label >Firm Image</label>
       <input type="file"  onChange={handleImageUpload } /><br />

       <button  className= 'btnSubmit' type='submit'>Submit</button>
      
       
    </form>

   </div>
  )
}

export default AddProducts