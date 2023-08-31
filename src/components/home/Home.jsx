import { useEffect, useState } from "react";
import "../style/App.css";
import "../style/Responsive.css";

import Header from "./Header";
import Landing from "./Landing";
import Informations from "./Informations";
import Markeplace from "./Markeplace";
import Banner from "./Banner";
import ProductDetails from "./ProductDetails";
import Contact from "./Contact";
import Footer from "./Footer";
import Payment from "./Payment";
import Cart from "./Cart";

import { fr_lang } from "../lang/fr-FR";
import { en_lang } from "../lang/en-US";
import { es_lang } from "../lang/es-ES";
import { ru_lang } from "../lang/ru-RU";
import { it_lang } from "../lang/it-IT";
import { de_lang } from "../lang/de-DE";
import { ar_lang } from "../lang/ar-SA";
import { el_lang } from "../lang/el-GR";

import { pack_prices } from "../settings/prices";

function Home() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(true);

  const [language, setLanguage] = useState(navigator.language);
  const [langPack, setLangPack] = useState(choseLangPack(language));

  const [classCart, setClassCart] = useState("opacity hidden");
  const [paymentPage, setPaymentPage] = useState(false);

  useEffect(() => {
    setLangPack(choseLangPack(language));
  }, [language]);

  //Handle Cart
  function handleAddToCard(x) {
    let price = 0;
    let name = "";

    if (x === "450") {
      price = pack_prices.s50;
      name = `Sidegra 50mg - 4`;
    } else if (x === "1250") {
      price = pack_prices.m50;
      name = `Sidegra 50mg - 12`;
    } else if (x === "2850") {
      price = pack_prices.xl50;
      name = `Sidegra 50mg - 28`;
    } else if (x === "4100") {
      price = pack_prices.s100;
      name = `Sidegra 100mg - 4`;
    } else if (x === "12100") {
      price = pack_prices.m100;
      name = `Sidegra 100mg - 12`;
    } else if (x === "28100") {
      price = pack_prices.xl100;
      name = `Sidegra 100mg - 28`;
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
      setClassCart("opacity");
      setTimeout(() => {
        setClassCart("");
      }, 10);
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

  //Payment Page
  function handleOpenPaymentPage() {
    setPaymentPage(true);
  }
  function handleExitPaymentPage() {
    setPaymentPage(false);
  }

  const [shippingInfo, setShippingInfo] = useState({});
  function handleConfirmOrder(x) {
    setShippingInfo({
      name: x.name,
      surname: x.surname,
      adress: x.adress,
      adress_number: x.adress_number,
      zip_code: x.zip_code,
      city: x.city,
      country: x.country,
    });
  }

  return (
    <div className="body-site">
      <Header
        language={langPack}
        lang={language}
        cartElements={cart}
        onOpenCart={handleToggleCart}
        onLanguageChange={handleSetLanguage}
      />

      <Landing language={langPack} />

      <Informations language={langPack} />

      <Markeplace language={langPack} onAddToCard={handleAddToCard} />

      <Banner language={langPack} />

      <ProductDetails language={langPack} />

      <Contact language={langPack} />

      <Footer language={langPack} onLanguageChange={handleSetLanguage} />

      <Payment
        language={langPack}
        cart={cart}
        payment={paymentPage}
        shippingInfo={shippingInfo}
        onExit={handleExitPaymentPage}
      />

      <Cart
        language={langPack}
        cartElements={cart}
        hideEffectClass={classCart}
        onToggleCart={handleToggleCart}
        onSetQuantity={handleSetQuantity}
        deleteProduct={handleDeleteProduct}
        onOpenPaymentPage={handleOpenPaymentPage}
        onConfirmOrder={handleConfirmOrder}
      />
    </div>
  );
}

export default Home;
