import {useEffect ,useState } from "react";

function FormProduto({aoCadastrar, aoAlterar, produtoEmEdicao, aoCancelarEdicao}){
 
const [nome, setNome] = useState("");
const [descricao, setDescricao] = useState("");
const [preco, setPreco] = useState("");

const [erro , setErro] = useState ("");


useEffect(() =>{
    if (produtoEmEdicao){
        setNome(produtoEmEdicao.nome);
        setDescricao(produtoEmEdicao.descricao || "");
        setPreco(produtoEmEdicao);
    }
},[produtoEmEdicao]);

function limparFormulario(){
    setNome("");
    setDescricao("");
    setPreco("");
    setErro("");
}









function enviarFormulario(evento){
    evento.preventDefault();

    if(!nome.trim()){
        setErro("Digite o nome do produto")
        return;
    }

  if(!preco || Number(preco) <= 0){
        setErro("O preço deve ser maior que zero")
        return;
    }

    setErro("");

    
    const produto = {
      nome: nome.trim(),
      descricao: descricao.trim(),
      preco: Number(preco)
    };

    if(produtoEmEdicao){
        aoAlterar({
            id: produtoEmEdicao.id,
            ...produto
        });
    }else{
        aoCadastrar(produto);
    }

    limparFormulario();

    setNome("");
    setDescricao("");
    setPreco("");

        }
    
    function aoCancelarEdicao(){
        limparFormulario();
        aoCancelarEdicao();
    }

    return(
        <form className="formulario" onSubmit={enviarFormulario}>

         <div ClassName ="titulo-Formulario">

            <div>
            <span className = "tag">{produtoEmEdicao ? "Editando item " : "Novo Item"}</span>
            <h2>{produtoEmEdicao ? "Alterar produto" : "Cadastrar produto"}</h2>
         </div> 
            <span  className = "status-dot">ONLINE</span>
        </div>
        
    <div className="campos-formulario">

        <label>
            Nome
            <input
            type="text"
            value={nome}
            onChange={(evento) => setNome(evento.target.value)}
            placeholder="Ex: teclado"
            />

        </label>

        <label>
            Descrição
            <input
            type="text"
            value={descricao}
            onChange={(evento) => setDescricao(evento.target.value)}
            placeholder="Descrição do produto"
            />

        </label>

        <label>
            Preço
            <input
            type="text"
            min="0"
            step="0.01"
            value={preco}
            onChange={(evento) => setPreco(evento.target.value)}
            placeholder="0,00"
            />
        </label>
    </div>
    <div className="acoes-formulario" >
        <button type="submit">
        {produtoEmEdicao ? "Salvar alterações" : "+ Cadastrar produto"}
            </button>
        {produtoEmEdicao && (
            <button type="button" classname="botao-cancelar" onclick={cancelarEdicao}>
            Cancelar
            </button>
        )}
    </div>
        {erro && <p className = "mensagem-erro">{erro}</p>}
     </form>

    )
}
export default FormProduto;