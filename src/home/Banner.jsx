import React from 'react'
import productData from '../products.json'
import {Link} from "react-router-dom"
import SelectedCategories from '../components/selectedCategories'

const title = (
    <h2>Search Your One From <span>Thoudand</span> of Products</h2>
)

const desc = "We have the largest collection of products"

const bannerList = [
    {
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
    },
    {
    iconName: "icofont-notification",
    text: "More then 2000 Marchent",
    },
    {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
    },
    ];


const Banner = () => {
    const [inputSearch, setInputSearch] = React.useState('')
    const [filterProducts, setFilterProducts] = React.useState(productData)
    function handleSearch(event) {
        const searchTerm = event.target.value
        setInputSearch(searchTerm)

        const filtered = productData.filter((product)=> product.name.toLowerCase().includes(searchTerm.toLowerCase()))
        setFilterProducts(filtered)
        
    }
  return (
    <div className='banner-section style-4'>
      <div className="container">
        <div className="banner-content">
            {title}
            <form>
                <SelectedCategories select={"all"}/>
                <input 
                    type="text" 
                    name="search" 
                    id="search" 
                    placeholder='Search your product'
                    onChange={handleSearch}
                    value={inputSearch}
                />
                <button><i className='icofont-search'></i></button>
            </form>
            <p>{desc}</p>
            <ul>
                {
                    inputSearch && filterProducts.map((product, i)=> <li key={i}>
                        <Link to={`/shop/${product.id}`}>{product.name}</Link>
                    </li>)
                }
            </ul>
        </div>

      </div>
    </div>
  )
}

export default Banner
