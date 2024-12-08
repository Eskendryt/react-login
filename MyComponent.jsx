import react, { useState } from 'react';

function MyComponent() {


    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");


    function handleNameChange(event) {
        setName(event.target.value);
    }


    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }


    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }

    function handleShippingChange(event) {
        setShipping(event.target.value);
    }




    return (<>
        <div>

            <input value={name} onChange={handleNameChange} />
            <p>name: {name}</p>


            <input value={quantity} onChange={handleQuantityChange} />
            <p>Quantity: {quantity}</p>


            <textarea value={comment} onChange={handleCommentChange} placeholder='Enter delivery instructions' />
            <p>Coment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="visa">Visa</option>
                <option value="master card">Master Card</option>
                <option value="Gift card">Gift Card</option>

            </select>
            <p>payment: {payment}</p>

            <label><input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange} />
            Pick Up
            </label><br />
            <label>
                <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange} />
            Delivery
            </label>
            <p>Shipping: {shipping}</p>



        </div>
    </>);
}

export default MyComponent