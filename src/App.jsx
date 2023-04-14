import { useState, useEffect } from 'react'
import cart from './assets/cart.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CatalogItem from './components/CatalogItem/CatalogItem'

function App() {

  const [items, setItems] = useState([])

  const fetchItems = () => {
    fetch("https://api.avavion.ru/api/products")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setItems(data)
      })
  }

  useEffect(() => {
    fetchItems()
  }, [])
  

  return (
    
    <div className="">
      
      <div className="header">
        <div className="logo">WeAreBuilding</div>
        <div className="cart"><img src={cart} alt="" /></div>
      </div>
      <div className="main">
      <div className="items">
          {
            items.map((item) => {
              return <CatalogItem item={item} />
            })
          }
        </div>
      </div>
    </div>
    
  )
}

export default App
