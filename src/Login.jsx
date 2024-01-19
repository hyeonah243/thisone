export const Login = () => {
  return (
    <form>
      <label for ="email">Your email</label>
      <input type="email" placeholder="youremail@gmail.com" name="email"></input>
      <label for ="password">Your password</label>
      <input type="password" placeholder="*******" name="password"></input>
      <button>Login</button>
    </form>
  )
}

