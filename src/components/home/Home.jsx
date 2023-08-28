import { useState } from "react";
import "../../App.css";
import { Link, Element, animateScroll as scroll } from "react-scroll";

import Header from "./Header";
import Landing from "./Landing";
import Informations from "./Informations";
import Markeplace from "./Markeplace";
import Reviews from "./Reviews";
import Cart from "./Cart";

function Home() {
  if (!localStorage.getItem("acces-token-pfc")) {
    location.href = "/";
    return;
  }

  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(true);

  function handleAddToCard(x) {
    let price = 0;
    let name = "";

    if (x === "450") {
      price = 16.99;
      name = "Sidegra 50mg - 4 Pillules";
    } else if (x === "1250") {
      price = 42.99;
      name = "Sidegra 50mg - 12 Pillules";
    } else if (x === "2850") {
      price = 69.99;
      name = "Sidegra 50mg - 28 Pillules";
    } else if (x === "4100") {
      price = 19.99;
      name = "Sidegra 100mg - 4 Pillules";
    } else if (x === "12100") {
      price = 50.99;
      name = "Sidegra 100mg - 12 Pillules";
    } else if (x === "28100") {
      price = 82.99;
      name = "Sidegra 100mg - 28 Pillules";
    }

    const product_object = {
      id: x,
      name: name,
      price: price,
      quantity: 1,
      key: Math.random() * 9999,
    };

    setCart([...cart, product_object]);
  }

  function handleDeleteProduct(x) {
    const productIndex = cart.findIndex((product) => product.key === x);

    if (productIndex !== -1) {
      const updatedCart = [
        ...cart.slice(0, productIndex),
        ...cart.slice(productIndex + 1),
      ];
      setCart(updatedCart);
    }
  }

  function handleSetQuantity(x, y) {
    const updatedCart = cart.map((product) => {
      if (product.key === x) {
        // Calculate the updated price based on quantity y (assuming y is a numeric value)
        const updatedQuantity = product.quantity + y;

        // Update the quantity and price in the product object
        return {
          ...product,
          quantity: updatedQuantity,
        };
      }
      return product;
    });

    setCart(updatedCart);
  }

  function handleToggleCart() {
    cartOpen ? setCartOpen(false) : setCartOpen(true);
  }

  return (
    <div className="body-site">
      <Header onOpenCart={handleToggleCart} cartElements={cart} />
      <Landing />
      <Informations />
      <Markeplace onAddToCard={handleAddToCard} />
      <Reviews />
      <Cart
        deleteProduct={handleDeleteProduct}
        cartElements={cart}
        onSetQuantity={handleSetQuantity}
        hideEffectClass={cartOpen ? "opacity" : null}
      />
    </div>
  );
}

export default Home;
