# Import file "Navbar"
sketch = Framer.Importer.load("imported/Navbar@1x")
# Use desktop cursor
document.body.style.cursor = "auto"

Framer.Extras.TouchEmulator.disable()
# Import file "Navbar"

bg = new BackgroundLayer
	backgroundColor: "rgba(237,237,237,1)"


# utils allows you to target sketch layers directly
Utils.globalLayers(sketch)

careteam_active.opacity = 0
templates_active.opacity = 0
library_active.opacity = 0
patients_active.opacity = 0
workflow_active.opacity = 0



layerA = new Layer
	width: 128
	height: 4
	x: 480
	y: 60
	backgroundColor: "rgba(255,8,114,1)"

careteam_active.on Events.Click, ->
	careteam_active.animate
		properties:
			scale: 0.75



