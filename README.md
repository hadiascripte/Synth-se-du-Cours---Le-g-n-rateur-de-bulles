
## Générateur de bulles


## classList

# Utilisation de `classList` en JavaScript

La propriété `classList` en JavaScript permet de manipuler facilement les classes CSS d'un élément HTML. Elle offre plusieurs méthodes utiles pour ajouter, supprimer, basculer et vérifier la présence de classes.

## 1. Principales méthodes de `classList`

### `add(class1, class2, ...)`
Ajoute une ou plusieurs classes à un élément. Si une classe est déjà présente, elle n'est pas ajoutée à nouveau.

```javascript
document.querySelector("div").classList.add("active", "highlight");
```

### `remove(class1, class2, ...)`
Supprime une ou plusieurs classes de l'élément.

```javascript
document.querySelector("div").classList.remove("highlight");
```

### `toggle(class, force)`
Ajoute la classe si elle n'existe pas, sinon la supprime. Avec un second argument (`force` en `true` ou `false`), on peut forcer l'ajout ou la suppression.

```javascript
document.querySelector("div").classList.toggle("dark-mode");
document.querySelector("div").classList.toggle("hidden", true); // Ajoute toujours "hidden"
```

### `contains(class)`
Vérifie si une classe est présente.

```javascript
if (document.querySelector("div").classList.contains("active")) {
    console.log("La classe 'active' est présente");
}
```

### `replace(oldClass, newClass)` *(ES6+)*
Remplace une classe par une autre.

```javascript
document.querySelector("div").classList.replace("old-class", "new-class");
```

## 2. Exemple d'utilisation

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemple classList</title>
    <style>
        .light { background: white; color: black; }
        .dark { background: black; color: white; }
    </style>
</head>
<body>
    <button onclick="toggleTheme()">Changer le thème</button>
    <div id="box" class="light">Texte</div>
    
    <script>
        function toggleTheme() {
            document.getElementById("box").classList.toggle("dark");
        }
    </script>
</body>
</html>
```

## 3. Avantages de `classList`
- Plus lisible et performant que la manipulation directe de `className`
- Permet d'ajouter ou supprimer plusieurs classes simultanément
- Compatibilité avec la majorité des navigateurs modernes

🚀 Utilisez `classList` pour une gestion efficace des classes CSS en JavaScript !


## Math.random( )
# Utilisation de `Math.random()` en JavaScript

La méthode `Math.random()` en JavaScript est utilisée pour générer un nombre pseudo-aléatoire compris entre `0` (inclus) et `1` (exclus).

## 1. Génération d'un nombre aléatoire

```javascript
let nombreAleatoire = Math.random();
console.log(nombreAleatoire); // Un nombre entre 0 et 1
```

## 2. Générer un nombre aléatoire dans une plage donnée

### Entre 0 et un maximum `max`
```javascript
let max = 10;
let nombreAleatoire = Math.random() * max;
console.log(nombreAleatoire); // Un nombre entre 0 et 10
```

### Entre un minimum `min` et un maximum `max`
```javascript
let min = 5;
let max = 15;
let nombreAleatoire = Math.random() * (max - min) + min;
console.log(nombreAleatoire); // Un nombre entre 5 et 15
```

## 3. Générer un entier aléatoire

### Entre 0 et un maximum `max`
```javascript
let max = 10;
let entierAleatoire = Math.floor(Math.random() * max);
console.log(entierAleatoire); // Un entier entre 0 et 9
```

### Entre un minimum `min` et un maximum `max`
```javascript
let min = 5;
let max = 15;
let entierAleatoire = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(entierAleatoire); // Un entier entre 5 et 15
```

## 4. Utilisation courante

### Simulation d'un lancer de dé (1 à 6)
```javascript
function lancerDe() {
    return Math.floor(Math.random() * 6) + 1;
}
console.log(lancerDe());
```

## 5. Points à noter
- `Math.random()` ne retourne jamais `1`, uniquement des valeurs strictement inférieures.
- Pour générer un entier, `Math.floor()` ou `Math.round()` est souvent utilisé.
- Pour une vraie aléatoire forte, on utilise `crypto.getRandomValues()`.

🎲 `Math.random()` est très utile pour les jeux, les tests, et toute application nécessitant des valeurs aléatoires !


##  .remove
# Utilisation de `remove()` en JavaScript

## Introduction
La méthode `remove()` en JavaScript est utilisée pour supprimer un élément du DOM (Document Object Model). Elle permet de libérer de la mémoire en supprimant les éléments inutiles après leur utilisation.

Dans le cas d'un générateur de bulles animé, `remove()` est utile pour éviter d'accumuler trop d'éléments sur la page et ainsi améliorer les performances.

---

## Syntaxe
```javascript
// Suppression d'un élément spécifique
const element = document.querySelector(".bubble");
element.remove();
```

Cette commande supprime l'élément sélectionné du DOM.

---

## Application dans un générateur de bulles
Dans le contexte d'une animation de bulles, on veut supprimer chaque bulle une fois que son animation est terminée. On peut utiliser un **événement `animationend`** pour détecter la fin de l'animation et ensuite appeler `remove()`.

### Exemple : Suppression d'une bulle après son animation
```javascript
const bubble = document.createElement("span");
bubble.classList.add("bubble");
document.body.appendChild(bubble);

// Ajout d'un écouteur d'événement pour détecter la fin de l'animation
bubble.addEventListener("animationend", () => {
    bubble.remove(); // Supprime la bulle du DOM
});
```

---

## Pourquoi utiliser `remove()` ?
### ✅ Avantages :
1. **Amélioration des performances** : Supprimer les bulles évite une surcharge inutile du DOM.
2. **Réduction de la consommation de mémoire** : Moins d'éléments en mémoire signifie une application plus fluide.
3. **Meilleure gestion des ressources** : Chaque bulle n'existe que le temps de son animation, puis disparaît proprement.

### ⚠️ Précaution :
- Assurez-vous que `remove()` est appelé après l'animation, sinon les bulles disparaîtront immédiatement sans être visibles.
- Vérifiez que l'élément existe avant de l'appeler, sinon cela peut générer une erreur.

---

## Conclusion
La méthode `remove()` est un moyen simple et efficace de nettoyer le DOM après l'utilisation d'un élément. Dans un projet comme un générateur de bulles, elle garantit que les bulles disparaissent une fois leur animation terminée, rendant l'expérience plus fluide et optimisée.

