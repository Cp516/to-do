import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4> List Component </h4>
    There are { props.items.length } items.
    { props.items.map( (item, idx)=><ListItem item={item} key={idx} remove={props.remove}/>  ) }
  </div>
)

export default List;