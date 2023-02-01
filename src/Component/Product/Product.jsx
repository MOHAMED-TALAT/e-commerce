import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

export default function Product({AddToCard }) {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false)



    useEffect(() => {
        const getProduct = async () => {
            setLoading(true)
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
            setProduct(response.data)
            setLoading(false)
            

        }
        getProduct()

    }, [])

    const Loading = () => {
        return <div className='w-100 vh-100 d-flex justify-content-center align-items-center'>
            Loading....
        </div>
    }
    const ShowProduct = () => {
        return <>
            <div className="col-md-6 vh-100 d-flex justify-content-center align-items-center">
                <img src={product.image} width="400px" height="400px" className="img-fluid pt-5" alt={product.title} />
            </div>
            <div className="col-md-6 pt-5">
                <p className="text-uppercase text-black-50">{product.category}</p>
                <h1 className="display-5">{product.title}</h1>
                <p className="lead fw-bold mt-3">$ {product.price}</p>
                <p className='lead mt-3'> {product.description}</p>
                <button onClick={() => AddToCard(product)} className="btn btn-outline-dark bx-4 py-2 "  >Add to Cart</button>
                <Link  className="btn btn-dark ms-2 px-3 py-2" to={"/cart"}>Go to cart </Link>

            </div>
        </>
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    {loading ? <Loading/> : <ShowProduct/> }
                </div>
            </div>
        </div>
        
    )
}
