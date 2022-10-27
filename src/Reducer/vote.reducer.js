export default function vote (vote = [], action) {
    if(action.type === "addVote") {
      let voteCopy = [...vote, action.voteSelected];
      console.log(voteCopy)
      return voteCopy;
    } else {
      return vote;
    }  
   }
