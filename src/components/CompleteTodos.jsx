const styleCompleteArea = {
  // complete-area
  border: "2px solid #aacfd0",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px",
  backgroundColor: "#c9dede"
};
const styleTitle = {
  // title
  textAlign: "center",
  marginTop: 0,
  fontWeight: "bold"
}

export const CompleteTodos = (props) => {
    const { todo, onClick } = props;
    return (
        <div style={styleCompleteArea}>
        <p style={styleTitle}>完了のTODO</p>
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
