# Import file "Navbar"
sketch = Framer.Importer.load("imported/Navbar@1x")
# Use desktop cursor
document.body.style.cursor = "auto"

Framer.Extras.TouchEmulator.disable()


sketch.careteam_active.opacity = 0
sketch.templates_active.opacity = 0
sketch.library_active.opacity = 0
sketch.patients_active.opacity = 0
sketch.workflow_active.opacity = 0



layerA = new Layer
	width: 128
	height: 4
	x: 480
	y: 60
	backgroundColor: "rgba(255,8,114,1)"

sketch.careteam.onClick ->
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

sketch.dashboard.onClick ->
	# moves green toggle
	layerA.animate
		properties:
			x:+480
			time: 0.4
			delay: 0.01
			curve:"spring(200,15,0)"
			
	sketch.careteam_active.animate
		properties:
			opacity: 0
			scale: 1
			curve: "spring(400,20,0)"
			
	sketch.careteam_inactive.animate
		properties:
			opacity: 1
			scale: 1
			curve: "spring(400,20,0)"
			
	sketch.dashboard_active.animate
		properties:
			opacity: 1
			scale: 1
			curve: "spring(400,20,0)"
















