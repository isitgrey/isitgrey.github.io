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
			
		

dashboard.onClick ->
	# moves green toggle
	layerA.animate
		properties:
			x:+480
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

Activity = new Layer
	width: 1440
	height: 1124
	image: "images/Activity.png"
	y: 64

Activity.states.add
	stateA:
		scale: 0.08
		y: -453
		height: 1124
		x: -182


	






			












