const data = (name, mail) =>{
	fetch(`http://localhost:5000/identify/{name}/{mail}/`)
		.then( (unit) => {
			return unit.json();
		})
};

export default data;
