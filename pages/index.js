import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const [nome, setNome] = useState('Mateus');

  // function alterarNome () {
  //   setNome('Mateus Correia')
  // }

  // return (
  //   <main>   
  //     <div>
  //       <h1>
  //         {nome}
  //       </h1>
  //       <button onClick={alterarNome}>
  //         Alterar nomeIsadora
  //       </button>
  //     </div>
  //   </main>
  // );

  const [nome, setNome] = useState('Isadora');
  const [idade, setIdade] = useState(3);

  return(
      <>
          <input 
          value={nome} 
          onChange={e => setNome(e.target.value)}
          />
          <br></br>
          <button onClick={() => setIdade(idade + 1)}>
              Aumentar a idade
          </button>
          <p>
              Olá {nome} Você está com {idade}
          </p>
      </>
  )
}
