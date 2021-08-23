import styles from './View.module.css'

export default function HomeView() {
  return (
    <aside className={styles.home}>
      <div>
        <h1 className={styles.title}>
          We are glad to welcome you on our site!
        </h1>
      </div>
    </aside>
  )
}
