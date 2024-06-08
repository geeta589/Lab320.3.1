import propsType from 'prop-types'
import LearnerItem from "../LearnerItems/LearnerItem";
import { Learners } from '../../data/Learners';

function LearnerList ({item}){
    const learnerjsx = Learners.map(item =>
        <LearnerItem learner={item} key ={item.name}/>
    )
   console.log(learnerjsx);
    return(
        <div>
            {learnerjsx}  
        </div>
    )
}

LearnerList.propTypes ={
    Learners : propsType.array
}
export default LearnerList

