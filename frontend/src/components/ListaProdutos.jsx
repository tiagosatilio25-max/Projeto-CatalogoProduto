import Produto from "./Produto";

<<<<<<< HEAD
function ListaProdutos({ produtos, busca, aoEditar, aoExcluir }){
=======
// ALTERADO: recebendo aoEditar e aoExcluir
function ListaProdutos({ produtos, busca, aoEditar, aoExcluir }) {
>>>>>>> 34d77736f46df7ee4de12391402953c443bf5f53


  if (produtos.length === 0) {
   
    return(
<<<<<<< HEAD
        <section className="secao-produtos">
            <div className="cabecalho-lista">
                <div>
                    <span className="tag">INVERTÁRIO</span>
                    <h2 className="titulo-secao">Produtos cadastrados</h2>
                </div>
                <span className="resultado-lista">{produtos.length}Exibido(s)</span>
            </div>
            <div className="grid">
                {produtos.map((produto) => (
                    <Produto key={produto.id} produto={produto} 
                    />
                ))}
            </div>
        </section>
    );
=======
      <section className="estado-vazio">

           <span className="icone-vazio">🔎</span> 

           <h2>{busca ? "Nenhum produto encontrado" : " nenhum produto cadastrado  "} </h2>

            <p>
              {
                busca
                ? "Tente pesquisar usando outro nome."
                : "Cadastre o primeiro produto para iniciar o catálogo."
              }
            </p>

      </section>
    )
  }

  return (
    <section className="secao-produtos">
      
      <div className="cabecalho-lista">

        <div>

          <span className="tag">INVENTÁRIO</span>
          <h2 className="titulo-secao">Produtos cadastrados</h2>

        </div>
          <span className="resultado-lista"> {produtos.length} exibido(s)</span>


      </div>


      <div className="grid">
        {produtos.map((produto) => (
          // ALTERADO: repassando ações para cada card
          <Produto
            key={produto.id}
            produto={produto}
            aoEditar={aoEditar}
            aoExcluir={aoExcluir}
          />
        ))}


      </div>
    </section>
  );
>>>>>>> 34d77736f46df7ee4de12391402953c443bf5f53
}

export default ListaProdutos;
