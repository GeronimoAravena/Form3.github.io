import './SocialButton'

function formulario() {
    return (
        <>
            <div className="Container-Form">
                <h1>Crea una Cuenta</h1>
                <div>Logos no tengo idea como ingresarlos</div>
                <div>
                    <label htmlFor="name">Nombre</label>
                    <input type="text" id='name' className='form-control' />
                </div>
                <div>
                    <label htmlFor="email" id='email' >tuemail@ejemplo.com</label>
                    <input type="email" id='email'className='form-control' />
                </div>
                <div>
                    <label htmlFor="password" id='password'>Contraseña</label>
                    <input type="password" id='password' className='form-control' />
                </div>
                <div>
                    <label htmlFor="password" id='password' >Confirme su Contraseña</label>
                    <input type="password" id='password' className='form-control' />
                </div>
                <button>Registrarse</button>
            </div>
        </>
    )
}
