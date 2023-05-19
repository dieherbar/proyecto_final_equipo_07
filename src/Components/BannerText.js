import styles from "@/styles/Banner.module.css";
import MyInput from "./MyInput";
import { BiGeo } from 'react-icons/bi';


export default function BannerText() {
  return (
    <>
      <div className={styles.contenedor}>
        <h1 className={styles.tituloDos}>Delivery de comida online</h1>

        <p className={styles.parrafo}>
          Más de 10.000 restaurantes con delivery en Argentina
        </p>
        <label>Veamos qué tenés cerca</label>
        <MyInput
          type="text"
          className="form-control"
          placeholder=" Dirección o punto de referencia"
        />
      </div>
    </>
  );
}
