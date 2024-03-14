/**
 * IMC é igual ao peso divido pela altura * 2
 */

const executar = () => {
    const formulario = document.querySelector('form');
    const resultado = document.querySelector('.calculo-usuario');

    formulario.addEventListener('submit', (e) =>{
        e.preventDefault();
        
        const peso = formulario.querySelector('#peso');
        const altura = formulario.querySelector('#altura');

        const imc = (pesoPessoa, alturaPessoa) => {
            const resultado = pesoPessoa / (alturaPessoa ** 2);

            return resultado
        }

        const imcUsuario = imc(peso.value, altura.value).toFixed(2);

        if(imcUsuario < 18.5){
            resultado.innerHTML = `Peso: ${imcUsuario} - Abaixo do peso.`;
        }
        else if(imcUsuario >= 18.5 && imcUsuario <= 24.9) {
            resultado.innerHTML = `Peso: ${imcUsuario} - Peso normal`;
        }
        else if(imcUsuario >= 25 && imcUsuario <= 29.9){
            resultado.innerHTML = `Peso: ${imcUsuario} - Sobrepeso`;
        }
        else if(imcUsuario >= 30 && imcUsuario <= 34.9){
            resultado.innerHTML = `Peso: ${imcUsuario} - Obesidade grau 1`;
        }
        else if(imcUsuario >= 35 && imcUsuario <= 39.9){
            resultado.innerHTML = `Peso: ${imcUsuario} - Obesidade grau 2`;
        }
        else if (imcUsuario >= 40){
            resultado.innerHTML = `Peso: ${imcUsuario} - Obesidade grau 3`;
        }
        else{
            resultado.innerHTML = "Valor inválido";
        }

        console.log(imcUsuario);

    });
}

executar();