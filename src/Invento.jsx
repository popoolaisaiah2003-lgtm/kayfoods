import "./assets/app.css"
import  Header  from "./invento_components/Header"
import  Create from "./invento_components/Create"
import  Products  from "./invento_components/Products"
import  Footer  from "./invento_components/Footer"
const Invento = () => {


  return (
    <div className="container">

      <Header />
      <Create />
      <Products />
      <Footer />
      
    </div>
  )
}

export default Invento
