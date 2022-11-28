import "./form.css";
import axios from "axios"
import React, { useState, useEffect, Fragment } from "react";

const Form = () => {
	const [ user, userSet ] = useState([]);
	useEffect(() => {
		axios("http://127.0.0.1:5000/identify/adama/startlingadama@gmail.com/",{
			method: "GET",
			mode: "no-cors"
		}).then( (res) => res.json()
		).then( 
			function(data){
				console.log(data);
				userSet(data);
			}
		).catch( 
			function(err){ 
				console.log(err);
			}
		);
	}, []);
	return(
	 <Fragment>
	   <div class="boite"> 
      		<form class="formulaire" onSubmit="Onsubmit()">
        		<h1 class="titre">Anima login</h1>
        		<p>
          			<label for="mail" className="lab">Email</label> <br/>
          			<input type="mail" name="mail" id="mail" placeholder="startlingadama@gmail.com"/>
        		</p>
			
        		<p>
          			<label for="password" className="lab">Password</label><br/>
          			<input type="password" name="password" id="password" placeholder="*******"/>
        		</p>

        		<p>
          			<input type="checkbox" name="rem" id="rem"/>
          			<label for="rem">Save on your browser</label>   
        		</p>

        		<p>
          			<input type="submit" name="submit" id="submit" value="login"/>
        		</p>
      		</form>
    	   </div>
	   <p>{ user.map( element => {
	   	return <p>`{element}`</p>
	   })}</p>
	 </Fragment>
	)
}

function Onsubmit() {
	window.open("../../success.html");
	var success = document.getElementById("success");
	var titreSuccess = document.createElement("h1");
	titreSuccess.id = "success-titre";
	titreSuccess.innerText="Bravo Vous êtes dans la base de donnée";
	success.appendChild(titreSuccess);

}

export default Form;
