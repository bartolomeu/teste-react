import React from "react";

export default props => {
  const { cor, nome } = props;
  return (<li>
    <span style={{color:cor}}> {nome} </span>
    <button onClick={props.click}>del</button>
  </li>);
};
