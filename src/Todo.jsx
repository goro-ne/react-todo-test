import './styles.css'

export const Todo = () => {

  return (
    <>
      <div className="input-area">
        <input placeholder='TODOを入力'></input>
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p>未完了のTODO</p>
        <ul>
          <li>
            <div className="list-row">
              <p>TODOです</p>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
          <li>
            <div className="list-row">
              <p>TODOです</p>
              <button>完了</button>
              <button>削除</button>              
            </div>
  
          </li>
        </ul>
      </div>
      <div className="complete-area">
        <p>完了のTODO</p>
        <ul>
          <li>
            <div className="list-row">
              <p>TODOでした</p>
              <button>戻す</button>
            </div>
          </li>
          <li>
            <div className="list-row">
              <p>TODOでした</p>
              <button>戻す</button>              
            </div>
          </li>
        </ul>
      </div>
    </>
  )
};