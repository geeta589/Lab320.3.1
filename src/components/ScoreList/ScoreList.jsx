
function ScoreList ({score,k}){
     console.log(score);
    return(
        <div k={k}>
            
            <h2>date:{score.date}</h2>
            <h2>Score:{score.score}</h2>
                       
            <hr/>
        </div>
    )
}


export default ScoreList