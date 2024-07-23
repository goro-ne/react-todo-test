import './styles.css';
import { useState } from 'react';
import { CompleteTodos } from './components/CompleteTodos';
import { InputTodo } from './components/InputTodo';
import { IncompleteTodos } from './components/IncompleteTodos';

export const Todo = () => {
  // ステート定義
  const [todoText, setTodoText]　= useState("");
  const [incompleteTodos, setIncompleteTodos]
    = useState([]);
  const [completeTodos, setCompleteTodos]
    = useState([]);
  // テキスト入力
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  // 追加ボタン
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };
  // 削除ボタン
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  // 完了ボタン
  const onClickComplete = (index) => {
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  // 戻すボタン
  const onClickBack = (index) => {
    const newTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newTodos);
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);
  };
  // TODOが最大値を超えたか判定
  const isMaxLimitIncompleteTodos = incompleteTodos.length >= 5;
  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={isMaxLimitIncompleteTodos}
      />
      {isMaxLimitIncompleteTodos && (
        <p　style={{color: "red"}}>
          登録できるTODOは５個までです。TODOを消化してください。
        </p>
      )}
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos
        todo={completeTodos}
        onClick={onClickBack}
      />
  </>
  )
};