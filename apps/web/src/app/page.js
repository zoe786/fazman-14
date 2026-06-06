import platformBlueprint from "../../../../shared/platformBlueprint.js";
import styles from "./page.module.css";

function SectionCard({ title, items }) {
  return (
    <section className={styles.card}>
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.kicker}>Dental marketplace platform</p>
        <h1>{platformBlueprint.brand.name}</h1>
        <p className={styles.summary}>{platformBlueprint.brand.positioning}</p>
        <p className={styles.supporting}>{platformBlueprint.brand.summary}</p>
      </section>

      <section className={styles.grid}>
        {platformBlueprint.roles.map((role) => (
          <article key={role.name} className={styles.card}>
            <h2>{role.name}</h2>
            <ul>
              {role.capabilities.map((capability) => (
                <li key={capability}>{capability}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className={styles.infrastructure}>
        <h2>Core architecture</h2>
        <dl className={styles.definitionList}>
          {Object.entries(platformBlueprint.infrastructure).map(([key, value]) => (
            <div key={key} className={styles.definitionRow}>
              <dt>{key}</dt>
              <dd>{Array.isArray(value) ? value.join(", ") : value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className={styles.sectionGroup}>
        {platformBlueprint.featureSections.map((section) => (
          <SectionCard key={section.title} title={section.title} items={section.items} />
        ))}
      </section>

      <section className={styles.procedures}>
        <h2>Procedure taxonomy</h2>
        <div className={styles.grid}>
          {platformBlueprint.procedures.map((procedure) => (
            <article key={procedure.name} className={styles.card}>
              <p className={styles.eyebrow}>{procedure.category}</p>
              <h3>{procedure.name}</h3>
              <p>{procedure.description}</p>
              <ul>
                <li>Duration: {procedure.averageDuration}</li>
                <li>Recovery: {procedure.recoveryTime}</li>
                <li>Price range: {procedure.costRange}</li>
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.compliance}>
        <h2>Compliance & privacy</h2>
        <ul>
          {platformBlueprint.compliance.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
