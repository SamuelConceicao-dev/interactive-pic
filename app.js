console.log("Script conectado");
console.log(gsap);

const img1 = document.querySelector("#imagem-1");
const img2 = document.querySelector("#imagem-2");
const images = document.querySelectorAll(".layer-1 img")
const imagens = Array.from(images);

console.log(imagens)

for (let imagem of imagens){

    gsap.set(imagem, {
        opacity: 1
    });

    imagem.addEventListener('mouseenter', ()=>{
        gsap.to(imagem,{
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
            overwrite: true
        });

    })

    imagem.addEventListener('mouseleave', ()=>{
        gsap.to(imagem,{
            opacity: 1,
            duration: 0.2,
            ease: "power2.out",
            overwrite: true
        });
    })
}

