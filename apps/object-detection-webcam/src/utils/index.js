
const colors =[
    "greeen",
    "black",
    "blue", 
    "red",
    "yellow",
    "brown"
]
const drawRectangle = (detections, canvas)=>{
        detections.forEach(detection=>{
            const [x,y, width, height] = detection?.bbox
            const objectdetected = detection?.class
            // we have the coodinates now let's draw the canvas
            canvas.strokeStyle = '#0095F6'
            canvas.font = '20px Consolas';
            // Draw rectangles and text
            const color = colors[1]
            canvas.beginPath();   
            canvas.fillStyle = color
            canvas.fillRect(x, y, Math.floor(width), 25)
            canvas.fillStyle = "white"
            canvas.fillText(objectdetected, x+20, y+ 20);
            canvas.lineWidth = "2";
            canvas.rect(x, y, width, height); 
            canvas.stroke();
        })
}

const functions ={
    drawRectangle: drawRectangle
}
export default functions