// import './index.css'
// import App from './App.jsx'
// import Blogger from './Blogger.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Banking from './Banking'
import Invento from "./Invento" 
import {ProductProvider} from "./context/ProductContext"
import Meal from './Meal'

// createRoot(document.getElementById)


createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    {/* <Banking /> */}
    {/* <App /> */}
    {/* <Layout /> */}
    {/* <Blogger /> */}

    <ProductProvider>
       <Invento />
    </ProductProvider>

    {/* <Meal /> */}
  </StrictMode>,
)
