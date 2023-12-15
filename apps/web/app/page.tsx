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
      </main>
      <Footer />
    </>
  );
}
