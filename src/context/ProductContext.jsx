
import { createContext, useState } from "react";

// Step 1: Create a context
export const ProductContext = createContext();

// Step 2: Create the provider component
export const ProductProvider = ({ children }) => {
  // Sample data - replace with API call
  const response = [
    {
      id: 1,
      productname: "black Glasses",
      qty: 2
    },
    {
      id: 2,
      productname: "Black Cap",
      qty: 5
    }
  ];

  const [products, setProducts] = useState(response);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
