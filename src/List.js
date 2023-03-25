import React from "react";

function List(props) {
    return(
        <ul>
           {
            props.items.map((item, index) => 
               <li key={index}>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                <label class="form-check-label" for="flexCheckDefault">
                    {item}
                </label>
               </li> )
           }
        </ul>
    )
}

export default List;