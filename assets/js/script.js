// player object
const player = {
	character : $("#player"),
	playerPos : 0
}

// ai object
const ai = {
	character : $("#ai"),
	aiPos : 0
}

let playerPosition = 0;
let aiPosition = 0;

// move the player function
$("body").keydown(function(e) {
	if(e.which == 32) {
		$("#player").animate({
			'left' :  (playerPosition+=100) + 'px'
		})
		player.playerPos = playerPosition
		result()
	}
})

// player.character.click(function(e) {
// 	$(this).animate({
// 		'left' :  (playerPosition+=100) + 'px'
// 	})
		
// 	console.log('this is the current value of player position: ' + playerPosition)
// 	player.playerPos = playerPosition

// 	console.log(player)
// 	event.preventDefault();
// 	result()
// })


// Easy
$("#1").click(function() {

	$("#2").addClass('d-none')
	$("#3").addClass('d-none')
	
	$("#start").addClass('d-block')

	$("#ai").addClass('d-block')
	$("#player").addClass('d-block')

	const easy = () => {

	if ( ai.aiPos < 1000 ){
		ai.character.animate({
			"left": (aiPosition += 100) + "px"
		})

	} else {
		return true
	}

	ai.aiPos = aiPosition;
	result()

	if ( ai.aiPos >= 1000 || player.playerPos >= 1000 ) {
		return true
	} else {
		setInterval(easy, 1000)
	}
}
	$("#start").click(function() {
		easy()
	})
})


// Medium
$("#2").click(function() {
	$("#1").addClass('d-none')
	$("#3").addClass('d-none')
	
	$("#start").addClass('d-block')

	$("#ai").addClass('d-block')
	$("#player").addClass('d-block')

	const medium = () => {
	if (ai.aiPos < 1000) {
		ai.character.animate({
			"left": (aiPosition+=100) + "px"
		})
	} else {
		return true
	}

	ai.aiPos = aiPosition;
	result()
	if(ai.aiPos >= 1000 || player.playerPos >= 1000){
		return true
	}else {
		setInterval(medium, 400)
	}
}
	$("#start").click(function() {
		medium()
	})
})

// Hard
$("#3").click(function() {
	$("#1").addClass('d-none')
	$("#2").addClass('d-none')
	
	$("#start").addClass('d-block')

	$("#ai").addClass('d-block')
	$("#player").addClass('d-block')
	
	const hard = () => {
		if(ai.aiPos < 1000){
			ai.character.animate({
				"left": (aiPosition+=100) + "px"
			})
		}else{
			return true
		}

		ai.aiPos = aiPosition;
		result()
		if(ai.aiPos >= 1000 || player.playerPos >= 1000){
		return true
	} else {
		setInterval(hard, 300)
	}
}
	$("#start").click(function() {
		hard()
	})
})

const result = () => {
	if(player.playerPos == 1000) {
		if($("#inputBox").val() !== "") {
			alert($("#inputBox").val() + ' won!')
			return true
		} 
		alert('You won!')
		return true
	}

	if(ai.aiPos == 1000) {
		alert("You lost!")
		return true
	}
}






