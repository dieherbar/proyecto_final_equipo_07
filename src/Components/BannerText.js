import styles from "@/styles/Banner.module.css";
import MyInput from "./MyInput";

export default function BannerText() {
  return (
    <>
      <div className={styles.contenedor}>
        <h1 className={styles.tituloDos}>Delivery de comida online</h1>

        <p className={styles.parrafo}>
          Más de 10.000 restaurantes con delivery en Argentina
        </p>
        <MyInput />
      </div>
    </>
  );
}
