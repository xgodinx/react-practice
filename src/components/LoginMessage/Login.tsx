

function LoginMessage(props: any): any {
  return (
    <p>{props.isLogged ? 'Welcome!' : 'Try again'}</p>
  )
}


export default LoginMessage