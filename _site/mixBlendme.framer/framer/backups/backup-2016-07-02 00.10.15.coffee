background = new BackgroundLayer
	image: "images/open_profile_fr_31@3x.png"

white = new BackgroundLayer
	superLayer: background
	style: mixBlendMode : "screen"

white.onTouchMove (e)->
	touchX = if Utils.isMobile() then Events.touchEvent(event).clientX else event.offsetX
	touchY = if Utils.isMobile() then Events.touchEvent(event).clientY else event.offsetY
	
	hole = new Layer
		midX: touchX, midY: touchY
		width: Screen.width / 10
		height: Screen.width / 10
		backgroundColor: "black"
		borderRadius: "100%"
		opacity: 0
		superLayer: white

	hole.states.add
		clear: opacity: .5
	
	hole.states.switch("clear", time: .1)