const counterDisplay = document.querySelector("h3");
let counter = 0;

const bubbleMaker = () => {
    const bubble = document.createElement("span");
    bubble.classList.add("bubble");
    document.body.appendChild(bubble);

    const size = Math.random() * 200 + 100 + "px";
    bubble.style.height = size;
    bubble.style.width = size;

    bubble.style.top = Math.random() * 100 + 50 + "%";
    bubble.style.left = Math.random() * 100 + "%";

    // Pour que le déplacement des bulles se fasse de façon random sur la gauche il faut lui injecter un variable que l'on va créer en CSS.

    // Une fois la variable créée en CSS on va ici l'injecter dans bulle avec setProperty pour pouvoir toucher cette variable. Puis nous lui ajoutons un random sans oublier d'ajouter les unités sinon ça ne fonctionnera pas
    // Dans le cas où les bulles vont plus vers une direction qu'une autre il fut ajouter un turner pour mettre en conditon que 1 fois sur deux la valeur soit à 1 ou -1 si le random est superieur à 0.5

    // Il fait ensuite ajouter cette variable dans le calcul du Math.random

    const plusMinus = Math.random() > 0.5 ? 1 : -1;
    bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

    bubble.addEventListener("click", () => {
        counter++;
        counterDisplay.textContent=counter;
        bubble.remove();
    });
    // Dans l'animation nous avons fait disparaitre la bulle après 8s, il faut donc la faire disparaitre après 8s dans la fonction.
    setTimeout(() => {
        bubble.remove();
    }, 8000);
};

// Pour qu'il y ait plusieurs bulles qui apparaissent nous allons utiliser setInterval
setInterval(bubbleMaker, 300);
