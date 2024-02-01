import React, { useEffect, useState } from 'react'
import { Header } from '../../Components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { getDataThunk, postThunk } from '../../api/reducers/getSlice'
import CatCard from '../../Components/Cards/CategoryCard/CatCard'

const Products = () => {
    const [price, setPrice] = useState('')
    const data = useSelector(state => state.getData.products)
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDataThunk())
    },[])


    const post = {
        price: price
    }
    const sendPost = () => {
        dispatch(postThunk(post))
    }

  return (
    <div>
        <Header/>
        { data && data.map(item => <CatCard key={item.id} item={item}/>)}
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} name="" id="" />
        <button onClick={sendPost}>Gonder</button>
    </div>
  )
}

export default Products