let defaultGrid = 64
let defaultColor = "black"

const color = document.getElementById("color-button")
const eraser = document.getElementById("eraser-button")
const clear = document.getElementById("clear-button")
const gridSize = document.getElementById("grid-size")
const grid = document.getElementById("grid")
const gridVal = document.getElementById("grid-size-label")

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)


color.oninput = e => setColor(e.target.value)
eraser.onclick = () => setColor("whitesmoke")
clear.onclick = () => clearGrid()
gridSize.onmousemove = e => setSize(e.target.value)
gridSize.onchange = e => setGridSize(e.target.value)

const clearGrid = () => {
    grid.innerHTML = ""
    setGridSize(defaultGrid)
}

const setSize = (size) => {
 gridVal.innerHTML = `${size} x ${size}`
 
 
}

const setColor = (color) => {
    defaultColor = color
}

const changeColor = (e) => {
    if (e.type === 'mouseover' && !mouseDown ) {
        return;
    } else {
        e.target.style.backgroundColor = defaultColor
    }
    
}

const setGridSize = (size) => {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
    
    for (let i= 0; i < size *size; i++) {
    let gridSquare = document.createElement("div");
    gridSquare.classList.add("square");
    gridSquare.addEventListener("mouseover", changeColor)
    gridSquare.addEventListener("mousedown", changeColor)
    grid.appendChild(gridSquare)
    }
    
}

window.onload = () => {
    setGridSize(defaultGrid)
}