import { useEffect, useState } from 'react';
import './App.css';
import UserCard from './Components/UserCard';
import './Components/card.css';

function App() {

  const [users,setUser] = useState([]);
  
  useEffect(() =>{
  (async () => {
   let userData;
    try{
      const response= await fetch('https://jsonplaceholder.typicode.com/users');
      userData = await response.json();
      setUser (userData);
      console.log(response);
      

    }catch (error) {
      console.log(error);
      userData = [];
    }

   })();

  }, []);

  return (
    <div className="App">
      <h1>User Cards</h1>
      
      <div className="cards-container">

      {users.map((userData, index) => (
        <UserCard key={index} userData={userData} />
        
        ))}
      </div>
    </div>
  );
}

export default App;
