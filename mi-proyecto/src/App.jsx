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
    { image: `${import.meta.env.BASE_URL}imagen4.jpeg`, message: "Soñandote a la distancia" },
    { image: `${import.meta.env.BASE_URL}imagen5.jpeg`, message: "Deseando la cercanía" },
    { image: `${import.meta.env.BASE_URL}imagen6.jpeg`, message: "La dueña de mi corazón" },
    { image: `${import.meta.env.BASE_URL}imagen7.jpeg`, message: "Empezando algo nuevo" },
    { image: `${import.meta.env.BASE_URL}imagen8.jpeg`, message: "Siendo el sol de mis días" },
    { image: `${import.meta.env.BASE_URL}imagen9.jpeg`, message: "La mejor tía" },
    { image: `${import.meta.env.BASE_URL}imagen10.jpeg`, message: "La joya más preciada" },
    { image: `${import.meta.env.BASE_URL}imagen11.jpeg`, message: "Lo natural es tu belleza" },
    { image: `${import.meta.env.BASE_URL}imagen12.jpeg`, message: "Recordando momentos juntos" },
    { image: `${import.meta.env.BASE_URL}imagen13.jpeg`, message: "Mi reina" },
    { image: `${import.meta.env.BASE_URL}imagen14.jpeg`, message: "Con mis ojos puestos en vos" },
    { image: `${import.meta.env.BASE_URL}imagen15.jpeg`, message: "Siendo mi viaje" },
    { image: `${import.meta.env.BASE_URL}imagen16.jpeg`, message: "Y mi templo de tranquilidad" },
    { image: `${import.meta.env.BASE_URL}imagen17.jpeg`, message: "Celebrandote siempre" },
    { image: `${import.meta.env.BASE_URL}imagen18.jpeg`, message: "Siendo mi destino" },
    { image: `${import.meta.env.BASE_URL}imagen19.jpg`, message: "Desde el principio" },
    { image: `${import.meta.env.BASE_URL}imagen20.jpeg`, message: "Feliz a tu lado" },
    { image: `${import.meta.env.BASE_URL}imagen21.jpeg`, message: "En comunidades ajenas" },
    { image: `${import.meta.env.BASE_URL}imagen22.jpeg`, message: "En cada momento importante" },
    { image: `${import.meta.env.BASE_URL}imagen23.jpeg`, message: "Con la luz de tus ojos" },
    { image: `${import.meta.env.BASE_URL}imagen25.jpeg`, message: "Mi personaje favorito" },
    { image: `${import.meta.env.BASE_URL}imagen26.jpeg`, message: "Con la carita más bella" },
    { image: `${import.meta.env.BASE_URL}imagen27.jpeg`, message: "Y el parque más extenso" },
    { image: `${import.meta.env.BASE_URL}imagen28.jpeg`, message: "Con ojos solo para ti" },
    { image: `${import.meta.env.BASE_URL}imagen29.jpeg`, message: "Siempre juntos" },
    { image: `${import.meta.env.BASE_URL}imagen30.jpeg`, message: "Recordandote siempre" },
    { image: `${import.meta.env.BASE_URL}imagen31.jpeg`, message: "A todos lados con vos" },
    { image: `${import.meta.env.BASE_URL}imagen32.jpeg`, message: "El reflejo de mi alma" },
    { image: `${import.meta.env.BASE_URL}imagen33.jpeg`, message: "Y la luz de mis ojos" },
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

        <audio ref={audioRef} src={`${import.meta.env.BASE_URL}Chachacha.mp3`} loop />
      </div>

    </div>
  );
}