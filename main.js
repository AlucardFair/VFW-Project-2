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
	
	// //
	function getCheckboxValue() {
		if ($('favorite').checked) {
			favoriteValue = "Yes";
		}else{
			favoriteValue = "No";
		}
	};
	
	// Find Value of selected radio button //
	function getSelectedRadio() {
		var radios = document.forms[0].timeofday;
		for (i=0, j=radios.length; i<j; i++) {
			if (radios[i].checked) {
				timeValue = radios[i].value;
			}
		}
	};
	
	// Turn on and off form by use of case during getData() //
	function toggle(x) {
		switch(x) {
			case "on":
				$('workoutForm').style.display = "none";
				$('showData').style.display = "none";
				$('clearData').style.display = "inline";
				$('startNew').style.display = "inline";
				$('saveData').style.display = "none";
				break;
			case "off":
				$('workoutForm').style.display = "block";
				$('showData').style.display = "inline";
				$('clearData').style.display = "inline";
				$('startNew').style.display = "none";
				$('saveData').style.display = "inline";
				$('items').style.display = "none";
				break;
			default:
				return false;
		}
	};
	
	// Gather Form Data & Place it in an Object & Object is an Array for Form Label and Value //
	function saveData() {
		// Set Random Key for Stored Data //
		var id = Math.floor(Math.random()*10001);
		// Call Functions //
		getCheckboxValue();
		getSelectedRadio();
		var item 				= {};
			item.training 		= ["Training Style: ", $('styles').value];
			item.wname			= ["Workout Name: ", $('wname').value];
			item.favorite		= ["Favorite: ", favoriteValue];
			item.howlong		= ["How Long: ", $('howlong').value];
			item.timeofday		= ["Preferred Time: ", timeValue];
			item.comments		= ["Self-Motivation: ", $('comments').value];
			
		// Save Data into Local Storage with JSON.stringify //
		localStorage.setItem(id, JSON.stringify(item));
		alert("Workout Saved!");
	};
	
	// Write Data from Local Storage to Browser //
	function getData() {
		// Call Function //
		toggle("on");
		var makeDiv = document.createElement('div');
		makeDiv.setAttribute("id", "items");
		var makeList = document.createElement('ul');
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		// Set 'items' display //
		$('items').style.display = "block";
		for(var i=0, j=localStorage.length; i<j; i++) {
			var makeLi = document.createElement('li');
			makeList.appendChild(makeLi);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			// Convert string from local storage into value by JSON.parse //
			var obj = JSON.parse(value);
			var makeSubList = document.createElement('ul');
			makeLi.appendChild(makeSubList);
			for (var x in obj) {
				var makeSubLi = document.createElement('li');
				makeSubList.appendChild(makeSubLi);
				var optSubTxt = obj[x][0]+" "+obj[x][1];
				makeSubLi.innerHTML = optSubTxt;
			}
		}
	};
	
	function clearData() {
		if (localStorage.length === 0) {
			alert("There is nothing to delete.");
		}else{
			var clear = confirm("Are you sure you want to delete your workouts?");
			if (clear) {
				localStorage.clear();
				alert("All workouts have been deleted.");
				window.location.reload();
				return false;
			}else{
				alert("Your workouts have not been deleted.");
			}
		}
	};
	
	// Variable defaults //
	var workoutTypes = ["*Choose A Style*", "Cardio", "Strength", "Tone "],
		favoriteValue = "No",
		timeValue,
		confirmClear
	;
	
	// Set Link & Submit Click Events //
	var displayLink = $('showData');
	displayLink.addEventListener("click", getData);
	var clearButton = $('clearData');
	clearButton.addEventListener("click", clearData);
	var submitData = $('saveData');
	submitData.addEventListener("click", saveData);
	
	// Call Functions //
	makeWorkoutStyle();

});