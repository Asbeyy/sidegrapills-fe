import { useEffect, useState } from "react";
import "../../App.css";
import "../../Responsive.css";

import Header from "./Header";
import Landing from "./Landing";
import Informations from "./Informations";
import Markeplace from "./Markeplace";
import ProductDetails from "./ProductDetails";
import Contact from "./Contact";
import Footer from "./Footer";
import Cart from "./Cart";

import { fr_lang } from "../lang/fr-FR";
import { en_lang } from "../lang/en-US";
import { es_lang } from "../lang/es-ES";
import { ru_lang } from "../lang/ru-RU";
import { it_lang } from "../lang/it-IT";
import { de_lang } from "../lang/de-DE";
import { ar_lang } from "../lang/ar-SA";
import { el_lang } from "../lang/el-GR";

function Home() {
  // if (!localStorage.getItem("acces-token-pfc")) {
  //   location.href = "/";
  //   return;
  // }

  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(true);

  const [language, setLanguage] = useState(navigator.language);
  const [langPack, setLangPack] = useState(choseLangPack(language));

  const [classCart, setClassCart] = useState("opacity");

  useEffect(() => {
    setLangPack(choseLangPack(language));
  }, [language]);

  //Handle Cart
  function handleAddToCard(x) {
    let price = 0;
    let name = "";

    if (x === "450") {
      price = 18;
      name = "Sidegra 50mg - 4 Pillules";
    } else if (x === "1250") {
      price = 44;
      name = "Sidegra 50mg - 12 Pillules";
    } else if (x === "2850") {
      price = 72;
      name = "Sidegra 50mg - 28 Pillules";
    } else if (x === "4100") {
      price = 20;
      name = "Sidegra 100mg - 4 Pillules";
    } else if (x === "12100") {
      price = 54;
      name = "Sidegra 100mg - 12 Pillules";
    } else if (x === "28100") {
      price = 85;
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
    if (cartOpen) {
      setCartOpen(false);
      setClassCart("");
    } else {
      setCartOpen(true);
      setClassCart("opacity");
      setTimeout(() => {
        setClassCart("opacity hidden");
      }, 300);
    }
  }

  //Handle Language
  function handleSetLanguage(x) {
    setLanguage(x);
  }
  function choseLangPack(xx) {
    if (xx === "fr-FR") {
      return fr_lang;
    } else if (xx === "en-US") {
      return en_lang;
    } else if (xx === "es-ES") {
      return es_lang;
    } else if (xx === "ru-RU") {
      return ru_lang;
    } else if (xx == "it-IT") {
      return it_lang;
    } else if (xx == "de-DE") {
      return de_lang;
    } else if (xx == "ar-SA") {
      return ar_lang;
    } else if (xx == "el-GR") {
      return el_lang;
    } else {
      // if navigator.language is not any of the above, set english
      return en_lang;
    }
  }

  return (
    <div className="body-site">
      <Header
        language={langPack}
        lang={language}
        onOpenCart={handleToggleCart}
        onLanguageChange={handleSetLanguage}
        cartElements={cart}
      />

      <Landing language={langPack} />

      <Informations language={langPack} />

      <Markeplace language={langPack} onAddToCard={handleAddToCard} />

      <ProductDetails />

      <Contact />

      <Footer onLanguageChange={handleSetLanguage} />

      <Cart
        language={langPack}
        deleteProduct={handleDeleteProduct}
        cartElements={cart}
        onSetQuantity={handleSetQuantity}
        hideEffectClass={cartOpen ? classCart : null}
      />
    </div>
  );
}

export default Home;
