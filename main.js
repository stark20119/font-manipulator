function setup () {
    video=createCapture(VIDEO)
    video.size(560,590)
    
    
    canvas=createCanvas(550,500)
    canvas.position(600,150)
    posenet=ml5.poseNet (video,modelLoaded) 
    posenet.on('pose',gotposes)
    }
    
    function modelLoaded() {
    console.log("posenet is loaded")
    
    }
    
    function gotposes (results) {
        if (results.length>0) {
            console.log(results)
            
        }
    
    
    }
    
    function draw(){
    background("yellow")
    
    
    }
    
    
    