
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Products({ products }) {
    return (
        <main className="products">
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <img src={product.thumbnail}
                            alt={product.title} />

                        <div>
                            <strong>{product.title} - ${product.price   }</strong>
                        </div>
                        <div>
                            <button>
                                <FontAwesomeIcon icon={faShoppingCart} />
                            </button>
                        </div>
                    </li>
                ))
                }
            </ul>
        </main>
    )
}