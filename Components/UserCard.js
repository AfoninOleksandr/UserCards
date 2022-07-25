import './card.css'

import Address from './Address'






  function UserCard ({userData}) {

    const onSubmit = (e) => {
        
          return(
           
            <div className="card_info" >
               {userData.name} {userData.username} {userData.email} 
            <div className="card_body">
            <Address address={userData.address}/>
            </div>
          
        </div>
           );
          
    

    }
    return (

        <div className="card_info" >
            <div className="card_body">
            {userData.name} {userData.username} {userData.email}
            <Address address={userData.address}/>

            <button className='button' onClick={onSubmit}> More Info </button>
            </div>
          
        </div>
     
        

    );
   
        
    

};

export default UserCard;