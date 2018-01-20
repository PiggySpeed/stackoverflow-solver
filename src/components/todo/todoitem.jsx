import React from "react";

const TodoItem = props => (
  <div>
    {props.text}
    <br />
    {props.checked ? "checked" : "unchecked"}
    <input
      type="checkbox"
      checked={props.checked}
      onChange={(e, i) => props.handleChecked(e, props.index)}
    />
  </div>
);

export default TodoItem;