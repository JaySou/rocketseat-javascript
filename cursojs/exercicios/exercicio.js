var btnAdd = document.querySelector('#btnAdd');
var btnRemove = document.querySelector('#btnRemove');
var btnCleam = document.querySelector('#btnCleam');

var body = document.querySelector('.body');
var texto = document.querySelector('#erro')



btnAdd.onclick = function () {

    if (body.childElementCount < 9) {

        removeErro();

        var bloco = document.createElement('div');
        bloco.classList.add('bloco');

        body.appendChild(bloco);
        

       

        body.childNodes.forEach(function(b){
            
            var cor = getColor();

            b.onmousemove = function(){
                
                this.style.backgroundColor = cor;
            };

            b.onmouseout = function(){
                this.style.backgroundColor = 'yellow';
            }
        });
       
        habilitaRemoverLimpar();
        mostraBotoesRemoverLimpar();

        if (body.childElementCount === 9) {
            desabilitaAdd();
            ocultaBotaoAdiciona();
        }

    } else {
        addErro('Limite de blocos excedidos.');
    }

};

btnRemove.onclick = function () {
    if (body.childElementCount > 0) {

        removeErro();
        body.removeChild(body.lastChild);
        habilitaAdd();
        mostraBotaoAdiciona();

        if (body.childElementCount === 0) {
            desabilitaRemoverLimpar();
            ocultaBotoesRemoverLimpar();
        }

    } else {
        addErro('Não há blocos para remover');
    }
}

btnCleam.onclick = function () {

    if (body.childElementCount > 0) {

        removeErro()

        var blocos = document.querySelectorAll('.bloco');

        desabilitaRemoverLimpar();
        ocultaBotoesRemoverLimpar();
        habilitaAdd();
        mostraBotaoAdiciona();

        blocos.forEach(bloco => {
            bloco.remove();
        });

    } else {
        addErro('Não há blocos para remover');
    }

}



function addErro(erro) {

    texto.innerHTML = erro;
    texto.classList.add('texto');
}

function removeErro() {
    texto.innerHTML = '';
    texto.classList.remove('texto');
}

function desabilitaAdd() {
    btnAdd.setAttribute('disabled', 'disabled');
}

function habilitaAdd() {

    var disabled = btnAdd.getAttribute('disabled');

    if (disabled) {
        btnAdd.removeAttribute('disabled')
    }
}

function desabilitaRemoverLimpar() {

    btnRemove.setAttribute('disabled', 'disabled');
    btnCleam.setAttribute('disabled', 'disabled');
}


function habilitaRemoverLimpar() {

    btnRemove.removeAttribute('disabled');
    btnCleam.removeAttribute('disabled');
}



function getColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function ocultaBotoesRemoverLimpar(){

    btnCleam.style.display =  'none';

    btnRemove.style.display = 'none';
}

function mostraBotoesRemoverLimpar(){

    btnCleam.style.display = 'inline';

    btnRemove.style.display = 'inline';
}

function ocultaBotaoAdiciona(){

    btnAdd.style.display =  'none';

    btnAdd.style.display = 'none';
}

function mostraBotaoAdiciona(){

    btnAdd.style.display = 'inline';

    btnAdd.style.display = 'inline';
}

