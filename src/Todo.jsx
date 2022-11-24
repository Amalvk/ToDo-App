import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './Todo.css';
import { FaOctopusDeploy } from "react-icons/fa";

function Workout() {

    
    const [toDo, setToDo] = useState([]);
    const [toDos, setToDos] = useState("");

    

  const addToDo = () => {
    if (toDo !== "")
      setToDos([...toDos, { id: Date.now(), text: toDo, status: false }]);
    setToDo("");
  };

  return (
    <div className="head">
      <input
        placeholder="type value"
        value={toDo}
        onChange={(e) => {
          setToDo(e.target.value);
        }}
      />
      <button onClick={addToDo}> Click here</button>
      {toDos &&
        toDos.map((item) => {
          return (
            <div className="listTodo">
              <div>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    setToDos(toDos.filter((object) => {
                      if (object.id == item.id) {
                        item.status = e.target.checked;
                        // clicked()
                      }
                      return object
                    }));
                  }}
                />
              </div>
              <div>{item.text}</div>
              <FaOctopusDeploy onClick={(e)=>{
                setToDos(toDos.filter((listValue)=>{
                  return listValue.id!==item.id
                }))
              }}/>
            </div>
          );
        })
    
    }
      <div>
      <h2>Active to Do</h2>
        {toDos &&
          toDos.map((obj) => {
            if (obj.status) {
              return <div>{obj.text}</div>;
            }
            return null;
          })}
      </div>
    </div>
  );
}

export default Workout