import styles from "./About.module.css";  

function About() {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.aboutTitle}>About</h1>

      <p className={styles.aboutText}>
        Bienvenue sur notre boutique de mode en ligne ! Nous sommes passionnés par la mode et
        nous nous efforçons de vous offrir les dernières tendances à des prix abordables...
      </p>
<img
        src="/images/store.jpg"
        alt="Fashion"
        className={styles.aboutImage}
      />
      <p className={`${styles.aboutText} ${styles.aboutHighlight}`}>
        Passionné(e) par l’image et l’esthétique, je capture bien plus que des vêtements : je raconte des histoires à travers la mode.
Mon travail s’inspire des tendances contemporaines, de la culture urbaine et de l’émotion brute. Chaque shooting est pensé comme une expérience visuelle unique, où lumière, textures et attitude se rencontrent pour donner vie à une vision.
À travers mon objectif, je cherche à révéler l’identité, la confiance et l’expression personnelle de chaque modèle, tout en mettant en valeur les détails qui font la singularité de chaque pièce.
La mode est un langage — et la photographie est ma manière de le faire parler.
      </p>
      <img
        src="/images/store2.jpg"
        alt="Fashion"
        className={styles.aboutImage}
      />
    </div>
  );
}

export default About;