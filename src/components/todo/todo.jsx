import React from "react";
import TodoItem from "./TodoItem";

const generateID = () => {
  let x = 543;
  return () => {
    return x++;
  }
};
const getId = generateID();

class AddTodo extends React.Component {
  render() {
    return (
      <span>
        <input
          onChange={this.props.handleChange}
        />
        <button onClick={this.props.onAddTodo}>
          Hello
        </button>
      </span>
    )
  }
}

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      value: ""
    };
    this.handleChecked = this.handleChecked.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onAddTodo = this.onAddTodo.bind(this);
  }
  handleChecked(e, index) {
    e.preventDefault();
    e.stopPropagation();
    console.log(this.state.todos);

    const todos = this.state.todos;
    const new_todos = todos.map((t, i) => {
      return {
        text: t.text,
        checked: index === i ? !t.checked : t.checked
      };
    });

    this.setState({ todos: new_todos });
  }
  handleChange(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      value: e.target.value
    });
  }
  onAddTodo(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log(this.state.value);
    const todos = this.state.todos;
    const new_todos = [...todos, { text: this.state.value, checked: null }];
    this.setState({
      todos: new_todos,
      value: ""
    });
  }
  render() {
    return (
      <div style={{border: '1px solid black'}}>
        {this.state.todos.map((t, i) => (
          <TodoItem
            handleChecked={(e, id) => this.handleChecked(e, i)}
            index={i}
            key={i}
            text={t.text}
            checked={t.checked}
          />
        ))}
        <AddTodo
          value={this.state.value}
          handleChange={e => this.handleChange(e)}
          onAddTodo={todo => this.onAddTodo(todo)}
        />
      </div>
    );
  }
}