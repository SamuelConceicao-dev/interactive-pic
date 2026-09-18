
const cards = document.querySelectorAll(".flip-card");

const cardsInner = document.querySelectorAll(".flip-inner");
const cardsAuto = Array.from(cardsInner);

cards.forEach(card => {

    const inner = card.querySelector(".flip-inner");

    card.addEventListener("mouseenter", () => {

        gsap.to(inner, {
            rotationY: 180,
            duration: 1,
            ease: "power2.inOut"
        });

    });

    card.addEventListener("mouseleave", () => {

        gsap.to(inner, {
            rotationY: 0,
            duration: 1,
            delay: 0.5,
            ease: "power2.inOut"
        });

    });

});

function showRandomPic(){

    const tl = gsap.timeline();
    let randomInt = Math.floor(Math.random() * cardsAuto.length); 

    console.log("Imagem Aleatória exibida!");

    tl.to(cardsAuto[randomInt],{
        rotationY: 180,
        duration: 1,
        ease: "power2.inOut"
    })
    
    tl.to(cardsAuto[randomInt],{
        rotationY: 0,
        duration: 1,
        ease: "power2.inOut"
    }, "+3")
}

function executarAleatoriamente(funcao, minimo, maximo) {
    const tempo = Math.random() * (maximo - minimo) + minimo;

        setTimeout(() => {
            funcao();

            executarAleatoriamente(funcao, minimo, maximo);
        }, tempo);
}

executarAleatoriamente(showRandomPic, 1000, 5000);
