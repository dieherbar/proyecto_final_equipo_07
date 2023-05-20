import CardsComercios from "./CardsComercios";
import styles from "@/styles/Comercios.module.css";

export default function ComerciosAdheridos(props) {
  return (
    <>
      <div>
        <h6 className={styles.titulo}>Los mejores restaurantes</h6>
        <div
          className={styles.slider}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <div className={styles.tarjeta}>
            <CardsComercios
              src="Burger_King_logo_(1999).svg.png"
            />
          </div>

          <div className={styles.tarjeta}>
            <CardsComercios
              src="logoCarrefour.png"
            />
          </div>

          <div className={styles.tarjeta}>
            <CardsComercios
              src="mcdonalds-logo.webp"
            />
          </div>

          <div className={styles.tarjeta}>
            <CardsComercios
              src="logos-2019-01.jpg"
            />
          </div>

          <div style={{ margin: "20px" }}>
            <CardsComercios
              src="Burger_King_logo_(1999).svg.png"
            />
          </div>
          <div className={styles.tarjeta}>
            <CardsComercios
              src="Logo-freddo.jpg"
            />
          </div>

          <div className={styles.tarjeta}>
            <CardsComercios
              src="MostazaLogo.jpg"
            />
          </div>

          <div className={styles.tarjeta}>
            <CardsComercios
              src="logoWallmart.png"
            />
          </div>

          <div className={styles.tarjeta}>
            <CardsComercios
              src="barilocheLogo.jpg"
            />
          </div>

          <div className={styles.tarjeta}>
            <CardsComercios
              src="GlupsLogo.png"
            />
          </div>
        </div>
      </div>
    </>
  );
}
