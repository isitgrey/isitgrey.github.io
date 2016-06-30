# Import file "BeEdu.framer_v01"
psd = Framer.Importer.load("imported/BeEdu.framer_v01@1x")


Utils.globalLayers(psd)

Framer.Defaults
Scroll = ScrollComponent.wrap(content)

Scroll.scrollHorizontal = false
Comment_Pop_up_2.opacity = 0
Comment_Pop_up_2.scale = 0
Comment_Pop_up_1.opacity = 0
Comment_Pop_up_3.opacity = 0
Comment_Pop_up_4.opacity = 0
Comment_Pop_up_4.scale = 0

Button_Comment_2.on Events.Click, ->
	Button_Comment_2.animate
		properties:
			scale: 1.5
			curve: "spring"
	Comment_Pop_up_2.animate
		properties:
			scale: 1
			opacity: 1
		time: 0.6

Button_Comment_4.on Events.Click, ->
	Button_Comment_4.animate
		properties:
			scale: 1.5
			curve: "spring"
	Comment_Pop_up_4.animate
		properties:
			scale: 1
			opacity: 1
		time: 0.6