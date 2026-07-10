import React, { useState } from 'react'
import Header from './playground_components/Header'
import Content from './playground_components/Content'
import Footer from './playground_components/Footer'
import homeBg  from './assets/home-bg.jpg'
const Playground = () => {
    const [count, setCount] = useState(0);
    var appname = "Blogger"
    var fruits = ["Apple", "Banana", "Mango", "Grapes"]
    var products = [
        { id: 1, name: "Smart TV", price: 1000 },
        { id: 2, name: "Laptop", price: 2000 },
        { id: 3, name: "Smartphone", price: 3000 },
    ];
    function sayHello() {
        alert("Hello")
    }
  return (
    <div>
        <Header xyz={appname} abc={count} />
        <Content  count={count} fruits={fruits} products={products} updater={setCount} />
        <Footer />
        {/*How to display an image that is inside the public folder*/}
        <img src="/assets/img/home-bg.jpg" alt="Description" className="img_fluid" />

        {/*How to display an image that is inside the src folder*/}
        <img src={homeBg} alt="Description" className="img_fluid" />
    </div>
    )   
}
export default Playground