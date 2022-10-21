import "./form.css";
import React from "react";


const Form = () => {
	return(
	   <div class="boite"> 
      		<form class="formulaire">
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
          			<input type="submit" name="submit" id="submit" value="login in"/>
        		</p>
      		</form>
    	</div>
	)
}

export default Form;
