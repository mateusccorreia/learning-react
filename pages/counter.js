import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <>
            <h1>
                Apredendo hooks
            </h1>
            <button onClick={handleClick}>
                Clique aqui para contar
            </button>
            <p>Você clicou {count} vezes</p>
        </>
    );
}