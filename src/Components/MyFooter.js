import styles from "@/styles/Footer.module.css";
export default function MyFooter() {
  return (
    <>
      <div className={styles.foo}>
        <div className={styles.listas}>
          <ul>
            <li>Quiénes somos</li>
            <li>Términos y condiciones</li>
            <li>Privacidad</li>
            <li>Sé parte de Pedí Ya </li>
            <li>Blog</li>
          </ul>

          <ul>
            <li>Top comidas</li>
            <li>Top cadenas</li>
            <li>Top ciudades</li>
          </ul>

          <ul>
            <li>Registra tu negocio</li>
            <li>Centro de Socios</li>
          </ul>
        </div>

        <div className={styles.parrafoTres}>
          <div className={styles.parrafo}>
            <p>PedíYa para tus colaboradores</p>
          </div>
          <p className={styles.parrafoDos}>¿Te arrepentiste de una compra?</p>
          <p>Botón de arrepentimiento</p>
          <p>Defensa de las y los consumidores. Para reclamos ingresá acá</p>
          <p>
            Ley Nº 24.240 de Defensa del Consumidor. Ver contratos de adhesión
          </p>
        </div>

        <div className={styles.parrafoTres}>
          <p className={styles.parrafoDos}>
            PEDIYA S.A es un proveedor de servicios de pago y no está autorizado
            por el BCRA para operar como entidad financiera{" "}
          </p>
          <footer>PediYa &copy; Copyright 2023 </footer>
        </div>
      </div>
    </>
  );
}
