import styles from "./page.module.scss";

import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Page(): JSX.Element {
  return (
    <>
      <Header />
      <main>
        <div className={styles.hero}>
          <div className={styles.text}>
            <h1>Hi there <span className={styles.wiggle}>👋</span></h1>
            <p>I’m Ole Herland, a Full Stack Developer based in Norway 🇧🇻 </p>
            <p>I love my family, technology, science, philosophy and investing. I’m here to make an impact 💥</p>
          </div>
          <div className={styles.image}>
            <img src="/ole.png" alt="Ole Herland" />
          </div>
        </div>

        <div className={styles.quote}>
          <div className={styles.wrapper}>
            <div className={styles.image}>
              <img src="/epictetus.png" alt="Epictetus" />
            </div>
            <div className={styles.quoteText}>
              <p>“What, then, makes a person free from hindrance and self-determining? For wealth doesn’t, neither does high-office, state or kingdom—rather, something else must be found… in the case of living, it is the knowledge of how to live.”</p>
              <p><b>—Epictetus, Discourses, 4.1.62-64</b></p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
