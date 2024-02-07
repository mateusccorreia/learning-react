import { useState } from "react";

export default function InputField() {
    const [text, setText] = useState('Escreva alguma coisa');

    function handleChange(e) {
        setText(e.target.value);
    }

    return(
        <>
            <input value={text} onChange={handleChange}/>
            <p>
                Você escreveu: {text}
            </p>
            <button onClick={() => setText('Escreva alguma coisa')}>
                Reset
            </button>
        </>
    )
}