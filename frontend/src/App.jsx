import { useEffect, useState } from "react";
import Header from "./components/Header";
import FormProduto from "./components/FormProduto";
import ListaProdutos from "./components/ListaProdutos";



export default function App(){
  const [produtos, setProdutos] = useState([]);
  const [mensagem, setMensagem] = useState("");


  async function carregarProdutos() {
    try {
      const resposta = await fetch('/api/produtos');
      const dados = await resposta.json();
      setProdutos(dados);
      
    } catch {
      setMensagem("Não foi possível carregar os produtos");
    }

    }

    useEffect(() => {
      carregarProdutos();

    }, []);

    async function CadastrarProduto (produto) {
      setMensagem("");

      try{
        const resposta = await fetch("/api/produtos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(produto)
        });

        if (!resposta.ok) {
          const erro = await resposta.json();
          setMensagem(erro.mensagem);
          return;
        }

        const novoProduto = await resposta.json();

        setProdutos((produtosAtuais) => [...produtosAtuais, novoProduto]);
        setMensagem("Produto cadastrado com sucesso.");
      }catch{
        setMensagem("Não foi possível cadastrar o produto");
      }  
    }


  return(

  <>

  <Header/>

<main className="container">
  <FormProduto aoCadastrar={CadastrarProduto}/>

  {mensagem && <p className="mensagem">{mensagem}</p>}

  < ListaProdutos produtos={produtos}/>
</main>

</>
  );

}

