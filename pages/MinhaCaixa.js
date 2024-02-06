import { useState } from 'react';

export default function MinhaCaixa() {
    const [liked, setLiked] = useState(true);

    function handleChange(e) {
        setLiked(e.target.checked);
    }
  
    return(
        <>
            <label>
                <input 
                type='checkbox' 
                onChange={handleChange} 
                checked={liked}
                />
                Eu gostei disso
            </label>
            <p>Voce {liked ? 'Gostou' : 'Não gostou'} disso</p>
        </>
    )
}