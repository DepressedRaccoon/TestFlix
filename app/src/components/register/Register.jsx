import "./Register.scss"

const Register = () => {
  return (
    <div className="register">
      <form>
        <label>
          Email:
          <input type="text" />
        </label>
        <label>
          Password:
          <input type="text" />
        </label>
      </form>
    </div>
  )
}

export default Register;