const compañeros = ["Laia", "Carla", "Albert", "Juan Carlos", "Francisco", "Sergio", "Rifi", "Walid", "Herman", "Ferdi", "David"];
const vaticinio = ["¡Deja de buscar en Internet y ve a hacer algo productivo!",
"¿Sabías que el 78.4% de las estadísticas son inventadas en galletas de la fortuna como esta?",
"Si comes esta galleta, tendrás buena suerte... o indigestión, ¡tú decides!",
"La vida es como una caja de galletas de la fortuna, nunca sabes lo que vas a conseguir... ¡excepto esta frase!",
"Tu sentido del humor es tu mayor virtud... según esta galleta de la fortuna, al menos.",
"La sabiduría de esta galleta rivaliza con la de Gandalf... o quizás no, pero es divertida de todas formas.",
"A veces, la solución a tus problemas es una galleta de la fortuna... o un helado, ¡también funciona!",
"El destino te sonríe... o tal vez solo son los restos de esta galleta en tus dientes.",
"¡Esta galleta sabe más que el abuelo de Yoda!",
"La suerte está en tus manos... justo debajo de esa galleta de la fortuna.",
"La felicidad es como una galleta de la fortuna, ¡a veces te deja con un dulce sabor y otras con ganas de más!",
"El amor está a la vuelta de la esquina... junto con una docena de galletas de la fortuna, ¿quién puede resistirse?",
"Tu creatividad desborda... o tal vez sea solo el relleno de esta galleta.",
"El secreto de la felicidad se encuentra en esta galleta... o tal vez en un buen meme, ¿quién sabe?",
"La fortuna te sonríe... y te anima a sonreír también, aunque sea por el chiste malo de esta galleta.",
]

function compañeroAleatorio() {
    const indexAleatorio = Math.floor(Math.random() * compañeros.length)
    return compañeros[indexAleatorio] 
}

function vaticinioAleatorio() {
    const fraseAleatoria = Math.floor(Math.random() * vaticinio.length)
    return vaticinio[fraseAleatoria]
}

// Falta pintar el resultado