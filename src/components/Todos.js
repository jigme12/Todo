import React, { Component } from 'react'
import Todoitem from './Todoitem'
import PropTypes from 'prop-types'

class Todos extends Component {
    render() {
    return this.props.todos.map((x)=>(<Todoitem  key={x.id} x={x} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>))
    }
}
//PropTypes
Todos.propTypes={
    todos: PropTypes.array.isRequired
}

export default Todos