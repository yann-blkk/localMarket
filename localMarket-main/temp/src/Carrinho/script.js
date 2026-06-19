$(document).ready(function(){
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || []
    const listElement = $("#lista")
    const totalElement = $("#total")

    function exibirCarrinho(){
        listElement.empty()
        let totalPreco = 0
    }
})