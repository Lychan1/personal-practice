// src/App.jsx
import { useState } from 'react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState([])

  const handleAdd = () => {
    if (inputValue.trim() === '') return;
    const newTask = {
      id: Date.now(),
      text: inputValue
    }
    setTodos([...todos, newTask])
    setInputValue('')
  }
  const handleDelete = (id) => {
    // 逻辑: 留下那些 ID 不等于我要删除 ID 的任务 (过滤掉要删的那个)
    const newTodos = todos.filter((task) => task.id !== id)
    setTodos(newTodos)
  }


  return (
    <div className="container">
      <h1>我的待办清单</h1>
      <div className="input-group">
        <input type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder='今天要做什么？' />
        <button onClick={handleAdd}>添加</button>
      </div>
      <ul>
        {todos.map((task) => (
          <li key={task.id}>
            <span>{task.text}</span>
            <button onClick={() => handleDelete(task.id)}>删除</button>
          </li>
        ))}
      </ul>
      {todos.length === 0 && <p>目前没有任务，加一个吧！</p>}

    </div>
  )
}

export default App