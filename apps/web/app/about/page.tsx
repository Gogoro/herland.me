import Header from '@/components/header';
import Footer from '@/components/footer';
import styles from './page.module.scss';
import PortableText from '@/components/portable-text';

export default async function Page(): Promise<JSX.Element> {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <div className={styles.text}>
            <h1>About me, Ole Herland <span className={styles.wiggle}>👋</span></h1>
            <p><big>I’m a serial entrepreneur and Full-Stack developer based in Norway 🇧🇻 I’ve built and sold two businesses, and been part of multiple startups. I have two goals in life: To be a good person and to pursue the occupation that I love ❤️</big></p>
          </div>
          <div>
            <div className={styles.image}>
              <img src="/ole-profile.png" />
            </div>
          </div>
        </div>

        <div className={styles.skills}>
          <h2>🦄 Skills and Technologies</h2>

          <div className={styles.skillsGrid}>
            <section>
              <h3>🤗 Soft Skills</h3>
              <ul>
                <li>Leadership</li>
                <li>Teamwork</li>
                <li>Communication</li>
                <li>Problem Solving</li>
                <li>Time Management</li>
                <li>Adaptability</li>
                <li>Work Ethic</li>
                <li>Flexibility</li>
              </ul>
            </section>
            <section>
              <h3>👨‍💻 Cloud & Infrastructure</h3>
              <ul>
                <li>Google Cloud Platform (GCP)</li>
                <li>Amazon Web Services (AWS)</li>
                <li>Azure</li>
                <li>Hetzner</li>
                <li>Vercel</li>
                <li>CloudFlare</li>
                <li>Linux/Ubuntu</li>
                <li>CI/CD</li>
                <li>DevOps</li>
                <li>Ansible</li>
              </ul>
            </section>
            <section>
              <h3>🤓 Backend</h3>
              <ul>
                <li>NodeJS</li>
                <li>Python</li>
                <li>PostgreSQL</li>
                <li>MySQL</li>
                <li>Redis</li>
                <li>Elasticsearch</li>
                <li>GraphQL</li>
                <li>RestAPI</li>
              </ul>
            </section>
            <section>
              <h3>👨‍💻 Frontend</h3>
              <ul>
                <li>UI/UX Design</li>
                <li>React.js</li>
                <li>Next.js</li>
              </ul>
            </section>
            <section>
              <h3>📱 App Development</h3>
              <ul>
                <li>React Native</li>
                <li>Expo</li>
                <li>App Store</li>
                <li>Google Play Store</li>
              </ul>
            </section>
            <section>
              <h3>🤪 Misc</h3>
              <ul>
                <li>Marketing</li>
                <li>Board work</li>
                <li>Accounting</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}