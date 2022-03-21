import "./register.scss"


export default function Register() {
  return (
    <div className="container">
        <div className="header">
            <img className="StreamingCompletVF" src="https://cdn.worldvectorlogo.com/logos/microsoft-stream.svg" alt="" />
            <h1>StreamingCompletVF</h1>
        </div>
        <div className="login-box">
            <div className="icon">
                <img src={"https://icons-for-free.com/iconfiles/png/512/person+profile+user+icon-1320184018411209468.png"} alt="" />
            </div>
            <div className="textbox">
                <input type="text" autoComplete="email" placeholder="nom d'utilisateur ou email"/>
            </div>
            <div className="textbox">
                <input type="password" placeholder="mot de passe"/>
            </div>
            <div className="forgot">
                <a href="#">
                    <p>Mot de passe oublié ?</p>
                </a>
            </div>
            <div>
                <input type="button" className="button" value={"Connexion"}/>
            </div>
            <div className="signup">
                <p>Vous n'avez pas de compte ? <span>
                   <a href="#">Inscrivez vous.</a> 
                </span></p>
            </div>
        </div>
    </div>
  )
}
