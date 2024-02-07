import { useState } from 'react';

export default function Form() {
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