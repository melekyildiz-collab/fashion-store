import { NavLink } from "react-router-dom";
import styles from "./NotFound.module.css";

function NotFound() {
  return (
    <>

   <h1 className={styles.title}>404 Page Not Found 😢</h1>
   <p className={styles.description}>Désolé, la page que vous recherchez n'existe pas.</p>
   <NavLink to="/" className={styles.link}>Retourner à la page d'accueil</NavLink>
      </>
  );
}

export default NotFound;