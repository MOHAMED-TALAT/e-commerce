import React, { useEffect, useState } from 'react'


export default function Cart({ cart, setCart }) {





  function deleteFromCart(id) {
    const newCart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
    const filteredCart = newCart.filter(item => item.id !== id)
    localStorage.setItem("cart", JSON.stringify(filteredCart))
    setCart(filteredCart)
  }






  return (
    <div>
      {cart.length == 0 ? <div className="vh-100 d-flex justify-content-center align-items-center">
        <h2>Cart is Empty <i className='fa fa-shopping-cart me-1 '></i> </h2>
      </div> : ""}
      {cart ? cart.map((item, index) => {
        return <div key={index}>
          <div className="container  ">
            <div className="row m-auto mt-3 bg-gainsboro p-3 " style={{ backgroundColor: "gainsboro", borderRadius: "10px" }}>

              <div className="col-md-4 d-flex justify-content-center align-items-center">
                <img className="w-50 " src={item.image} alt="product" />
              </div>

              <div className="col-md-8 pt-5 position-relative">
                <p className="text-uppercase text-black-50">{item.category}</p>
                <p className="">{item.title}</p>
                <p className="lead fw-bold mt-3 ">$  {item.price}</p>
                <button className="btn  position-absolute bottom-0 end-0 " onClick={() => deleteFromCart(item.id)}><i class="fa fa-2x  fa-solid fa-trash"></i></button>

              </div>


            </div>
          </div>
        </div>
      }) : ""}

    </div>
  )
}
