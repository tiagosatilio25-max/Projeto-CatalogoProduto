export default function Produto({ produto }) {
    return (
        <article className="card">

            <div className="card-topo">
                <span className="codigo-produto">
                    ITEM #{produto.id}
                </span>

                <span className="disponivel">
                    DISPONÍVEL
                </span>
            </div>

            <h2>{produto.nome}</h2>

            <p>
                {produto.descricao || "Produto sem descrição cadastrada."}
            </p>

            <div className="preco-produto">
                <span>PREÇO</span>

                <strong>
                    R$ {Number(produto.preco).toFixed(2).replace(".", ",")}
                </strong>
            </div>

            {/* ==================== NOVO: botões do CRUD ==================== */}
            <div className = "acoes-card">
                <button type="button" className="botao-editar" onClick={() => aoEditar(prdouto)}>
                    Editar
                </button>

                <button type="button" className="botao-excluir" onClick={() => aoExcluir(produto.id)}> 
                    Excluir
                </button>

            </div>
                  {/* ============================================================= */}

        </article>
    );
}

export default Produto;