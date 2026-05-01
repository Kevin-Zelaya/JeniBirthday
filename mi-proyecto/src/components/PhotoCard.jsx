import { motion } from "framer-motion";
import { useState } from "react";

export default function PhotoCard({ image, message, initialX, initialY, delay }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
        drag
        dragMomentum={false}
        whileTap={{ scale: 0.95 }}
        onClick={() => setFlipped(!flipped)}
        initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
        animate={{ x: initialX, y: initialY, scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay }}
        style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)", // 🔥 CLAVE
            width: 160,
            height: 220,
            perspective: 1000,
        }}
        >
    
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          transformStyle: "preserve-3d",
        }}
      >
        {/* FRONT */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            borderRadius: 12,
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
          }}
        />

        {/* BACK */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            borderRadius: 12,
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 12,
            textAlign: "center",
            boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
          }}
        >
          {message}
        </div>
      </motion.div>
    </motion.div>
  );
}