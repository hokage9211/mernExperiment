import React, { useState, useEffect } from "react";
import Axios from "axios";

const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [listOfFriends, setListOfFriends] = useState([]);
  const addFriend = () => {
    Axios.post("https://mernexperiment.herokuapp.com/addfriend", {
      name: name,
      age: age,
    })
      .then((response) => {
        setListOfFriends ([...listOfFriends,{name:name,age:age}])
        
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const updateFriend=(id)=>{
    const newAge=prompt("enter new age");
    Axios.put("https://mernexperiment.herokuapp.com/update",{age:newAge,id:id}).then(()=>{
      setListOfFriends(listOfFriends.map((val)=>{
        return val._id==id ?{_id:id,name:val.name,age:newAge} : val
      }))
    })

  }
  const deleteFriend=(id)=>{
    Axios.delete(`https://mernexperiment.herokuapp.com/delete/${id}`).then(()=>{
      setListOfFriends(listOfFriends.filter(x=>{
        return x._id != id
      }))
    })
  }
  useEffect(() => {
    console.log("hello")
    Axios.get("https://mernexperiment.herokuapp.com/read")
      .then((dataa) => {
        console.log(dataa.data.data)
        
        setListOfFriends(dataa.data.data);
      })
      .catch((e) => {
          console.log("error cath")
        console.log(e);
      });
  }, []);

  return (
    <div className="App">
      <div className="inputs">
        <input
          type="text"
          placeholder="Friend name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Friend age"
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <button onClick={addFriend}> Add Friend</button>
      </div>
      <div className="listOfFriends">
      {listOfFriends.map(x=>{
        return <div className="friendContainer"> 
        <div className="friend">
<h3>{x.name}</h3>
<h3>{x.age}</h3>
          
        </div>
        <button onClick={()=>{updateFriend(x._id)}}>Update</button>
        <button onClick={()=>{deleteFriend(x._id)}}>delete</button>

        </div>
        
      })}
      </div>
    </div>
  );
};
export default App;
