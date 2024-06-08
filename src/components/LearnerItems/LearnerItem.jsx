import propsType from 'prop-types'
import { Learners } from "../../data/Learners";
import ScoreListItem from '../ScoreListItem/ScoreListItem';
// import propTypes from 'prop-types'

function LearnerItem({learner,k}){
    return(
        <div k={k}>
            
            <h2>Name:{learner.name}</h2>
            <h2>Bio:{learner.bio}</h2>
            {learner.scores.map((score,i) =>
                <ScoreListItem score = {score} key ={i} />
             )}
            
            <hr/>
        </div>
    )
}

LearnerItem.propTypes ={
    learner : propsType.object
}

export default LearnerItem