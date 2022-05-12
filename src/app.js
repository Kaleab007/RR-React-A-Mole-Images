import MoleContainer from './MoleContainer'
import { useState } from 'react';
function App() {
    const [score, setScore] = useState(0)
    const createMoleHill = () => {
        let hills = []
        for (let i = 0; i < 9; i++) {
            hills.push(<MoleContainer key={i} setScore={setScore} score={score}/>)
        }
        return (
        <div>{hills}</div> );
    }
    return (
        <div className='App'>
            <div align="center">
            <h1>Wu Tang Mole Game</h1>
            <h1>High Score {score}</h1>
            {createMoleHill()}
        </div>
        </div>
        
    );
}
export default App;