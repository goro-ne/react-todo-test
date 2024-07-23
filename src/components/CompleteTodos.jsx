export const CompleteTodos = (props) => {
    const { todo, onClick } = props;
    return (
        <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
        {todo.map( (todo, index) => (
              <li key={todo}>
                <div className="list-row">
                  <p className="todo-item">{todo}</p>
                  <button onClick={() => onClick(index)}>戻す</button>
                </div>
              </li>
          ))}
        </ul>
      </div>
    );
};
