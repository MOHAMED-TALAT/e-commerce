import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

export default function Products() {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)
    let componentMounted = true;

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true)
            const response = await axios.get('https://fakestoreapi.com/products')
            // console.log(response.data)
            if (componentMounted) {
                setData(response.data)
                setFilter(response.data)
                setLoading(false)

            }
            return () => {
                componentMounted = false;
            }
        }
        getProduct()

    }, [])

    const Loading = () => {
        return <div className='w-100 vh-100 d-flex justify-content-center align-items-center'>
            Loading....
        </div>
    }

    const filterProduct = (x) => {
        const updatedList = data.filter((item) => item.category === x)
        setFilter(updatedList)
    }

    const ShowProducts = () => {
        return <>

            <div className="buttons d-flex justify-content-center mb-5">
                <button className="btn btn-outline-dark me-2  " onClick={() => { setFilter(data) }}>All</button>
                <button className="btn btn-outline-dark me-2 " onClick={() => { filterProduct("men's clothing") }}>Men's Clothing </button>
                <button className="btn btn-outline-dark me-2 " onClick={() => { filterProduct("women's clothing") }}>Women's Clothing </button>
                <button className="btn btn-outline-dark me-2 " onClick={() => { filterProduct("jewelery") }}>Jewelery </button>
                <button className="btn btn-outline-dark me-2 " onClick={() => { filterProduct("electronics") }}>Electronic  </button>

            </div>
            <div className="container-fluid">
                <div className="row">
                    {filter.map((elm) => {
                        return (

                            <div className="col-md-3 mb-4" key={elm.id} >
                                <div className="card h-100 text-center p-4"  >
                                    <img height="250px" src={elm.image} className="card-img-top " alt={elm.title} />
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">{elm.title.substring(0, 12)}...</h5>
                                        <p className="card-text lead fw-bold"> ${elm.price}</p>
                                        <Link to={`/product/${elm.id}`} className="btn btn-outline-dark"> Buy Now</Link>
                                    </div>
                                </div>
                            </div>


                        )
                    })}

                </div>
            </div>


        </>
    }

    return (
        <div>
            <div className="container my-5 py-5 ">
                <div className="row">
                    <div className="col-md-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center'>Latest Products </h1>
                        <hr />

                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}

                </div>
            </div>
        </div>
    )
}
