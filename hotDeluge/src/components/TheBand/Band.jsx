import "./band.scss";
import { members } from "../../data.js";
import Member from "../MemberCard/Member";

const Band = () => {
  return (
    <div className="band" id="bio">
      <div className="bandWrapper">
        <div className="bandBio">
          <h1>Biografía</h1>
          <h5>
            Hot Deluge es una banda madrileña de rock alternativo, con raíces
            internacionales. Surge entre finales de 2020 y principios de 2021
            como proyecto musical entre Annya, cantante ucraniana de la escena
            de Kyiv, y Darrell. De la mano de Jaime Soriano (Sexy Sadie, Sr
            Nadie) como productor, grabamos en los Estudios “Monoboost”
            (Mallorca) el primer EP de la banda, “Open the Floodgates”.
            <br />
            <br />
            Compuestas durante la pandemia, sus canciones reflejan crítica
            política y social, crisis personales y sensualidad. Su primer
            single, “20 Bucks”, sobre la muerte de George Floyd, sonó en Radio 3
            en el programa “Hoy empieza todo”. Hot Deluge son Annya (voz
            principal y teclado), Darrell (guitarra, coros), Sergio (bajo),
            Óscar (batería), y Rubén (guitarra, coros), que se unió en 2023.
            <br />
            <br />
            Han tocado en varias de las principales salas de la escena
            indie/alternativa de Madrid - Café Palma, El Perro, Contraclub,
            Elefante Blanco, Rockville. En otoño de 2023 sacaron su siguiente
            EP, con un sonido más oscuro y duro, en parte marcado por la guerra
            en Ucrania y también por la búsqueda existencial a través de la
            música. Cantamos en inglés, con algunos temas en ucraniano y
            español.
          </h5>
        </div>
        <div className="bandMembers">
          <h1>Los Miembros</h1>
          <div className="memberWrapper">
            {members.map((member, index) => (
              <Member member={member} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Band;
