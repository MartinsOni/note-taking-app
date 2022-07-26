import { NavLink, Outlet } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <main>
        <div className={styles.main}>
          <header className={styles.header}>
            <img className={styles.img}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXt7WKj-DNz6KxM42e_zET5qtCrV868RsAxuPj5s1UuKy93UGIOsfx9407uQptBa6sbY0&usqp=CAU"
              alt="Pen"
            />
            <h1>React Note Taking Application</h1>
          </header>

          <nav className={styles.navBar}>
            <NavLink className={styles.nav} to="">
              Home
            </NavLink>{" "}
            <NavLink className={styles.nav} to="list">
              NoteList
            </NavLink>{" "}
          </nav>
        </div>

        <div className={styles.para}>
          😇 The purpose of this project is to practice building a React
          application.
        </div>
        <Outlet />
      </main>
    </>
  );
}
