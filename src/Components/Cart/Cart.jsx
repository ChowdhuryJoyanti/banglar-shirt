import React from 'react';
import'./Cart.css'

const Cart = ({cart,handleRemoveFromCart}) => {

    let message;
    if(cart.length === 0){
        message = <p>Please add some products</p>
    }
    else{
        message = <div>
            <h3> Borolox</h3>
            <p><small>Thanks for wasting your money</small></p>

        </div>
    }
    return (
        <div>
            <h2 className={cart.length === 1 ? 'blue':'red'} >order summary:{cart.length}</h2>
            <p className={`bold bordered ${cart.length===3 ? 'yellow': 'purple'}`}>something </p>
            {
            cart.length > 2 
            ? <span className='purple'>Aro Kino</span> 
            : <span>fokira</span>
            }

                {message}
            {
                cart.map(tshirt => <p
                     key={tshirt._id}
                     >{tshirt.name} <button 
                     onClick={() => handleRemoveFromCart(tshirt._id)}>X</button></p>)
            }

            {
                cart.length ===2 && <p>Double bonanza</p>
            }
            {
                cart.length == 3  || <h3>tinta to hoilo na</h3>
            }
        </div>
    );
};

export default Cart;



/**
 * 
 * conditional randering
 * 1.use if or if else to set a variable that will contain an element
 * 2.ternary : condition ?  'for true' : 'false'
 * 3.Logical && :(if the condition is true then  the next thing will be displayed)
 * 3.Logical || :(if the condition is false then  the next thing will be displayed)
 * 4.
 * 
 * CONDITIONAL CSS
 * 1.USE TERNARY
 * 2.TERNARY INSIDE TEMPLATE STRING
 * 
 * 
 *  
 */


