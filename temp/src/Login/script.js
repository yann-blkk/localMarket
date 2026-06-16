function login(){

    var nome = $("#nome").val()
    var senha = $("#senha").val()

    if(nome && senha && nome === "admin" && senha === "123456"){
        const user = {
            name: nome, 
            dataEntrada: new Date(),
            id: Math.floor(Math.random() * 100000)
        } 
        localStorage.setItem("usuario", JSON.stringify(user))
        window.location.href = "../Loja"

    }

}