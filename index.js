function calcular(event){
    event.preventDefault()

    let salario = parseFloat(document.getElementById("inputsalario").value);
    let dias = parseInt(document.getElementById("dias").value);
    let horas = parseInt(document.getElementById("horas").value);
    let contentResult = document.getElementById("resultado");
    let mensagem = document.getElementById("mensagem");



    let horasMes = (dias * horas);

    let valorhora = (salario / horasMes);

    let novovalor = valorhora.toFixed(2);

    mensagem.innerHTML = "Valor da sua hora e: R$ " + novovalor;

    contentResult.classList.remove("hide");






}