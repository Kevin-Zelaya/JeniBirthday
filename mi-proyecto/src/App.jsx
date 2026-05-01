import { useState } from "react";
import Letter from "./components/Letter";
import PhotoCard from "./components/PhotoCard";
import Background from "./components/Background";
import { useRef } from "react";

export default function App() {
  const [opened, setOpened] = useState(false);
  const audioRef = useRef(null);
  const handleOpen = () => {
  setOpened(true);

      if (audioRef.current) {
        audioRef.current.play();
      }
    };
  const photos = [
    { image: "/imagen4.jpeg", message: "Soñandote a la distancia" },
    { image: "/imagen5.jpeg", message: "Deseando la cercanía" },
    { image: "/imagen6.jpeg", message: "La dueña de mi corazón" },
    { image: "/imagen7.jpeg", message: "Empezando algo nuevo" },
    { image: "/imagen8.jpeg", message: "Siendo el sol de mis días" },
    { image: "/imagen9.jpeg", message: "La mejor tía" },
    { image: "/imagen10.jpeg", message: "La joya más preciada" },
    { image: "/imagen11.jpeg", message: "Lo natural es tu belleza" },
    { image: "/imagen12.jpeg", message: "Recordando momentos juntos" },
    { image: "/imagen13.jpeg", message: "Mi reina" },
    { image: "/imagen14.jpeg", message: "Con mis ojos puestos en vos" },
    { image: "/imagen15.jpeg", message: "Siendo mi viaje" },
    { image: "/imagen16.jpeg", message: "Y mi templo de tranquilidad" },
    { image: "/imagen17.jpeg", message: "Celebrandote siempre" },
    { image: "/imagen18.jpeg", message: "Siendo mi destino" },
    { image: "/imagen19.jpg", message: "Desde el principio" },
    { image: "/imagen20.jpeg", message: "Feliz a tu lado" },
    { image: "/imagen21.jpeg", message: "En comunidades ajenas" },
    { image: "/imagen22.jpeg", message: "En cada momento importante" },
    { image: "/imagen23.jpeg", message: "Con la luz de tus ojos" },
    { image: "/imagen25.jpeg", message: "Mi personaje favorito" },
    { image: "/imagen26.jpeg", message: "Con la carita más bella" },
    { image: "/imagen27.jpeg", message: "Y el parque más extenso" },
    { image: "/imagen28.jpeg", message: "Con ojos solo para ti" },
    { image: "/imagen29.jpeg", message: "Siempre juntos" },
    { image: "/imagen30.jpeg", message: "Recordandote siempre" },
    { image: "/imagen31.jpeg", message: "A todos lados con vos" },
    { image: "/imagen32.jpeg", message: "El reflejo de mi alma" },
    { image: "/imagen33.jpeg", message: "Y la luz de mis ojos" },
  ];

  const center = Math.floor(photos.length / 2);

  return (
    <div style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden" }}>
      
      <div
        style={{
          transform: "scale(0.8) translateX(-12.5%)",
          transformOrigin: "top center",
          width: "125%",
          height: "125%",
        }}
      >
        <Background />

        <Letter opened={opened} onOpen={handleOpen} />

        {opened &&
          photos.map((p, i) => {
            const radius = 300 + Math.random() * 200;
            const angle = Math.random() * Math.PI * 2;

            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <PhotoCard
                key={i}
                image={p.image}
                message={p.message}
                initialX={x}
                initialY={y}
                delay={i * 0.2}
              />
            );
          })}

        <audio ref={audioRef} src="/Chachacha.mp3" loop />
      </div>

    </div>
  );
}