import React,{useState} from 'react'
import { PaystackButton } from 'react-paystack'
import { GlobalContext } from './context'
import {db}  from './firebase'

const PaystackPay = () => {
const {state} = GlobalContext()
 
const publicKey = "pk_test_92a93b84a772b5837f40984aba6db9fcf7b20582"
const amount = 1000000 // Remember, set in kobo!
const [email, setEmail] = useState("")
const [name, setName] = useState("")
const [phone, setPhone] = useState("")

const componentProps = {
  email,
  amount,
  metadata: {
    name,
    phone,
  },
  publicKey,
  text: "Pay Now",
  onSuccess: () => {
    console.log("Thanks for doing business with us! Come back soon!!")
    const cart = state.cart
    var batch = db.batch()
    console.log(cart)
    cart.forEach((doc) => {
      var docRef = db.collection('orders').doc()
      batch.set(docRef, doc)
      
  })
  return batch.commit()
    .then(() => {
      console.log('Succesfully created orders')
    }).catch((error)=>{
      console.log("error", error)
    })}  ,

  onClose: () => alert("Wait! You need this oil, don't go!!!!"),
}

    return (
        <div>
            <div className="checkout-form">
  <div className="checkout-field">
    <label>Name</label>
    <input
      type="text"
      id="name"
      onChange={(e) => setName(e.target.value)}
    />
  </div>
  <div className="checkout-field">
    <label>Email</label>
    <input
      type="text"
      id="email"
      onChange={(e) => setEmail(e.target.value)}
    />
  </div>
  <div className="checkout-field">
    <label>Phone</label>
    <input
      type="text"
      id="phone"
      onChange={(e) => setPhone(e.target.value)}
    />
  </div>
  <PaystackButton className="paystack-button" {...componentProps} />
</div>
        </div>
    )
}

export default PaystackPay
