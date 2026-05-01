export default function Background() {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundImage: `url(${import.meta.env.BASE_URL}fondo.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "brightness(0.9)",
        zIndex: -1,
      }}
    />
  );
}