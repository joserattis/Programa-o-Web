// Capturando o formulário e os campos de input pelo ID
const formulario = document.getElementById("meuFormulario");
const campoNome = document.getElementById("nome");
const campoIdade = document.getElementById("idade");

// Adicionando um "ouvinte" que aguarda o formulário ser enviado
formulario.addEventListener("submit", function(evento) {
    
    // Impede o comportamento padrão do formulário (que é recarregar a página)
    evento.preventDefault();

    let nome = campoNome.value;
    let idade = Number(campoIdade.value);

    // Estrutura Condicional para validar a idade[cite: 4]
    if (nome === "") {
        alert("Erro: O campo nome não pode ficar vazio!");
    } else if (idade >= 18) {
        alert("Aprovado: Olá " + nome + ", você é maior de idade!");
        
        // Laço de repetição para simular um processamento no sistema[cite: 3]
        console.log("Iniciando processamento para o usuário: " + nome);
        for (let i = 1; i <= 3; i++) {
            console.log("Processando etapa " + i + "...");
        }
        console.log("Cadastro concluído com sucesso!");

    } else {
        alert("Reprovado: Desculpe " + nome + ", o sistema exige ser maior de 18 anos.");
    }
});