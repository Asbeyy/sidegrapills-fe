import React, { useEffect, useState } from "react";
import Footer from "../home/Footer";
function Terms() {
  function handleBackClick() {
    location.href = "/";
  }

  return (
    <div className="page">
      <div onClick={handleBackClick} className="back-to-site">
        {" "}
        Back{" "}
      </div>
      <div className="container-terms">
        <h1>Terms and Conditions</h1>
        <TextConditions />
      </div>

      <Footer />
    </div>
  );
}

export default Terms;

function TextConditions() {
  return (
    <div className="text-terms">
      <div className="terms-container">
        La responsabilité de notre société ne saurait être engagée pour :
        <ul>
          <li>
            Les dommages de toute nature, directs ou indirects, résultant de
            l'utilisation du site Sidegra.fr et notamment toute perte
            d'exploitation, perte financière ou commerciale, perte de programmes
            et/ou de données en particulier dans le système d'information de
            l'utilisateur.
          </li>
          <br />
          <br />
          <li>
            Les dommages de toute nature, directs ou indirects, résultant du
            contenu et/ou de l'utilisation des sites internet liés au site
            Sidegra.fr ou auxquels les utilisateurs pourraient avoir accès via
            le site Sidegra.fr
          </li>
          <br />
          <br />
          <li>Les omissions et/ou erreurs que pourraient contenir le site.</li>
        </ul>
        <br />
        <br />
        Le champ d'application Les présentes conditions s'appliquent de façon
        exhaustive et exclusive, à l'ensemble des opérations de vente réalisées
        sur le site Sidegra.fr.
        <br />
        <br />
        <br />
        <br />
        Elles sont valables au moment du passage de la commande. Notre société
        se réserve toutefois la possibilité de modifier les présentes conditions
        à tout moment, sous réserve de faire apparaître ces modifications sur
        son site.
        <br />
        <br />
        <br />
        <br />
        La passation d'une commande via le site Sidegra.fr vaut acceptation des
        présentes conditions générales de vente. La responsabilité Bien qu'ayant
        été approuvés par nos soins, les articles proposés sur le site
        Sidegra.fr n'engagent pas la responsabilité du site, ni dans leur
        contenu ni dans l'usage qui pourrait en être fait.
        <br />
        <br />
        <br />
        <br />
        Les articles proposés sont conformes à la législation thaïlandaise et
        mondiale. Notre société décline toute responsabilité si l'article livré
        ne respecte pas la législation du pays de livraison. Les photographies
        et les textes reproduits et illustrant les articles ne sont pas
        contractuels. Notre société se dégage de toute responsabilité en cas
        d'inexécution du contrat due à un cas de force majeure (grève,
        inondation, incendie ...) ou de toute cause indépendante de sa volonté.
        La Propriété intellectuelle L'intégralité du site Sidegra.fr est
        protégée par les législations thaïlandaises et internationales relatives
        à la propriété intellectuelle.
        <br />
        <br />
        <br />
        <br />
        Tous les droits de reproduction sont réservés, y compris pour les
        documents téléchargeables. L'ensemble des textes, graphismes, icônes,
        photographies, plans, logos, vidéos, sons, marques (...) et plus
        généralement l'ensemble des éléments composant le site et le site
        Sidegra.fr lui-même ne peuvent, conformément à l'article L122-4 du Code
        de la Propriété Intellectuelle, faire l'objet d'une quelconque
        représentation ou reproduction, intégrale ou partielle, sur quelque
        support que ce soit, sans autorisation express préalable et écrite de
        notre société.
        <br />
        <br />
        <br />
        <br />
        Le non-respect de cette interdiction constitue un acte de contrefaçon
        pouvant engager la responsabilité civile et/ou pénale de son auteur.
        Notre société se réserve le droit d'engager des poursuites judiciaires à
        l'encontre de toute personne qui n'aurait pas respecté cette
        interdiction.
        <br />
        <br />
        <br />
        <br />
        La responsabilité Les informations communiquées sur le site sont
        fournies à titre indicatif, elles sont non contractuelles et ne
        sauraient engager la responsabilité de notre société. Elles peuvent être
        modifiées ou mises à jour sans préavis. Notre société se réserve
        également le droit, à tout moment et sans préavis, d'apporter des
        améliorations et/ou modifications au site.
        <br />
        <br />
        <br />
        <br />
        Les utilisateurs L'utilisateur du présent site est responsable des
        dommages de toute nature, matériels ou immatériels, directs ou
        indirects, causés à tout tiers, y compris à notre société , du fait de
        l'utilisation ou de l'exploitation illicite du site. Notre société
        lui-même et/ou de l'un de ses éléments, quels que soient la cause et le
        lieu de survenance de ces dommages, et garantit notre société des
        conséquences des réclamations ou actions dont elle pourrait, de ce fait,
        faire l'objet.
        <br />
        <br />
        <br />
        <br />
        L'utilisateur du site Sidegra.fr renonce à exercer tout recours contre
        notre société dans le cas de poursuites diligentées par un tiers à son
        encontre du fait de l'utilisation et/ou de l'exploitation illicite du
        site Sidegra.fr. Mises en garde Les points de vue, commentaires et tous
        autres renseignements diffusés par Sidegra.fr ont pour seul but de
        fournir de l'information aux visiteurs.
        <br />
        <br />
        <br />
        <br />
        D'aucune manière ces points de vue, commentaires et renseignements ne
        constituent une prescription ou un diagnostic ni ne doivent être
        considérés comme tel.
        <br />
        <br />
        <br />
        <br />
        En cas de malaise important ou de maladie, consultez d'abord un médecin
        ou un professionnel de la santé en mesure d'évaluer correctement votre
        état de santé. De plus, malgré notre souci de vérifier la qualité des
        informations qui sont présentes sur le site, notre société ainsi que son
        personnel ne sauraient être tenus responsables des personnes présentées
        dans ce site et de leurs actions ou intentions.
        <br />
        <br />
        <br />
        <br />
        Si vous avez des questions à propos de nos Conditions Générales de Vente
        ou de notre politique de confidentialité, vous pouvez contacter
        directement nos services. Notre société a pour objectif de fournir vous
        un Sidegra de qualité et aux normes internationales et ceci à un prix
        raisonnable. Pour atteindre ce but, nous démarchons directement les
        entreprises locales pour obtenir des tarifs avantageux que nous
        répercutons directement sur le tarif des pilules.
        <br />
        <br />
        <br />
        <br />
        Pourquoi le Sidegra? parce que le Sidegra est un médicament nouveau qui
        va aider les hommes souffrant de dysfonction érectile. Certes il existe
        le Viagra et d'autres produits mais à des prix tels qu'il est impossible
        à certaines personnes d'y avoir accès. Par ces temps de crises, il est
        regrettable que des gens ayant des moyens financiers plus limités et
        souffrant d'impuissance ne puissent trouver une solution à ce trouble
        qui les empêche d avoir une relation sexuelle épanouie avec leur
        partenaires et qui a des répercussions néfastes sur leur vie conjugale,
        leur travail, leur confiance en eux-mêmes et leur estime de soi. Le
        Sidegra a exactement les mêmes vertus que le Viagra et à tous les
        niveaux: qualité, efficacité, dosage et à un prix largement plus
        abordable!!! Si le Sidegra peut aider simultanément ces personnes à
        retrouver leur bien être et à économiser de l'argent, nous serons
        heureux d'avoir pu y contribuer.
        <br />
        <br />
        <br />
        <br />
        Politique de confidentialité En vous inscrivant sur notre site
        sidegra.fr et en entrant vos données personnelles, vous acceptez cet
        accord de confidentialité et nous permettez de recueillir et de
        conserver ces données. Nous garantissons que notre société n'utilise vos
        données personnelles uniquement dans le but de réaliser vos commandes.
        Avant de passer une commande sur notre site, vous confirmez que vous
        êtes majeur (minimum 18 ans) et que vous êtes entièrement responsable de
        l’usage de ce site, y compris tous les frais financiers; vous vous
        engagez à fournir des renseignements véridiques et des informations à
        jour sur vous-même. Garantie de qualité Nous garantissons la meilleure
        qualité pour TOUS les médicaments que vous achetez et ils vous
        parviendront dans leurs emballages d'origine. Au cas où vous achetez
        notre médicament générique, soyez sûr qu'il est chimiquement identique
        et a les mêmes effets que ceux de marque. S'il vous plaît consultez donc
        votre médecin avant d'acheter notre médicament. N'hésitez pas à nous
        contactez si vous avez des questions . Nous sommes heureux de vous
        aider.
        <br />
        <br />
        <br />
        <br />
        Politique des prix Les prix de nos articles sont indiqués en euros
        toutes taxes comprises; les participations aux frais de traitement et
        d'expédition sont inclus lors de la commande. Toute commande, quelle que
        soit son origine, est payable en euros. Quels que soient le produit ou
        les quantités, nous nous réservons le droit de modifier nos prix à tout
        moment, mais les articles seront facturés sur la base des tarifs en
        vigueur au moment de la commande, sous réserve de leur disponibilité.
        Les articles demeurent la propriété de notre société jusqu'au complet
        paiement du prix. Le prix est exigible à la commande. A aucun moment
        donné, les sommes versées ne pourront être considérées comme des arrhes
        ou des acomptes.
        <br />
        <br />
        <br />
        <br />
        Politique de sécurité des paiements Nous comprenons que vos données
        personnelles sont confidentielles et de ce fait, notre site utilise
        différents serveurs sécurisés pour protéger toutes vos informations
        personnelles. Les paiements en ligne seront réalisés par le biais du
        système sécurisé PAYPAL qui utilise le protocole SSL (Secure Socket
        Layer) de telle sorte que les informations transmises sont cryptées par
        un logiciel et qu'aucun tiers ne peut en prendre connaissance au cours
        du transport sur le réseau. L’acheteur peut repérer que la transmission
        est cryptée par un logiciel dès lors qu’apparait dans son navigateur le
        symbole du cadenas. Les cartes bancaires acceptées sur le site
        sidegra.fr sont les cartes bancaires gérées par le service de paiement
        en ligne PAYPAL. Les grosses commandes pourront être effectuées par
        virement international. A la demande de l'acheteur, il lui sera adressée
        une facture par email.
        <br />
        <br />
        <br />
        <br />
        Politique de livraison Nous offrons un service de livraison rapide,
        fiable et discret dans le monde entier. Les colis seront expédiés dans
        les 48 heures des réception des commandes. Les produits sont livrés à
        l'adresse que l'acheteur indique lors de la commande avec les
        informations données à Paypal. Les délais indiqués sont des délais
        moyens et correspondent aux délais de traitement et de livraison. Pour
        des articles livrables à des dates différentes, compte tenu de leurs
        disponibilités, le délai de livraison est basé sur un délai le plus
        long. Le délai moyen de livraison est de 7 jours ouvrés.Toutes les
        livraisons s'effectuent par envoi simple par la poste avec un numéro de
        tracking. L'acheteur pourra vérifier et tracer son colis. Les personnes
        intéressées par un envoi rapide en EMS (5 à 7 jours) peut en faire la
        demande par l'intermédiaire de notre messagerie et ceci juste après sa
        commande. Un supplément de frais de livraison sera alors appliqué. Les
        risques sont à la charge de l'acquéreur à compter du moment où les
        produits ont quitté les locaux de notre société. Il appartient à
        l’acheteur, en cas d’avarie, de vol, de destruction ou de perte
        partielle ou totale, d’exercer tous recours contre le transporteur, la
        responsabilité de notre société ne pouvant en aucun cas être engagée de
        ce chef. En cas de dommage pendant le transport, la protestation motivée
        doit être formulée auprès du transporteur dans un délai de 48 heures à
        compter de la livraison. Les délais de livraison sont ceux donnés à
        titre indicatif par la poste thaïlandaise et sont exprimés en jours
        ouvrés, hors samedi, dimanche et jours fériés. Les grosses commandes
        (plus de 120 comprimés) seront expédiées en 2 ou 3 envois différents,
        par intervalle de 3 jours et ne parviendront pas à destination le même
        jour.
        <br />
        <br />
        <br />
        <br />
        Politique d'annulation Nous acceptons les annulations dans les 24 heures
        suivent la commande. Si vous désirez annuler votre commande vous devez
        prendre contact avec nos services et nous faire savoir votre décision.
        Après 24 heures, l'annulation ne pourra pas être traitée. Assurez-vous
        bien que vous avez rédigé une adresse valide dans le formulaire de
        commande. Vérifiez vos coordonnées deux fois avant de nous passer votre
        commande. Toute erreur peut causer la non-livraison du produit. Si vous
        remarquez que l'adresse spécifiée comporte des erreurs après avoir
        validez votre achat, alors contactez-nous immédiatement pour que nous
        puissions faire le nécessaire et rectifier les erreurs. Rétractation et
        remboursement Conformément à l'article L. 121-20 du Code de la
        Consommation, tout acheteur bénéficie d'un délai de rétractation de sept
        jours à compter de la livraison de sa commande pour retourner le produit
        au vendeur pour échange ou remboursement sans pénalité, à l'exception
        des frais de retour. En cas de retour, les produits doivent être
        impérativement retournés dans leur état d'origine (emballage) dûment
        scellés et non entamés. Notre société n'acceptera pas les colis renvoyés
        en « port payé par le destinataire », en « contre remboursement » ou en
        port du. Tout risque lié au retour est à la charge de l'acheteur. Les
        produit ouverts, entamés, endommagés ne seront ni remboursés, ni
        échangés sauf accord préalable de nos services.
      </div>
    </div>
  );
}
