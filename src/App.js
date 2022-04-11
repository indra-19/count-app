import { useState } from "react";

function App() {
  const [num, setNum] = useState(0)
  const [choice, setChoice] = useState(1)

  return (
    <div className="app">
      <div className="box">
        <p>{num}</p>
      </div>
      <div className="box2">
        <div className={choice === 1 ? 'number choice' : 'number'} onClick={() => setChoice(1)}>1</div>
        <div className={choice === 2 ? 'number choice' : 'number'} onClick={() => setChoice(2)}>2</div>
        <div className={choice === 3 ? 'number choice' : 'number'} onClick={() => setChoice(3)}>3</div>
        <div className={choice === 4 ? 'number choice' : 'number'} onClick={() => setChoice(4)}>4</div>
        <div className={choice === 5 ? 'number choice' : 'number'} onClick={() => setChoice(5)}>5</div>
        <div className={choice === 6 ? 'number choice' : 'number'} onClick={() => setChoice(6)}>6</div>
        <div className={choice === 7 ? 'number choice' : 'number'} onClick={() => setChoice(7)}>7</div>
        <div className={choice === 8 ? 'number choice' : 'number'} onClick={() => setChoice(8)}>8</div>
        <div className={choice === 9 ? 'number choice' : 'number'} onClick={() => setChoice(9)}>9</div>
      </div>
      <div className="box3">
        <div className="btn" onClick={() => setNum(num+choice)}><span className="material-icons-outlined">add</span></div>
        <div className="btn" onClick={() => setNum(num-choice)}><span className="material-icons-outlined">remove</span></div>
        <div className="btn" onClick={() => setNum(0)}><span className="material-icons-outlined">close</span></div>
      </div>
    </div>
  );
}

export default App;
