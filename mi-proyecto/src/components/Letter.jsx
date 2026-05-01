import { motion } from "framer-motion";
import { useState } from "react";

export default function Letter({ onOpen, opened }) {

  const handleClick = () => {
    if (opened) return;
    onOpen();
  };

  return (
    <div
      onClick={handleClick}
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        cursor: "pointer",
        perspective: 1200,
      }}
    >
      <motion.div
        animate={{
            rotateX: opened ? 180 : 0,
            maxHeight: opened ? "95vh" : "30vh",
            }}
        transition={{ duration: 0.8 }}
        style={{
        maxWidth: 800,
        aspectRatio: "3 / 4",
        width: "min(90vw, 700px)",
            background: opened
            ? `url('${import.meta.env.BASE_URL}letterBackground.png') center/cover no-repeat`
            : "linear-gradient(135deg, #f7ecd0, #fdf6e3)",
            borderRadius: 8,
          boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
          position: "relative",
          transformStyle: "preserve-3d"
        }}
      >
        {/* PARTE EXTERIOR */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "clamp(14px, 2vw, 18px)",
            fontWeight: "bold",
          }}
        >
          💌 Tócame
        </div>

        {/* PARTE INTERIOR */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            transform: "rotateX(180deg)",
            padding: 20,
            boxSizing: "border-box",
            textAlign: "center",
            fontSize: "clamp(14px, 2.5vw, 18px)",
            lineHeight: 1.5,
            overflow: "scroll",
            wordWrap: "break-word",
          }}
        >
          <h1>Para el cielo que mis ojos ven</h1>
          <p>
            Ya veintitrés años cumplidos,<br />
          agradecido al mundo por hacernos coincidir,<br />
          que una linea de Renfe nos mantiene unidos,<br />
          y en ese tren, la mejor decisión fue junto a ti seguir
          </p>
          <p>
            Ya dos años de trasbordos a tu lado,<br />
            tantos destinos que nos llaman,<br />
            tantas estaciones por las que hemos pasado,<br />
            y que mis besos en el camino te acompañan
          </p>
          <p>
            Ya son cientos de kilómetros recorridos,<br />
            miles de cafés endulzados por tu presencia,<br />
            que mis días poco a poco toman sentido,<br />
            mientras en mi paladar se vuelve amarga tu ausencia.
          </p>
          <p>
            Ya es una vida completamente diferente,<br />
            ya es el anhelo de un futuro,<br />
            solamente tengo seguridad de mi presente,<br />
            pero espero por siempre, seguir siendo tuyo.
          </p>
          <p>
            Te amo con todo el corazón y te quiero con toda el alma. Aunque esta parte no rime, espero que disfrutes tu celebración. Aunque no pude asistir, quiero que sepas que estás en mi mente y que nos faltan muchas celebraciones juntos.
          </p>
          <p>
            Sos la niña más bonita, la más inteligente. Espero con ansias ver cómo continúas con tus estudios, superándote cada día. Con todo el corazón te deseo.
          </p>
          <strong>Feliz cumpleaños, mi cielo.</strong>
          
        </div>
      </motion.div>
    </div>
  );
}