import React from 'react'
import {IState as props} from '../App'

const List: React.FC<props> = ({people}) => {

    const renderList = ():JSX.Element[] => {
        return people.map(person=>{
           return(
            <li className="List">
                <div className="List-header">
                    <img className="List-img" src={person.url}/>
                    <h3>{person.name}</h3>
                </div> 
                <p>{person.age} years old</p>
                <p className="List-note">{person.note}</p>
            </li>
           )
        })
    }

   return(
       <ul>
       {renderList()}
       </ul>
   )
}

export default List
