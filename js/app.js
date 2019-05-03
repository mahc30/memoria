var modal = document.getElementById('myModal');
var container = document.getElementById("logos");
var logos;
var selectedLogo;
// When the user clicks on the button, open the modal
function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal()
    }
}

function imgOnClick() {
    alert("Fui Oprimido");
}




function move(time) {
    var progress = document.getElementById("LoadingBar");
    var e = document.getElementById("Progress");
    var src = document.getElementsByClassName("bigcard")[0].src;
    var width = 100;
    var actualTime = time;
    var id = setInterval(frame, 10 * time);

    e.innerHTML = time + " Segundos";

    function frame() {
        if (width <= 0) {
            e.innerHTML = "";
            clearInterval(id);
            guessImage(src);
        } else {
            width--;
            actualTime -= (10 * time) / 1000;
            e.style.width = width + '%';
            e.innerHTML = Math.floor(actualTime) + " Segundos";
        }
    }
}

function clearContainer() {
    while (container.firstElementChild) {
        container.firstElementChild.remove();
    }
}

function rememberImage(time) {
    clearContainer();
    var img = document.createElement("img");
    img.setAttribute("class", "bigcard");
    img.addEventListener("click", () => move(time));
    selectedLogo = shuffle(logos)[0];
    img.src = "./logos/" + selectedLogo + ".png";
    container.appendChild(img);
    var progrss = document.createElement("div");
    var elem = document.createElement("div");
    progrss.setAttribute("id", "LoadingBar");
    elem.setAttribute("id", "Progress")
    elem.innerHTML = time + " Segundos";
    progrss.appendChild(elem);
    container.appendChild(progrss);
}

function guessImage(src) {
    clearContainer();
    let asignado = false;
    let child = new Array(16);
    let tempLogo = logos;
    let actualLogo = "";
    tempLogo.splice(tempLogo.indexOf(selectedLogo), 1);
    for (let index = 0; index < child.length; index++) {
        child[index] = document.createElement("img");
        !asignado ? child[index].addEventListener("click", () => validClick()) : child[index].addEventListener("click", () => wrongClick());
        if (!asignado) {
            child[index].src = src;
            asignado = true;
        } else {
            actualLogo = shuffle(tempLogo)[0]
            child[index].src = "./logos/" + actualLogo + ".png";
        }
        console.log("./logos/" + actualLogo + ".png")
    }
    shuffle(child);
    child.forEach(element => {
        element.setAttribute("class", "card");
        container.appendChild(element);
    });
}

function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;

                logos = allText.split("\n");
                for (let index = 0; index < logos.length; index++) {
                    logos[index] = logos[index].replace("\r", "");

                }
            }
        }
    }
    rawFile.send(null);
}

readTextFile("../logos/logos.txt")

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

rememberImage(10);

function validClick() {
    alert("yay");
}

function wrongClick() {
    alert("Upss");
}