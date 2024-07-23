import './styles.css';
import { useState } from 'react';
import { CompleteTodos } from './components/CompleteTodos';
import { InputTodo } from './components/InputTodo';
import { IncompleteTodos } from './components/IncompleteTodos';

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
  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
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