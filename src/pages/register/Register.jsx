import "./register.scss"


export default function Register() {
  return (
    <div className="registercontainer">
        <div className="header">
            <img className="StreamingCompletVF" src="https://cdn.worldvectorlogo.com/logos/microsoft-stream.svg" alt="" />
            <h1>StreamingCompletVF</h1>
        </div>
        <div className="register-box">
            <h2>Inscrivez-vous <span className="wordFree">gratuitement !</span></h2>
            <p>Créez vous un compte et profiter de toutes les <span className="textCentering">exclusivités gratuitement et en illimité.</span></p>
            <div className="registertextbox">
                <input type="text" placeholder="nom d'utilisateur" required/>
            </div>
            <div className="registertextbox">
                <input type="email" placeholder="email" required/>
            </div>
            <div className="registertextbox">
                <input type="password" placeholder="mot de passe"/>
            </div>
            <div>
                <input type="button" className="buttonregister" value={"Inscription"}/>
            </div>
            <div className="signup">
                <p>Vous avez déjà un compte? <span>
                   <a href="#">Connectez vous.</a> 
                </span></p>
            </div>
        </div>
    </div>
  )
}
