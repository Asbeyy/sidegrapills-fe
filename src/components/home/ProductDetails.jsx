import React from "react";

function ProductDetails() {
  return (
    <div id="product-info" className="page product-details-page">
      <div className="details-container">
        <div className="details-upper-section">
          <div className="details-cont-cont">
            <div className="details-title-upper-section">Le Sidegra</div>
            <div className="details-desc-upper-section">
              Le Sidegra contient du Citrate de sildénafil qui a pour propriété
              de relaxer les muscles et les vaisseaux sanguins de votre pénis,
              favorisant ainsi l'entrée d'une quantité de sang plus importante
              d'ou une érection plus stable.
            </div>
          </div>
          <div className="details-cont-cont-img">
            <img src="./medical/bottle_down.png" alt="" />
          </div>
        </div>
        <div className="details-separator"></div>
        <div className="details-lower-section">
          <div className="details-first-lower-box">
            <div className="details-title-lower-section">
              Le medicament en bref
            </div>
            <div className="details-desc-lower-section">
              Le Sidegra va lutter de manière efficace contre la dysfonction
              érectile grâce à sa composition exactement identique au Viagra. Le
              Sidegra est sans nul doute l'équivalent parfait de son ainé en
              terme d'efficacité, d'effet et de dosage.
            </div>
            <div className="cont-chem">
              <div className="warning-details">
                <img src="/medical/chemical.jpg" alt="" />
                <div>
                  Grâce au Citrate de Sildénafil qui est un inhibiteur de la
                  phosphodiestérase de type 5 (PDE5) contenu dans la pilule de
                  Sidegra, vos muscles vont se détendre et permettre ainsi au
                  sang d'affluer naturellement vers vos organes génitaux,
                  entrainant une érection puissante et durable.
                  <br />
                  <br />
                  Notez que le Sidegra comme tous les médicaments ce genre
                  n'agit que si vous êtes stimulé sexuellement et il n'a pas
                  pour rôle de décupler votre désir sexuel.
                </div>
              </div>
            </div>
          </div>
          <div id="posology" className="details-details-lower-box-container">
            <div className="details-box-cont-text">
              <div className="details-box-title">
                POSOLOGIE ET MODES D'UTILISATION
              </div>
              <div className="details-box-desc">
                Consommez pilule environ 30 à 60 minutes avant le debut de
                l'effet souhaité. Il peut prende jusqu'a 30 minutes pour que le
                medicament fasse effet. La duree peut s'etendre jusqu' à 6
                heures, si vous êtes stimulés sexuellement.
                <br />
                <br />
                <ul>
                  <li>
                    Ne pas boire trop l’alcool , puisque cela peut compliquer
                    l'erection.
                  </li>
                  <li>Dose racomande de 1 pillule / 100mg par jour</li>
                  <li>
                    N'utilisez pas Sidegra si vous avez récemment pris des
                    nitrates.
                  </li>
                  <li>
                    Pas recommandée pour les femmes ni les enfants de moins de
                    18 ans.
                  </li>
                  <li>Évitez de conduire tout vehicule motorise</li>
                </ul>
              </div>
            </div>
            <div className="details-box-cont-img">
              <img src="/medical/clock.png" className="details-box-img1" />
            </div>
          </div>
          <div className="details-details-lower-box-container">
            <div className="details-box-cont-img">
              <img src="/medical/nurses.png" className="details-box-img2" />
            </div>
            <div className="details-box-cont-text">
              <div className="details-box-title">SIDEGRA ET PRECAUTIONS</div>
              <div className="details-box-desc">
                Il est consellé consulter votre médecin ou pharmacien avant de
                prendre le Sidegra, si vous avez plus de 65 ans, avez ou avez eu
                ces antécédents médicaux et prenez des médicaments ou êtes sous
                traitement, mais aussi:
                <br />
                <br />
                <ul>
                  <li> drépanocytose</li>
                  <li> allergie au sildénafil</li>
                  <li> problème de vision ou yeux</li>
                  <li> myélome multiple ou leucémie</li>
                  <li> maladies des reins ou du foie</li>
                  <li> antécédents d’accident vasculaire cérébral</li>
                  <li> déformation du pénis ou maladie de La Peyronie</li>
                  <li> maintien d’une érection pendant plus de 4 heures</li>
                  <li>hypertension ou hypotension artérielle non maîtrisée</li>
                  <li> ulcères d’estomac ou tout autre saignement anormal</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="details-details-lower-box-container">
            <div className="details-box-cont-text">
              <div className="details-box-title">MODE DE STOCKAGE</div>
              <div className="details-box-desc">
                Les dates de péremption des médicaments dépendent de la manière
                dont vous les conservez. Voici quelques instructions de stockage
                de base :
                <br />
                <br />
                <ul>
                  <li> Conservez vos bouteilles entre 16°C et 28°F</li>
                  <li>
                    Ne pas ouvrir le flacon de l'aluminum sans le consommer
                  </li>
                  <li>
                    Gardez les boites à l’abri de la lumière directe du soleil
                  </li>
                  <li>Conservez les boites loin des enfants</li>
                  <li>Ne congelez pas et ne réchauffez pas les médicaments</li>
                </ul>
              </div>
            </div>
            <div className="details-box-cont-img">
              <img src="/medical/shelf.png" className="details-box-img3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
