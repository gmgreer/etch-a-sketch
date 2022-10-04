let defaultGrid = 64;
let defaultColor = "black"

const color = document.getElementById("color-button")
const eraser = document.getElementById("eraser-button")
const clear = document.getElementById("clear-button")
const gridSize = document.getElementById("grid-size")
const grid = document.getElementById("grid")

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

const changeColor = (e) => {
    if (e.type === 'mouseover' & !mouseDown ) return;
    e.target.style.backgroundColor = "black"
}

const setGridSize = (size) => {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i= 0; i < size *size; i++) {
        let gridElement = document.createElement("div");
    gridElement.classList.add("square");
    gridElement.addEventListener("mouseover", changeColor)
    gridElement.addEventListener("mousedown", changeColor)
    grid.appendChild(gridElement)
    }
    
}

window.onload = () => {
    setGridSize(defaultGrid)
}