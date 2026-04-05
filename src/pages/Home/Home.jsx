import { NavLink} from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  return (
    <div>

      {/* HERO SECTION */}
      <div className={styles.hero}>
        <h1 className={styles.title}>Fashion Store 🛍️</h1>
        <p className={styles.subtitle}>
          Découvrez les dernières tendances mode
        </p>

        <NavLink to="/shop" className={styles.button}>
          Voir la boutique
        </NavLink>
      </div>

      {/* SECTION FEATURES */}
      <div className={styles.section}>
        <h2 className={styles.subtitle}>Pourquoi nous choisir ?</h2>

        <div className={styles.features}>
          <div className={styles.card}>
            <h3>🔥 Tendance</h3>
            <p>Produits modernes et stylés</p>
          </div>

          <div className={styles.card}>
            <h3>🚚 Livraison rapide</h3>
            <p>Livraison partout en France</p>
          </div>

          <div className={styles.card}>
            <h3>💎 Qualité</h3>
            <p>Des vêtements premium</p>
          </div>
        </div>
      </div>

    </div>
  );
}



export default Home;