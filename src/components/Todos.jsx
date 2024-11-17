/* eslint-disable no-unused-vars */
import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import { removeTodo } from '../assets/features/todo/TodoSlice'

function Todos() {

    const todos= useSelector(state => state.todos.todos)
    const dispatch= useDispatch()
  return (
    <>
    <div className="text-3xl font-bold text-center my-8 text-gray-800">
      Todos
    </div>
    <ul className="mx-auto w-1/2 space-y-4">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300"
        >
          <span className="text-gray-700 font-medium">{todo.text}</span>
          <button
            onClick={() => dispatch(removeTodo(todo.id))}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition duration-300"
          >
            X
          </button>
        </li>
      ))}
    </ul>
  </>
  )
}

export default Todos