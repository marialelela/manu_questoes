// Espera até que o conteúdo da página seja carregado
window.addEventListener('DOMContentLoaded', () => {
    // Obtém referências para os elementos HTML relevantes
    const submitButton = document.getElementById('submit-button');
    const searchInput = document.getElementById('search-input');
    const resultDiv = document.getElementById('result');

    // Adiciona um ouvinte de evento para o clique no botão "Pesquisar"
    submitButton.addEventListener('click', () => {
        // Obtém o valor de pesquisa informado pelo usuário e converte para número inteiro
        const searchValue = parseInt(searchInput.value);

        // Array predefinido para a pesquisa
        const array = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];

        // Utiliza a função array.find() para buscar o elemento no array
        const foundElement = array.find((element) => {
            return element === searchValue;
        });

        // Verifica se o elemento foi encontrado ou não e exibe a mensagem correspondente
        if (foundElement) {
            resultDiv.textContent = `O número ${searchValue} foi encontrado no array.`;
        } else {
            resultDiv.textContent = `O número ${searchValue} não foi encontrado no array.`;
        }
    });
});
