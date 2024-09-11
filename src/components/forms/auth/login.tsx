
import styles from "./form.module.css"

const LoginForm = () => {
  return (
    <>
      <form className={styles.login_form} action="">
          <section>
            <input type="email" name="email" id="email" placeholder="Email" />
          </section>
          <section>
            <input type="password" name="password" id="password" placeholder="Contraseña" />
          </section>
          <section>
            <input className={styles.submit_button} type="submit" name="submit" value="Login" />
          </section>
      </form>
    </>
  )
}

export { LoginForm }