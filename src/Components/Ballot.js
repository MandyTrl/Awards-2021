import React, {useEffect, useState} from 'react';
import Api from "../Api/Api"; ///Import des datas d'"index.js"
import Category from "./Category"; ///Import du composant "Category"
import {connect} from 'react-redux'; ///Import de Redux


const Ballot = (props) =>  {

  const [data, setData] = useState([]); ///V. d'état init. à un tableau vide pr setter les données d'"index.js"

  useEffect(() => {
    async function fetchData(){
      let response = await Api.getBallotData();
      setData(response.items);
    }
  fetchData();
  }, []);

console.log("DATAS REDUCER ::: ", props)

//------[ MSG D'ALERTE BOUTON "Submit" ]------//
  function voteOk() {
    alert("Success !");
  }

//------[ MAPPAGE D'UNE SECTION PAR CATEGORIE ]------//
  const mapAllCategories = data.map((category, index) => {
    return (
      <div>
          <Category
            key={index}
            category={category.title}
            datas={data}
          />
      </div>
    );
  });

  return (
		<div className= "ballot">
				{mapAllCategories}
        <div className= "SubmitButton">
            <button onClick={voteOk}>Submit</button>
        </div>
		</div>
  )
}

//------[ LECTURE DES NOMINES SELECTIONNES GRACE AU REDUCER ]------//
function mapStateToProps(state) {
	return { voteToDisplay: state.vote }
}  

export default connect(
	null,
	mapStateToProps,
 )(Ballot);
// export default Ballot;