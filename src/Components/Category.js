import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux'; ///Import de Redux

const Category = (props) => {
const [nomineeSelected, setNomineeSelected] = useState([]);

//------[ EVENEMENT BOUTON "Vote for" ]------//
//Récupère les données envoyées via l'event "onClick"
//Envoie les données seulement si la V. d'état "nomineeSelected" est vide et si l'élément sélectionné est différent de celui de la V. d'état
function voteOk(element, categorie) {
	if (nomineeSelected.length === 0 || nomineeSelected.title !== element.title){
		// alert("Nominee selected !");
		setNomineeSelected({
			title : element.title, 
			category : categorie});
	} else {
		setNomineeSelected([]);
	}
}

//------[ ECOUTE DE LA V. D'ETAT "nomineeSelected" ]------//
//Envoi des nominés selectionnés au reducer via les props si la V. d'état "nomineeSelected" est vide
useEffect( ()=>{
	const sendReducer = ()=> {
		if(nomineeSelected.length !== 0)props.sendData(nomineeSelected);
	}
	sendReducer();
}, [nomineeSelected])
console.log(nomineeSelected);


// console.log("Voici le nominé choisi: ", nomineeSelected.title, ", Pour la catégorie: ", nomineeSelected.category)

if (props.datas.length > 0){
//------[ EXPLOITATIONS DES PROPS ]------//
const nomineeS = props.datas.find( (cat)=> cat.title === props.category )

// console.log("categorie :: ", nomineeS) ///Datas

//------[ MAPPAGE D'UNE CARD PAR NOMINE ]------//
const nominee = nomineeS.items.map( (nom)=> {
	return (
		<div className= "nominee" key={nom.id}>
         <p>{nom.title}</p>
         <img src= {nom.photoUrL} 
				class= "movie" 
				alt= "nominee award movie" />
         <div className= "selectButton">
         	<button onClick={ ()=> {voteOk(nom, props.category)} }>Vote</button>
				{/* <img src= "Images/check.png" 
				class= "icon" 
				alt= "check vote" 
				onClick={voteOk} /> */}
      	</div>
      </div>
	);
})	 	 
	return (
		<div>
			<div class= "name_category">
				<h2>{props.category}</h2>
			</div>
			<div className= "category">
				{nominee}
			</div>
		</div>
	)
} else {
	return (
		<div>Loading ..</div>
	)
}
}

//------[ ENVOI DES NOMINES SELECTIONNES DANS LE REDUCER ]------//
function mapDispatchToProps(dispatch) {
	return {
	  sendData: function(nominee) {
		  dispatch( {type: "addVote", voteSelected: nominee} )
	  }
	}
   }   

export default connect(
	null,
	mapDispatchToProps,
	// mapStateToProps,
 )(Category);