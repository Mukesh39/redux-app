import './App.css';
import User from './User';
import Homecontainer from './containers/Homecontainer'
function App() {
  return (
    <div className="App">
         {/*  USers component */}  
     <User data = {{ name:'Mukesh Kumar' , age : '23'}}  />
     <Homecontainer/>
    </div>
  )
}
export default App;



