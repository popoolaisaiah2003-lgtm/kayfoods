import { useState, useEffect } from "react"
import "./assets/meal.css"
import Header from "./meal_components/Header"
import Hero from "./meal_components/Hero"
import Categories from "./meal_components/Categories"
import Footer from "./meal_components/Footer"


const Meal = () => {
  const [categories, setCategories] = useState([]);//categories coming from api end point will be stored here. 
    //Initially its an empty array
    const [loading, setLoading] = useState(false); //tracking if theres ongoing request been sent.so that will 
    //be able to tell the user 
    const [error, setError] = useState(false); // to determine if there is erroe in the server 

      //a function that connect to an api
      function fetchMealCategories(){
        setLoading(true);
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            setLoading(false);
            setError(false);
          setCategories(data.categories || []);
        })
        .catch(function(err){
            setLoading(false);
            setError(true);
            setCategories([]);
        })
      }
      //this hook is used to communicate with an external system 

    useEffect(()=>{
        fetchMealCategories()
    }, []);

  return (
  <>
    <Header/>
    <Hero/>
    <Categories categories={categories} error={error} loading={loading}/>
    <Footer/>
  </>
  )
}

export default Meal