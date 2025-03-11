import './App.css';
import {useState} from "react";

const choice = {
    rock: {
        name: "Rock",
        img: "data:image/jpeg;base64,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",
    },
    scissors: {
        name: "Scissors",
        img: "https://www.google.com/imgres?q=scissors&imgurl=https%3A%2F%2Fimg.lakeshorelearning.com%2Fis%2Fimage%2FOCProduction%2Fts548%3Fwid%3D500%26hei%3D375%26fmt%3Dpjpeg%26pscan%3Dauto%26qlt%3D90%2C1%26op_sharpen%3D0%26resMode%3Dbilin%26op_usm%3D2%2C0.25%2C7%2C0&imgrefurl=https%3A%2F%2Fwww.lakeshorelearning.com%2Fproducts%2Fs%2FTS548%2F&docid=_ri-qZCjzeMcUM&tbnid=OABjXDLGw--rdM&vet=12ahUKEwipvZjIooGMAxVJsFYBHeC_Js8QM3oECH8QAA..i&w=500&h=375&hcb=2&ved=2ahUKEwipvZjIooGMAxVJsFYBHeC_Js8QM3oECH8QAA",
    },
    paper: {
        name: "Paper",
        img: "https://www.google.com/imgres?q=paper&imgurl=https%3A%2F%2Fi.ebayimg.com%2Fimages%2Fg%2F7GIAAOSw8T9gVMP5%2Fs-l1200.jpg&imgrefurl=https%3A%2F%2Fwww.ebay.co.uk%2Fitm%2F264687300459&docid=SHrEZ9TP1rePZM&tbnid=Smyho8X2YzpMAM&vet=12ahUKEwil376_ooGMAxUqqVYBHbteNv8QM3oECH0QAA..i&w=1200&h=800&hcb=2&ved=2ahUKEwil376_ooGMAxUqqVYBHbteNv8QM3oECH0QAA ",
    },
};


function App() {
    const [userSelect, setUserSelect] = useState(null)
    const [computerSelect, setComputerSelect] = useState(null)
    const play = (useChoice) => {
        setUserSelect(choice[useChoice])
        let computerChoice = randomChoice()
        setComputerSelect(computerChoice);
    };

    const randomChoice = () => {
        let itemArray = Object.keys(choice); // 객체의 키값만 뽑아서 어레이로 만들어주는 함수
        console.log("item array", itemArray);
        let randomItem = Math.floor(Math.random()*itemArray.length); // 랜덤 인덱스를 뽑음
        console.log("random Value", randomItem); // 해당 인덱스의 값을 리턴
    }

    return (
        <div>
            <div className="main">
                <Box title="You" item={userSelect} />
                <Box title="Computer" item={computerSelect} />

            </div>
            <div className="main">
                <button onClick={() => play("scissors")}>가위</button>
                <button onClick={() => play("rock")}>바위</button>
                <button onClick={() => play("paper")}>보</button>
            </div>
        </div>
    );
}

export default App;
