import styles from "./page.module.css";

export default function Home() {
  const steps = [
    {
      number: "01",
      title: "Push to GitHub",
      description: "Your code lives on GitHub. Every change you push can trigger a new deployment automatically.",
    },
    {
      number: "02",
      title: "Connect to Vercel",
      description: "Vercel watches your GitHub repo. When it sees new code, it builds and deploys for you — no manual steps.",
    },
    {
      number: "03",
      title: "Live on the Internet",
      description: "Vercel gives you a public URL instantly. Share it with anyone in the world. You shipped something real!",
    },
  ];

  const techStack = ["Next.js 14", "TypeScript", "React 18", "Vercel Ready"];

  return (
    <main className={styles.main}>
      {/* Background decoration */}
      <div className={styles.bgGlow} aria-hidden="true" />

      {/* Header */}
      <header className={styles.header}>
        <div className={styles.badge}>
          <span className={styles.dot} />
          Deployed successfully
        </div>
        <h1 className={styles.title}>
          My First
          <span className={styles.titleAccent}> App</span>
        </h1>
        <p className={styles.subtitle}>
          You built this. You deployed this.{" "}
          <span className={styles.highlight}>That&apos;s huge.</span>
        </p>
      </header>

      {/* How it works */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>How it got here</h2>
        <div className={styles.steps}>
          {steps.map((step) => (
            <div key={step.number} className={styles.step}>
              <span className={styles.stepNumber}>{step.number}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech stack */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>What&apos;s inside</h2>
        <div className={styles.tags}>
          {techStack.map((tech) => (
            <span key={tech} className={styles.tag}>
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Edit me card */}
      <section className={styles.editCard}>
        <p className={styles.editLabel}>Try editing this file:</p>
        <code className={styles.editPath}>app/page.tsx</code>
        <p className={styles.editHint}>
          Save the file → push to GitHub → Vercel auto-deploys. Watch it update live!
        </p>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>Built with Next.js · Deployed on Vercel · Made by you 🎉</p>
      </footer>
    </main>
  );
}
