var modal = document.getElementById('myModal');
var container = document.getElementById("logos");
var logos;
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

    var width = 100;
    var actualTime = time;
    var id = setInterval(frame, 10 * time);

    e.innerHTML = time + " Segundos";

    function frame() {
        if (width <= 0) {
            e.innerHTML = "";
            clearInterval(id);
            guessImage(document.getElementsByClassName("bigcard")[0].src);
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
    img.src = "./logos/" + shuffle(logos)[0] + ".png";
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