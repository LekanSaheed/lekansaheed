import React, {useState, useEffect} from 'react'
import {db} from './firebase'
import {storage} from './firebase'

const Admin = () => {
const AllInputs = {imgUrl: ''}

const [name, setName] = useState('')
const [stock, setStock] = useState(0)
const [desc, setDesc] = useState('')
const [price, setPrice] = useState(0)
const [shortDesc, setShortDesc] = useState('')
const [file, setFile] = useState(null);
const [url, setURL] = useState("");


const handleImageAsFile = (e) => {
    setFile(e.target.files[0]);
}



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
                name, price : parseInt(price, 10), stock, desc, shortDesc, iurl
            })
            .then(() => {
                console.log("Document successfully written!");
                console.log(name, price, url )
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
            });
        });
}
    return (
        <div>
            <h2>Add Products to List
            </h2>
        <form>
        <div className='inputContainer'>
                <label htmlFor='image'>Item Name</label>
                <input type='file' id="image" required onChange={handleImageAsFile}/>
            </div>
            <div className='inputContainer'>
                <label htmlFor='name'>Item Name</label>
                <input id="name" required value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className='inputContainer'>
                <label htmlFor='price'>Item price</label>
                <input type="number" min={0} id="price" required value={price} onChange={(e) => setPrice(e.target.value)}/>
            </div>
            <div className='inputContainer'>
                <label htmlFor='stock'>Amount in stock</label>
                <input type='number' min={0} id="stock" required value={stock} onChange={(e) => setStock(e.target.value)}/>
            </div>
            <div className='inputContainer'>
                <label htmlFor='shortDesc'>Short description</label>
                <input id="shortDesc" required value={shortDesc} onChange={(e) => setShortDesc(e.target.value)}/>
            </div>
            <div className='inputContainer'>
                <label htmlFor='desc'>Description</label>
                <input id="desc" required value={desc} onChange={(e) => setDesc(e.target.value)}/>
            </div>
            <button id="btn" type='submit' disabled={!name || price <= 0  || !desc || !shortDesc || stock <= 0 || !file} onClick={handleSubmit}>Add products</button>
            </form>  
        </div>
    )
}

export default Admin
