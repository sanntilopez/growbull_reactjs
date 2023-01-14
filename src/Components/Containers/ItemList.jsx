import React from "react";
import Item from "../Item";



const ItemList = ({items}) => {


    return(
        <div className="row p-0">
            {
                items.map(item => 
                 <div className="col-lg-3 mb-3 " key={item.id} >
                    <Item item={item}/>
                 </div>   
                    
                )
            }
        </div>
    )
}

export default ItemList;