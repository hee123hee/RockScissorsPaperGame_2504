import { useEffect, useState } from 'react';
import './App.css';
import Box from './components/Box';
import Buttons from './components/Buttons.jsx';

const choice = {
    Rock: {
        name: 'Rock',
        icon: '✊',
    },
    Scissor: {
        name: 'Scissor',
        icon: '✌️',
    },
    Paper: {
        name: 'Paper',
        icon: '✋',
    },
};

const userChoice = [
    {
        name: 'Scissor',
        title: '가위',
    },
    {
        name: 'Rock',
        title: '바위',
    },
    {
        name: 'Paper',
        title: '보',
    },
];
function App() {
    const [userSelect, setUserSelect] = useState('');
    const [computerSelect, setComputerSelect] = useState('');
    const [result, setResult] = useState('');
    const [userScore, setUserScore] = useState(0);
    const [comScore, setComScore] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);

    const userPlay = (select) => {
        let computerChoice = randomChoice();

        setUserSelect(choice[select]);
        setComputerSelect(computerChoice);

        const gameResult = judgement(userSelect, computerSelect);
        setResult(gameResult);
        updateScore(gameResult);
    };
    const randomChoice = () => {
        let itemArray = Object.keys(choice);
        let randomItem = Math.floor(Math.random() * itemArray.length);
        let filnal = itemArray[randomItem];
        return choice[filnal];
    };

    const judgement = (user, computer) => {
        if (user.name === computer.name) return 'TIE';
        else if (user.name === 'Rock') return computer.name === 'Scissor' ? 'WIN' : 'LOSE';
        else if (user.name === 'Scissor') return computer.name === 'Paper' ? 'WIN' : 'LOSE';
        else if (user.name === 'Paper') return computer.name === 'Rock' ? 'WIN' : 'LOSE';
    };
    const updateScore = (result) => {
        if (userScore < 3 && comScore < 3) {
            if (result === 'WIN') {
                setUserScore((prevScore) => (prevScore < 3 ? prevScore + 1 : 3));
            } else if (result === 'LOSE') {
                setComScore((prevScore) => (prevScore < 3 ? prevScore + 1 : 3));
            }
        }
    };

    const comResult = (res) => {
        if (res === 'TIE') {
            return 'TIE';
        } else if (res === 'WIN') {
            return 'LOSE';
        } else if (res === 'LOSE') {
            return 'WIN';
        } else {
            return ' ';
        }
    };

    const resetBtn = () => {
        setUserScore(0);
        setComScore(0);
        setComputerSelect('');
        setUserSelect('');
        setResult('');
        setIsGameOver(false);
    };

    useEffect(() => {
        if (userScore === 3 || comScore === 3) {
            setIsGameOver(true);
        }
    }, [userScore, comScore]);

    useEffect(() => {
        if (isGameOver) {
            if (userScore === 3) {
                alert('가위바위보 게임에서 승리했어😍');
            } else if (comScore === 3) {
                alert('가위바위보 게임에서 패배했어😭');
            }
            resetBtn();
        }
    }, [isGameOver]);

    return (
        <div className="container">
            <div className="title">
                <h1>가위바위보 게임에 오신걸 환영합니다 :)</h1>
                <p>3 점을 먼저 획득하는 사람이 이기는 게임 !</p>
            </div>
            <div className="main">
                <Box item={computerSelect} score={comScore} title="Computer" result={comResult(result)} />
                <h3 className="vs_text">VS</h3>
                <Box item={userSelect} score={userScore} title="User" result={result} />
            </div>
            <Buttons userChoice={userChoice} userPlay={userPlay} isGameOver={isGameOver} />
            <button onClick={() => resetBtn()} className="reset_btn">
                리셋
            </button>
        </div>
    );
}

export default App;