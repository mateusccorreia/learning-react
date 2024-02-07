const products = [
    {title: 'Alguma coisa', isFruit: false, id: 1},
    {title: 'Maça', isFruit: true, id: 2},
    {title: 'Apple', isFruit: true, id: 3 },
]

export default function ShoppingList() {
    const listItems = products.map(product => 
        <li
        key={product.id}
        style={{
            color: product.isFruit ? 'magenta' : 'darkblue' 
        }}
        >
        {product.title}
        </li>)
    
    return(
        <ul>
            {listItems}
        </ul>
    )
}