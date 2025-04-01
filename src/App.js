import './App.css';
import Box from "./component/Box";

/*
1. 박스 2개 ( 타이틀, 사진, 결과)
2. 가위 바위 보 버튼이 있다
3. 버튼을 클릭하면 클릭한 값이 박스에 보임
4. 컴퓨터는 랜덤하게 아이템 선택이 된다
5. 3 4 의 결과를 가지고 누가 이겼는지 승패를 따진다
6. 승패결과에 따라 테두리 색이 바뀐다 ( 이김-초록, 짐-빨강 비김-검정 )
*/
const choice = {
    rock: {
        name: "Rock",
        img: "https://www.google.com/imgres?q=gold%20rock%20.png&imgurl=https%3A%2F%2Fdreamlightvalleywiki.com%2Fimages%2Fc%2Fcf%2FGold_Nugget.png&imgrefurl=https%3A%2F%2Fdreamlightvalleywiki.com%2FGold_Nugget&docid=L1QNYplV8SlLSM&tbnid=AP8kCIIk2nV9pM&vet=12ahUKEwj1yvDE8raMAxUkh68BHcAqB9sQM3oECDYQAA..i&w=202&h=202&hcb=2&ved=2ahUKEwj1yvDE8raMAxUkh68BHcAqB9sQM3oECDYQAA"
    },
    scissors:{
        name:"Scissors",
        img: "data:image/png;base64,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",
    },
    paper: {
        name: "Paper",
        img: "https://www.google.com/imgres?q=gold%20paper.png&imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F046%2F828%2F219%2Fnon_2x%2Fdamaged-gold-foil-isolated-on-transparent-background-png.png&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Ffree-png%2Fgold-paper&docid=CAmX-_N9IEVNyM&tbnid=b7pyyxJwFvYY9M&vet=12ahUKEwjd-dXw8raMAxVecvUHHd6tADYQM3oECGgQAA..i&w=1301&h=980&hcb=2&ved=2ahUKEwjd-dXw8raMAxVecvUHHd6tADYQM3oECGgQAA",
    },
}
function App() {
    const play = (userChoice) =>{
        console.log("선택됨", userChoice)
    }
    return (
        <div>
            <div className="main">
                <Box title="You"/>
                <Box title="Computer"/>
            </div>
            <div className="main">
                <button onClick={()=>play("scissors")}>가위</button>
                <button onClick={()=>play("rock")}>바위</button>
                <button onClick={()=>play("paper")}>보</button>
            </div>
        </div>
    );
}

export default App;
