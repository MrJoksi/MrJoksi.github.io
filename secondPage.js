

var testiteksti;
var teksti = "Tervetuloa tutustumaan verkkosivuuni! Olen tietotekniikan insinööriopiskelija Vaasan ammattikorkeakoulussa, ja tämä sivu toimii ikään kuin virtuaalisena näyteikkunana osaamiseeni."
var body = document.getElementById("body")

function createBackground() {
    document.body.style.backgroundImage = "url('sivutiedostot/testi2.png')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundAttachment = "fixed";
}

function createText() {
    var content = document.createElement("div");
    content.setAttribute("id","content");

    testiteksti = document.createElement("p");
    content.appendChild(testiteksti);
    
    document.body.appendChild(content);


    content.style.width = "80%";
    content.style.margin = "0 auto"
    content.style.left = "10%";
    content.style.top = "0"
    content.style.height = "30%";1
    content.style.position = "realtive";
    content.style.right = "10%";
    content.style.textAlign = "center";
    content.style.display = "flex";
    content.style.fontSize = "large";
    showLetters(teksti);


} 

function slideImage() {
    var container = document.createElement("div");
    container.setAttribute("id", "container");

    var GITlink = document.createElement("a");
    GITlink.setAttribute("href", "https://github.com/MrJoksi");
    
    var GITkuva = document.createElement("img");
    GITkuva.setAttribute("src", "sivutiedostot/gitti.png");
    GITkuva.setAttribute("id", "GITkuva");

    var CVlink = document.createElement("a");
    CVlink.setAttribute("href", "https://sway.office.com/dG3vmnZXucFC57KF?ref=Link");

    var CVkuva = document.createElement("img");
    CVkuva.setAttribute("src", "sivutiedostot/ansioluettelokuva.png");
    CVkuva.setAttribute("id", "CVkuva");

    var LNlink = document.createElement("a");
    LNlink.setAttribute("href", "https://www.linkedin.com/in/elmeri-sievänen-12042a2a6");

    var LNkuva = document.createElement("img");
    LNkuva.setAttribute("src", "sivutiedostot/linkedin.png");
    LNkuva.setAttribute("id", "LNkuva");

    GITlink.appendChild(GITkuva);
    CVlink.appendChild(CVkuva);
    LNlink.appendChild(LNkuva);

    container.appendChild(GITlink);
    container.appendChild(CVlink);
    container.appendChild(LNlink);
    document.body.appendChild(container);

    container.style.position = "absolute";
    container.style.height = "50%";
    container.style.top = "15%";
    container.style.width = "80%";
    container.style.left = "10%";
    container.style.right = "10%";

    var kuvaKaikki = [GITkuva, CVkuva, LNkuva];

    kuvaKaikki.forEach(function(kuva) {
        kuva.style.width = "15%";
        kuva.style.position = "absolute";
        kuva.style.borderRadius = "40px";
        kuva.style.transition = "opacity 0.5s ease-in-out, filter 0.5s ease-in-out";
        kuva.style.opacity = "0";
        kuva.addEventListener("mouseover", function() {
            kuva.style.filter = "brightness(70%)";
        });
        kuva.addEventListener("mouseout", function() {
            kuva.style.filter = "brightness(100%)";
        });
    });

    GITkuva.style.left = "5%";
    GITkuva.style.top = "50%";
    GITkuva.style.transform = "translateY(-50%)";

    CVkuva.style.left = "50%";
    CVkuva.style.top = "50%";
    CVkuva.style.transform = "translate(-50%, -50%)";

    LNkuva.style.right = "5%";
    LNkuva.style.top = "50%";
    LNkuva.style.transform = "translateY(-50%)";

    setTimeout(function() {
        GITkuva.style.opacity = "1";
    }, 200);

    setTimeout(function() {
        CVkuva.style.opacity = "1";
    }, 400);

    setTimeout(function() {
        LNkuva.style.opacity = "1";
    }, 600);
}





function showLetters(string) {
    var index = 0;
    
    var interval = setInterval(function() {
        // Tarkistetaan, että emme ole saavuttaneet merkkijonon loppua
        if (index < string.length) {
            // Lisää seuraava kirjain p-elementtiin
            testiteksti.textContent += string.charAt(index);
            index++;
        } else {
            // Lopetetaan setInterval kun kaikki kirjaimet on käsitelty
            clearInterval(interval);
            slideImage();

        }
    }, 50); // Aikaväli millisekunteina (tässä 1000 ms = 1 sekunti)
}

// Käytä funktiota ja anna merkkijono parametrina



