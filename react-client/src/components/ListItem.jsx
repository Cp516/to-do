import React from 'react';

const ListItem = (props) => (
  <div>
      {console.log(props.item)}
    <ul>
    <li>{ props.item.item }</li>
    </ul><button onClick={()=>{props.remove(props.item.item)}}>All Done</button>
  </div>
)

export default ListItem;