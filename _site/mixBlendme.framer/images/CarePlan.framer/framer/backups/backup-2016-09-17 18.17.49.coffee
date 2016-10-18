Framer.Extras.TouchEmulator.disable()

# Use desktop cursor
document.body.style.cursor = "auto"

scroll = new ScrollComponent
	size: Screen
	mouseWheelEnabled: true




ViewController = require 'ViewController'

Views = new ViewController
    initialView: sketch.Activity
    sketch.Activity.onClick -> Views.fadeIn(sketch.Care_Team_Index)
    sketch.Care_Team_Index.onClick -> Views.fadeIn(sketch.Activity)




