// fantasia, aventura, drama
// a viagem de chihiro, LIVRE, fantasia, aventura
// guardiões da galáxia, 12, fantasia, aventura
// as aventuras de pi, 10, drama, 
// fantasia, aventura, drama
// paddington, LIVRE, fantasia, aventura
// ladrões de bicicleta, 12, drama
// o dia depois do amanhã, livre, ação, ficção científica
// o menino que descobriu o vento, 14, drama

let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(600, 300);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:")
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
  
}

function draw() {
  background("white");
  let idade = campoIdade. value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, 
  gostaDeFantasia, gostaDeAventura);
  
  fill(color(200, 100, 0));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2)
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if(idade >=10) {
    if(idade >= 14) {
      return "O menino que descobriu o vento";
    } else {
      if (idade >= 12) { 
        if(gostaDeFantasia || gostaDeAventura) {
          return "Homem-aranha: no aranhaverso";
        } else {
    return "Ladrões de bicicleta";
        }
      } else {
      if (gostaDeFantasia) {
        return "As aventura de pi";
      } else {
        return "O dia depois do amanhã";
      }
   }
    }
  } else {
    if(gostaDeFantasia) {
     return "A viagem de chihiro";
    } else {
      return "O feitiço do tempo";
    }
      
    }
    
  }