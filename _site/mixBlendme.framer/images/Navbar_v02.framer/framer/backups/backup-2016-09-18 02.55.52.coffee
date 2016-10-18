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

artboardA = new Layer
	width: 1440
	height: 1188
	image: "images/artboardA.png"
	y: 64
	x: 1440


Care_Team_Index = new Layer
	width: 1440
	height: 966
	image: "images/Care Team Index.png"
	y: 64
	x: -1440



careteam.onClick ->
	# moves green toggle
	layerA.animate
		properties:
			x:+608
			time: 0.4
			delay: 0.01
			curve:"spring(200,15,0)"

	careteam_active.animate
		properties:
			opacity: 1
			scale: 1
			curve: "spring(400,20,0)"
			
	careteam_inactive.animate
		properties:
			opacity: 0
			
	dashboard_active.animate
		properties:
			opacity: 0
			
	Care_Team_Index.animate
		properties:
			x:0
			time: 0.4
			delay: 0.01
			curve:"spring(200,15,0)"

dashboard.onClick ->
	# moves green toggle
	layerA.animate
		properties:
			x:+480
			time: 0.4
			delay: 0.01
			curve:"spring(200,15,0)"

	artboardA.animate
		properties:
			x:0
			time: 0.4
			delay: 0.01
			curve:"spring(200,15,0)"

	careteam_active.animate
		properties:
			opacity: 0
			scale: 1
			curve: "spring(400,20,0)"
			
	careteam_inactive.animate
		properties:
			opacity: 1
			scale: 1
			curve: "spring(400,20,0)"
			
	dashboard_active.animate
		properties:
			opacity: 1
			scale: 1
			curve: "spring(400,20,0)"
			
	templates_active.animate
		properties:
			opacity: 0
			scale: 1
			curve: "spring(400,20,0)"

	templates_inactive.animate
		properties:
			opacity: 1
			scale: 1
			curve: "spring(400,20,0)"
templates.onClick ->
	# moves green toggle
	layerA.animate
		properties:
			x:+736
			time: 0.4
			delay: 0.01
			curve:"spring(200,15,0)"
			
	templates_active.animate
		properties:
			opacity: 1
			scale: 1
			curve: "spring(400,20,0)"
			
	templates_inactive.animate
		properties:
			opacity: 0
			scale: 1
			curve: "spring(400,20,0)"
			
	dashboard_active.animate
		properties:
			opacity: 0
			scale: 1
			curve: "spring(400,20,0)"

layerB = new Layer
	x: 736
	width: 128
	height: 64
	backgroundColor: "rgba(123,123,123,0)"






