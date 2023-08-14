
function Formulario() {
    return (
        <>
            <div className="Container-Form">
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

export default Formulario