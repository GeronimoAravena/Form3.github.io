
function Formulario() {
    return (
        <>
            {/* Flex para formulario y espaciado entre input  */}
            <div className="Container-Form d-flex flex-column">
                <div className="pb-2">
                    <label htmlFor="name">Nombre</label>
                    <input type="text" id='name' className='form-control' />
                </div>
                <div className="pb-2">
                    <label htmlFor="email" id='email' >tuemail@ejemplo.com</label>
                    <input type="email" id='email'className='form-control' />
                </div>
                <div className="pb-2">
                    <label htmlFor="password" id='password'>Contraseña</label>
                    <input type="password" id='password' className='form-control' />
                </div>
                <div className="pb-2">
                    <label htmlFor="password" id='password' >Confirme su Contraseña</label>
                    <input type="password" id='password' className='form-control' />
                </div>

                <button className="my-3 py-1">Registrarse</button>
            </div>
        </>
    )
}

export default Formulario