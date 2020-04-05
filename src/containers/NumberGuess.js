import React, {useState, useEffect} from 'react';
//components
import NumberButton from '../components/NumberButton';
import LongButton from '../components/LongButton';
import Display from '../components/Display';
import GuessHistory from '../components/GuessHistory';
import SuccessModal from '../components/SuccessModal';
//material-ui
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default function NumberGuess() {
    //states
    const [inputNumber, setInputNumber] = useState(0);
    const [questionContent, setQuestionContent] = useState("");
    const [history, setHistory] = useState([]);
    const [answer,setAnswer] = useState(0);
    const [open, setOpen] = useState(false);
    const [guessTimes, setGuessTimes] = useState(0);
    
    //ページが読み込まれたときに一度だけ実行させる
    useEffect(() => {
        setAnswer(Math.floor( Math.random() * (100) ) + 1);
    }, [])

    //数字ボタンをクリックしたとき
    const handleNumberClick = (num) => {
        let newInputNumber = inputNumber*10 + num;
        if(newInputNumber >= 1 && newInputNumber <= 100){
            setInputNumber(newInputNumber);
        }
    }

    //予想の内容ボタンをクリックしたとき
    const handlequiestionContentClick = (content) => {
        if(content === "biggerThan"){
            setQuestionContent("より上ですか？");
        } else if(content === "smallerThan"){
            setQuestionContent("より下ですか？");
        } else if(content === "exact"){
            setQuestionContent("ですか？");
        }
    }

    //クリアボタンをクリックしたとき
    const handleClearClick = () => {
        setInputNumber(0);
        setQuestionContent("");
    }

    //予想ボタンをクリックしたとき
    const handleSubmitClick = () => {
        //予想の内容が入力されていない場合はすぐに返す
        if(questionContent === "") return;
        //予想した回数を1増やす
        setGuessTimes(guessTimes + 1);

        if(questionContent === "より上ですか？"){
            if(inputNumber < answer){
                setHistory([
                    ...history,
                    [inputNumber, "より上ですか？", "はい"]
                ]);
            } else {
                setHistory([
                    ...history,
                    [inputNumber, "より上ですか？", "いいえ"]
                ]);
            }
        } else if(questionContent === "より下ですか？"){
            if(inputNumber > answer){
                setHistory([
                    ...history,
                    [inputNumber, "より下ですか？", "はい"]
                ]);
            } else {
                setHistory([
                    ...history,
                    [inputNumber, "より下ですか？", "いいえ"]
                ]);
            }
        } else if(questionContent === "ですか？"){
            if(inputNumber === answer){
                setHistory([
                    ...history,
                    [inputNumber, "ですか？", "はい"]
                ]);
                //正解の場合にモーダルを開く
                setOpen(true);
            } else {
                setHistory([
                    ...history,
                    [inputNumber, "ですか？", "いいえ"]
                ]);
            }
        }
        setInputNumber(0);
        setQuestionContent("");
    }
  return (
      <div>
          <Box marginBottom="20px">
            <Typography variant="h4">React Number Guess</Typography>
            <Typography variant="h6">1~100の数字を予想しよう</Typography>
          </Box>
          <Grid container spacing={1}>
              <Grid item sm={6} xs={12}>
                <Display>{inputNumber} {questionContent}</Display>
                <Box display="flex" flexDirection="column">
                    <Box display="flex" justifyContent="center">
                        <NumberButton onClick={() => handleNumberClick(0)}>0</NumberButton>
                        <NumberButton onClick={() => handleNumberClick(1)}>1</NumberButton>
                        <NumberButton onClick={() => handleNumberClick(2)}>2</NumberButton>
                        <NumberButton onClick={() => handleNumberClick(3)}>3</NumberButton>
                        <NumberButton onClick={() => handleNumberClick(4)}>4</NumberButton>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <NumberButton onClick={() => handleNumberClick(5)}>5</NumberButton>
                        <NumberButton onClick={() => handleNumberClick(6)}>6</NumberButton>
                        <NumberButton onClick={() => handleNumberClick(7)}>7</NumberButton>
                        <NumberButton onClick={() => handleNumberClick(8)}>8</NumberButton>
                        <NumberButton onClick={() => handleNumberClick(9)}>9</NumberButton>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <LongButton onClick={() => handlequiestionContentClick("biggerThan")} backgroundColor="#f48fb1">より上ですか？</LongButton>
                        <LongButton onClick={() => handlequiestionContentClick("smallerThan")} backgroundColor="#f48fb1">より下ですか？</LongButton>
                        <LongButton onClick={() => handlequiestionContentClick("exact")} backgroundColor="#f48fb1">ですか？</LongButton>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <LongButton onClick={handleClearClick}  backgroundColor="#bdbdbd">クリア</LongButton>
                        <LongButton onClick={handleSubmitClick}  backgroundColor="#b2ff59">予想する</LongButton>
                    </Box>
                </Box>
              </Grid>
              <Grid item sm={6} xs={12}>
                <GuessHistory history={history}/>
              </Grid>
          </Grid>
          <SuccessModal open={open} guessTimes={guessTimes} answer={answer}/>
            
      </div>
  );
}