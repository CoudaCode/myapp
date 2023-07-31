import React, { Component } from "react";
import "./HomePageStyles.css";
import airport from "./airport.png";
import notreDame from "./notre-Dame.jpeg"
import ile from "./san pedro.jpeg"
export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  render() {
    return (
      <div className="container">
        <br></br>
        <div className={"justify-content-center mt-5 mb-5"}>
          <h1 className="rr">
            <img src={airport} alt=""></img>&nbsp;Yarala
          </h1>
        </div>
        <br></br>
        <div className="container text-left">
          <h2>Basilique Notre-Dame de la Paix (Yamoussoukro) :</h2>
          <br></br>
          <p>
            La Basilique Notre-Dame de la Paix est l'une des plus grandes
            églises catholiques au monde et une icône architecturale de la Côte
            d'Ivoire. Située à Yamoussoukro, la capitale politique du pays,
            cette magnifique basilique a été inaugurée en 1990 par feu le
            président Félix Houphouët-Boigny. Son architecture impressionnante
            est inspirée de la Basilique Saint-Pierre de Rome, avec un dôme
            central en marbre blanc, entouré de seize colonnes élancées.{" "}
            <br></br>
            <br></br>
            La construction de la basilique a duré près de dix ans et mobilisé
            des artisans locaux et des experts du monde entier. La splendeur de
            l'intérieur est tout aussi époustouflante, avec des vitraux colorés,
            des fresques religieuses et une impressionnante mosaïque
            représentant Jésus-Christ. Les visiteurs peuvent également monter au
            sommet du dôme pour profiter d'une vue panoramique sur la ville.
          </p>
        </div>
        <br></br>
        <div className="container text-center">
          <img src={notreDame} className="img-fluid img-thumbnail " alt=""></img>
        </div>
        <br></br>
        <div className="container text-left">
          <h2>Parc National de Taï (Région du Bas-Sassandra)</h2>
          <br></br>
          <p>
            Le Parc National de Taï est l'une des principales réserves
            naturelles de l'Afrique de l'Ouest et un site du patrimoine mondial
            de l'UNESCO. Situé dans la région du Bas-Sassandra, ce parc protège
            l'une des dernières forêts tropicales primaires de la Côte d'Ivoire.
            Il abrite une biodiversité incroyable, notamment des espèces rares
            telles que le chimpanzé, le léopard, l'éléphant de forêt et de
            nombreuses espèces d'oiseaux exotiques.
            <br></br>
            <br></br>
            Les amateurs de nature et d'aventure seront comblés par les
            activités de trekking et de randonnée proposées dans le parc. Des
            guides locaux expérimentés peuvent accompagner les visiteurs pour
            des safaris pédestres à la recherche des animaux emblématiques de la
            région. Le Parc National de Taï offre une expérience unique pour les
            voyageurs souhaitant se rapprocher de la beauté sauvage de la nature
            africaine.
          </p>
        </div>

        <br></br>
        <div className="container text-center">
          <img src={"https://i0.wp.com/mondalu.com/wp-content/uploads/2020/04/IMG_0494-scaled.jpg?resize=1800%2C1200&amp;ssl=1"} className="img-fluid img-thumbnail" alt=""></img>
        </div>
        <br></br>

        <div className="container text-left">
          <h2>Îles Ehotilé (San Pedro)</h2>
          <br></br>
          <p>
            Les îles Ehotilé, également appelées îles Assinie, sont un archipel
            paradisiaque situé au large de la côte de San Pedro, dans le
            sud-ouest de la Côte d'Ivoire. Ces îles tropicales offrent des
            plages de sable blanc immaculé, des eaux turquoise et une végétation
            luxuriante. C'est l'endroit idéal pour les voyageurs en quête de
            détente et de beauté naturelle préservée.
            <br></br>
            <br></br>
            Les îles Ehotilé sont également connues pour leur riche patrimoine
            culturel, avec des villages de pêcheurs traditionnels où les
            visiteurs peuvent découvrir la vie locale et déguster des plats de
            fruits de mer frais et délicieux. Les activités populaires incluent
            la baignade, la plongée avec tuba et la découverte des mangroves
            environnantes en kayak.
          </p>
        </div>

        <br></br>
        <div className="container text-center">
          <img src={ile} alt="" className="img-fluid img-thumbnail"></img>
        </div>
      </div>
    );
  }
}

export default HomePage;
