function tocar(idElementoAudio) {
    document.querySelector('#som_tecla_pom').play();
}

const lista = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < lista.length)
    const tecla = lista[Contador];
    const classe = tecla.classList[1];
    //console.log(classe);

    const idSom = '#som_${classe}';
    //console.log(idSom);

    tecla.onclick = function(){
        tocar(idSom);
    }

    contador = Contador + 1;
    //console.log(Contador);
    
    tecla.onkeydown = function (evento){
    if(evento.code === 'Space'|| evento.code === 'Enter');
      tecla.classList.add('ativa');
    //console.log(evento.code === 'Space') || evento.code === 'Enter');

    }
    tecla.onkeyup = function(){
tecla.classList.remove('ativa')
    }
