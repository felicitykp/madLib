

function setupMadLib(){
	
	alert("Let's make a Mad Lib! Anwser the questions and I'll tell you a story");

	var verb = prompt("Pick a Verb ending in ing");
	var adjective = prompt("Pick an Adjective");
	var adverb = prompt ("Pick an Adverb");
	var familyMember = prompt("Pick a Family Member (ex. Mom, Dad");
	var number = prompt("Pick a Number");
	var verb2 = prompt("Pick a Verb in the Past test");
	var noun = prompt("Pick a Noun");
	var noun2 = prompt("Pick another Noun");
	var adjective2 = prompt("Pick an Adjective");
	var noun3 = prompt("Pick a Noun");
	var noun4 = prompt("Pick another Noun");
	var verb3 = prompt("Pick a Verb");
	var verb4 = prompt("Pick a Verb ending in ing");
	var verb5 = prompt("Pick another normal Verb");
	var emotion = prompt("Pick an Emotion");
	var name = prompt("Pick a Name");

	alert("Your Mad Lib is now ready to read below");

	var story = "If you are, <span class='c'>" + verb + "</span> this, it means I am <span class='c'>" + adjective + 
		"</span>. I am sure you are all <span class='c'>" + adverb + "</span> grieved. Especially my <span class='c'>" 
		+ familyMember + "</span> Gloria and our <span class='c'>" + number + "</span> children. In my life, I <span class='c'>"
		+ verb2 + "</span> for many popular <span class='c'>" + noun + "</span> shows and <span class='c'>" + noun2 + 
		 "</span> movies. I led a <span class ='c'>" + adjective2 + "</span> life, filled with <span class='c'>" + noun3 + 
		 "</span> and even better memories. I hope to remembered as a(n) <span class='c'>" + noun4 + 
		 "</span> who loved to make people <span class='c'>" + verb3 + "</span>. Thank you all for " + verb4 + 
		 "</span>. I promise not to <span class='c'>" + verb5 + "</span> you while you sleep. <span class='c'>" + emotion + 
		 "</span> <br><br> forever, <span class='c'>" + name + "</span>.";

	document.getElementById("finalMadLib").innerHTML = story;

}




