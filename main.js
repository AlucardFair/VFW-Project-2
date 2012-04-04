/*
Zachery Hernandez
VFW 1203
Project 2
4/5/2012
Body Health & Fitness
https://github.com/AlucardFair/VFW-Project-2
*/
// Wait until DOM is ready //
window.addEventListener("DOMContentLoaded", function() {

	// getElementById function //
	function $(x) {
		var elementID = document.getElementById(x);
		return elementID;
	};
	
	// Create Select Element with Options//
	function makeWorkoutStyle() {
		var formTag = document.getElementsByTagName('form'),
			selectList = $('select'),
			makeSelect = document.createElement('select');
			makeSelect.setAttribute("id", "styles");
		for(var i=0, j=workoutTypes.length; i<j; i++) {
			var makeOption = document.createElement('option');
			var optTxt = workoutTypes[i];
			makeOption.setAttribute("value", optTxt);
			makeOption.innerHTML = optTxt;
			makeSelect.appendChild(makeOption);
		}
		selectList.appendChild(makeSelect);
	};
	
	// Gather Form Data & Place it in an Object & Object is an Array for Form Label and Value //
	function saveData() {
		var id = Math.floor(Math.random()*10001);
		var item 				= {};
			item.training 		= ["Training Style: ", $('styles').value];
			item.wname			= ["Workout Name: ", $('wname').value];
			//item.favorite		= ["Favorite: ", favoriteValue];
			item.howlong		= ["How Long: ", $('howlong').value];
			//item.timeofday		= ["Preferred Time: ", timeValue];
			item.comments		= ["Self-Motivation: ", $('comments').value];
			
		// Save Data into Local Storage with JSON.stringify //
		localStorage.setItem(id, JSON.stringify(item));
		alert("Workout Saved!");
	};
	
	// Variable defaults //
	var workoutTypes = ["*Choose A Style*", "Cardio", "Strength", "Tone "];
	
	/*
	// Set Link & Submit Click Events //
	var displayLink = $('displayData');
	displayLink.addEventListener("click", getData);
	var clearButton = $('clearData');
	clearButton.addEventListener("click", clearData);
	var submitData = $('saveData');
	submitData.addEventListener("click", saveData);
	*/
	
	// Call Functions //
	makeWorkoutStyle();

});
// Testing Function to Run a Confirm on Delete *Not Complete and Not Apart of Code* //
/*
function clearData() {
	var clear = confirm("Are you sure you want to remove the data?");
	if (clear) {
		alert("Data has been cleared.");
		return true;
} else {
		alert("Data was not cleared.");
		return false;
	}
};
*/