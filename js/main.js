// Armar reseñas para restaurantes

if (confirm(`¡Hola! ¿Quieres hacer una reseña de un restaurante?`)) {
  let clientName, restName;
  clientName = confirm(`¿Quieres que la reseña sea anónima?`)
    ? `Anónim@`
    : prompt(`¿Cuál es tu nombre?`);
  restName = prompt(`¿Cuál es el nombre del restaurante?`);

  review(clientName, restName);
} else {
  alert(`¡Qué lástima! Vuelve pronto.`);
}

function score(category, restName) {
  let score,
    i = 0;
  do {
    if (i != 0) {
      if (score > 5) {
        alert(
          "¡Qué bueno que te haya gustado tanto! Pero la máxima puntuación es 5."
        );
      } else if (score < 0) {
        alert(
          "¡Lamentamos la mala experiencia! Pero la mínima puntuación es 0."
        );
      } else {
        alert("Solo se permiten números");
      }
    }
    i++;
    score = Number(
      prompt(
        "Del 0 al 5: ¿Qué puntaje le darías a " +
          category +
          " en " +
          restName +
          "?"
      )
    );
  } while (score < 0 || score > 5 || isNaN(score));
  return score;
}

function review(clientName, restName) {
  let category, food, service, amb, promReview, recomend;
  for (let i = 0; i < 3; i++) {
    switch (i) {
      case 0:
        category = `la Comida`;
        food = score(category, restName);
        break;
      case 1:
        category = `la Atención`;
        service = score(category, restName);
        break;
      case 2:
        category = `el Ambiente`;
        amb = score(category, restName);
        break;
    }
  }
  promReview = (food + service + amb) / 3;
  recomend = confirm(`¿Recomendarías este restaurante a otras personas?`)
    ? "Sí"
    : "No";
  alert(`${clientName} ha hecho una reseña del restaurante: ${restName}.
    * Comida:        ${food}/5
    * Atención:      ${service}/5
    * Ambiente:      ${amb}/5
    
    * Promedio:      ${promReview}/5
    ${recomend + " recomendaría este restaurante a otras personas"}.`);
}
