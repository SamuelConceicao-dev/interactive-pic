
const images = document.querySelectorAll(".layer-1 img")
const imagens = Array.from(images);
let interagindo = false;


for (let imagem of imagens){

    gsap.set(imagem, {
        opacity: 1
    });

    imagem.addEventListener('mouseenter', ()=>{
        interagindo = true;
        gsap.to(imagem,{
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
            overwrite: true
        });
        console.log(interagindo);
    })

    imagem.addEventListener('mouseleave', ()=>{
        interagindo = false;
        gsap.to(imagem,{
            opacity: 1,
            duration: 0.2,
            ease: "power2.out",
            overwrite: true
        });
        console.log(interagindo);
    })
}

function showRandomPic(){
    const tl = gsap.timeline();
    let randomInt = Math.floor(Math.random() * imagens.length + 1); 

    console.log("Imagem Aleatória exibida!");

    tl.to(imagens[randomInt],{
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
    })
    tl.to(imagens[randomInt],{
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
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
