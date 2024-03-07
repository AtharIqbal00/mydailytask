document.querySelector(".child").addEventListener('click', (e) => {
    e.stopPropagation()
    alert('child is clicked')
})
document.querySelector(".container").addEventListener('click', (e) => {
    e.stopPropagation()
    alert('container is clicked')
})
document.querySelector(".childcontainer").addEventListener('click', (e) => {
    e.stopPropagation()
    alert('childcontainer is clicked')
})

setInterval(() => {
    document.querySelector(".childcontainer").style.backgroundcolor = "red"
}, 1000)