import { useState } from 'react';
import './styles.css'

export const Todo = () => {
  // ステート定義
  const [todoText, setTodoText]　= useState("");
  const [incompleteTodos, setIncompleteTodos]
    = useState(["TODOです１", "TODOです２"]);
  const [completeTodos, setCompleteTodos]
    = useState(["TODOでした１", "TODOでした２"]);
  // テキスト入力
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  // 追加ボタン
  const onClickAdd = () => {
    if (todoText === "") return;
    const nreTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(nreTodos);
    setTodoText("");
  };
  return (
    <>
      <div className="input-area">
        <input placeholder='TODOを入力' value={todoText} onChange={onChangeTodoText}></input>
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map( (todo) => (
              <li key={todo}>
                <div className="list-row">
                  <p className="todo-item">{todo}</p>
                  <button>完了</button>
                  <button>削除</button>
                </div>
              </li>
          ))}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
        {completeTodos.map( (todo) => (
              <li key={todo}>
                <div className="list-row">
                  <p className="todo-item">{todo}</p>
                  <button>戻す</button>
                </div>
              </li>
          ))}
        </ul>
      </div>
    </>
  )
};