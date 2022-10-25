import React from 'react';

const SubmitButton = () => {
    function voteOk() {
        alert("Success !");
    }

    return (
        <div className= "SubmitButton">
            <button onClick={voteOk}>Submit</button>
        </div>
  )
}

export default SubmitButton;