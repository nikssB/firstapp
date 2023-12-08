import './App.css';
import Header from './Header';
import Product from './Product';
import Products from './Products';

function App() {
  // function doSomething()
  // {
  //   console.log("Hi..... I am Clicked.");
  // }
  
  let Countries = [
  {name:"India",Capital:"Delhi"},
  {name: "South Africa",Capital:"Cape-Town"},
  {name:"NewZeland",Capital:"Wellington"}

  ]

  return (
    <div className="App">
      <Header></Header>
      <Products></Products>

      {
        Countries.map((country)=>{
          return(
            <div className='Data'>
             <h3>{country.name}</h3>
             <p>{country.Capital}</p>
            </div>

          )
        })
      }
    </div>
  )

 
 


}

export default App;
