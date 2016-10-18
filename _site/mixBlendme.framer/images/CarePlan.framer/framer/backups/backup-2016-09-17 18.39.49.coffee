# Import file "Care Plan" (sizes and positions are scaled 1:2)
sketch = Framer.Importer.load("imported/Care Plan@2x")

ViewController = require 'ViewController'

Views = new ViewController
    width: Screen.width
    initialView: sketch.Activity
    sketch.Activity.onClick -> Views.fadeIn(sketch.Care_Team_Index)
    sketch.Care_Team_Index.onClick -> Views.fadeIn(sketch.Activity)




