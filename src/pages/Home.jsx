import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      {/* HERO SECTION */}
      <div style={styles.hero}>
        <h1 style={styles.title}>Fashion Store 🛍️</h1>
        <p style={styles.subtitle}>
          Découvrez les dernières tendances mode
        </p>

        <Link to="/shop" style={styles.button}>
          Voir la boutique
        </Link>
      </div>

      {/* SECTION FEATURES */}
      <div style={styles.section}>
        <h2>Pourquoi nous choisir ?</h2>

        <div style={styles.features}>
          <div style={styles.card}>
            <h3>🔥 Tendance</h3>
            <p>Produits modernes et stylés</p>
          </div>

          <div style={styles.card}>
            <h3>🚚 Livraison rapide</h3>
            <p>Livraison partout en France</p>
          </div>

          <div style={styles.card}>
            <h3>💎 Qualité</h3>
            <p>Des vêtements premium</p>
          </div>
        </div>
      </div>

    </div>
  );
}

const styles = {
  hero: {
    padding: "120px 20px",
    textAlign: "center",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1521334884684-d80222895322')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
  },

  title: {
    fontSize: "45px",
    marginBottom: "20px",
  },

  subtitle: {
    fontSize: "18px",
    marginBottom: "30px",
  },

  button: {
    padding: "12px 30px",
    backgroundColor: "#111",
    color: "white",
    textDecoration: "none",
    borderRadius: "5px",
  },

  section: {
    padding: "60px 20px",
    textAlign: "center",
  },

  features: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    marginTop: "30px",
    flexWrap: "wrap",
  },

  card: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    width: "200px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  },
};

export default Home;