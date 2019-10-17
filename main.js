
function changeImage(id, link) {
document.getElementById(id).src = link
}

function changeFace(face) {
changeImage("qt", links[face])
}

links = {normal: "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
changeFace("normal")
