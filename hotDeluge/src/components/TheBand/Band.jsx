import React from 'react'
import './band.scss'
import {members} from '../../data.js'
import Member from '../MemberCard/Member'


const Band = () => {
  return (
    <div className='band' id='#bio'>
        <div className="bandWrapper">
            <div className="bandBio">
            <h1>Biografía</h1>
                <h5>
                    {/* Hot Deluge (HD) surge como proyecto musical en plena pandemia en 2020 entre Anna, cantante (ucraniana con experiencia en bandas de Kiev), mi pareja, y yo. Durante el confinamiento compusimos “20 Bucks”, sobre el caso George Floyd y nuestro primer sencillo, “Quarantine” y “Reiniciar”, y recuperé un demo de 2018 de “The Song of Chris McCandless”. Le envié las maquetas a Jaime Soriano (Sexy Sadie, Sr Nadie), amigo y gurú musical, en Mallorca, que produce bandas independientes, música para documentales y otros proyectos guapos. Le gustaron mucho y me animó a grabarlas. Así que ese verano volamos a Palma para encerrarnos en los estudios “Monoboost”. Antes de Navidades, grabamos “Dystopia”, “Closing the Circle” y otros temas. Es un lujazo trabajar con Jaime – se implica en las canciones, te orienta…. También puso líneas de bajo y percusión. La batería es de Pedro Moyá, un chaval mallorquín.
                    Llegó 2021 con nosotros pensando en ir más en serio o, mejor dicho, tomando decisiones con ese objetivo, a pesar de lo difícil del momento para todos. Bajo la batuta de “Ele Ele Films” grabamos el vídeo de “20 Bucks”, que salió a finales de abril en Youtube, con muy buena recepción. El tema ha sonado en Radio 3 y RNE. A partir de ahí, todo instintivo. Reclutamos a Michael Parks, californiano, que tuvo sus propias bandas (Vent, The Park, Terminal Wonderlust), toca la guitarra, canta y compone. Nos conocimos en un encuentro de “Democrats Abroad” (la organización en España del Partido Demócrata) y le consulté sobre algunas maquetas para Mallorca. En plena grabación del vídeo de “20 Bucks” le pedí que hiciera como que tocaba con nosotros, aunque aún no era el caso. Él dice que yo tenía un “Gran Plan” para formar la banda (risas). Luego se unió a la batería Jack-Caldwell (escocés) y, tras unos meses con mi amigo Pablo Almaraz echándonos una mano con el bajo en los primeros bolos, hemos incorporado a Sergio Alegre, bajista que ha encajado muy bien. Hot Deluge es hoy pues un grupo madrileño, con parte del espíritu en Mallorca, e internacional. */}
                    Hot Deluge es una banda madrileña, con raíces internacionales, de apenas dos años de
                    vida. Surgimos de un dueto entre Annya, cantante ucraniana de la escena local de Kiev, y
                    Darrell, donostiarra, que, en la recta final del confinamiento por la pandemia, grabaron
                    varias canciones en los Estudios  ̈Monoboost ̈; en Mallorca. <br /><br />Nuestro productor es Jaime
                    Soriano (Sexy Sadie), de cuya mano lanzamos en primavera de 2021 Open the Floodgates
                    el primer EP de la banda, con canciones de crítica política, crisis personales y sensualidad.
                    Nuestro primer single,  ̈20 bucks ̈ sobre la muerte de George Floyd, salió en Radio 3 en el
                    programa,  ̈Hoy empieza todo ̈. <br /><br />
                    La banda la componen actualmente además de Annya (voz principal, muy característica, y
                    teclado) y Darrell (guitarra principal, coros), Sergio (bajo), Jesús (guitarra, voces) y Óscar
                    (batería). Entre finales de 2021 y mediados de 2022 hemos tocado en varias de las
                    principales salas de la escena indie/alternativa de Madrid - Café Palma, El Perro, Contraclub,

                    Elefante Blanco o Rockville. 
                    
                    <br /><br />Cantamos en inglés, ucraniano y español.
                </h5>
            </div>
            <div className="bandMembers">
                    <h1>Los Miembros</h1>
                    <div className="memberWrapper">
                    {members.map((member) => (
                     
                        <Member member={member}/>
                      
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Band
