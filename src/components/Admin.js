import React, {useState} from 'react'
import {db} from './firebase'
import {storage} from './firebase'
import Select from 'react-select'
import './Admin.css'

const Admin = () => {
    const options = [
        { value: 'phone', label: 'Phone' },
        { value: 'laptop', label: 'Laptop' },
        { value: 'phone parts', label: 'Phone parts' },
        { value: 'gaming console', label: 'Gaming console' },
        { value: ' gadgets', label: 'Gadgets' },
        { value: 'tablets', label: 'Tablets' },
        { value: 'electronics', label: 'Electronics' },
        { value: 'accessories', label: 'Accessories' },
        { value: 'others', label: 'Others' },
      ];

const [item, setItem] = useState('')
const [stock, setStock] = useState(0)
const [desc, setDesc] = useState('')
const [price, setPrice] = useState(0)
const [shortDesc, setShortDesc] = useState('')
const [file, setFile] = useState(null);
const [url, setURL] = useState("");
const [category, setCategory] = useState(null)


const handleImageAsFile = (e) => {
    setFile(e.target.files[0]);
}

// const change = category.map((cat) => {
//     return cat.value
// })

    const handleSubmit = (e) => {
        e.preventDefault();
        const ref = storage.ref(`/images/${file.name}`);
        const uploadTask = ref.put(file);
        uploadTask.on("state_changed", console.log, console.error, () => {
          ref
            .getDownloadURL()
            .then((iurl) => {
              setFile(null);
              setURL(iurl);
              console.log('url', typeof(iurl), iurl)

              //file upload
              var colRef =  db.collection("phones")
            colRef.add({
                item, price : parseInt(price, 10), stock, desc, shortDesc, iurl, category: category.map((el) => {
                   console.log(el, el.value)
                    return (el.value)
                })
            })
            .then(() => {
                console.log("Document successfully written!");
                console.log(item, price, url, category )
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
            });
        });
}
    return (
        <div>
            <h2 className='upload-heading'>Add Products to List
            </h2>
            <section className='upload-container'>
        <form className='product_table'>
      
        <div className='inputContainer'>
                <label htmlFor='image'>Choose Image to upload</label><br/>
                <input type='file' id="image" required onChange={handleImageAsFile}/>
            </div>
            <div className='inputContainer'>
                <label htmlFor='name'>Item Name</label>
                <br/>
                <input id="name" required value={item} onChange={(e) => setItem(e.target.value)}/>
            </div>
        
            <div className='inputContainer'>
                <label htmlFor='price'>Item price</label><br/>
                <input type="number" min={0} id="price" required value={price} onChange={(e) => setPrice(e.target.value)}/>
            </div>
            <div className='inputContainer'>
                <label htmlFor='stock'>Amount in stock</label><br/>
                <input type='number' min={0} id="stock" required value={stock} onChange={(e) => setStock(e.target.value)}/>
            </div>
            <div>
            <label>categories</label><span>(You can select more than 1)</span>
            <Select value={category} isMulti={true} isSearchable={true} isClearable={true} options={options} onChange={(category) => setCategory(category)}/>
        </div>
             
            
            <div className='inputContainer'>
                <label htmlFor='shortDesc'>Short description</label><br/>
                <input id="shortDesc" required value={shortDesc} onChange={(e) => setShortDesc(e.target.value)}/>
            </div>
          
            <div className='inputContainer'>
                <label htmlFor='desc'>Description</label><br/>
                <input id="desc" required value={desc} onChange={(e) => setDesc(e.target.value)}/>
            </div>
          
               
                 <button style={{background: `${!item || 
                price <= 0  || !desc || !shortDesc || stock <= 0 ||
                 !file || !category ? 'skyblue' : '#1c83c6'}`}} className='btn-submit' type='submit' disabled={!item || 
                price <= 0  || !desc || !shortDesc || stock <= 0 ||
                 !file || !category} onClick={handleSubmit}>Add products
                 </button>
            </form>  
            </section>
            
        </div>
    )
}

export default Admin
