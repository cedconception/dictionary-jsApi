function search(){
	let word = document.getElementById("text").value; 
	let resulat = document.getElementById("resultat");
	
	if (word.length != 0){
		fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+word).then(response => 
		response.json().then(data => {
			try{
				for(let words of data){
					let definition = words.meanings[0].definitions[0].definition
					resulat.innerHTML = "<p class='res'><span>Definition</span><br>"+definition+"</p>";
				}
			}catch(error){
				resulat.innerHTML= "<p class='res' style='color:red '>Any definition found, please check the orthograph</p>"
			}}))
	}else {
	resulat.innerHTML= "<p class='res'>Please fill in this fied</p>"
	}
}