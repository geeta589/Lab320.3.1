function ScoreListItem({score,k}){

    return(
        <div k={k}>
            
        <h2>date:{score.date}</h2>
        <h2>Score:{score.score}</h2>
                   
        <hr/>
    </div>
    )
}
export default ScoreListItem;