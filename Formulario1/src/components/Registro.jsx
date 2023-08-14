import './Alert'
import Formulario from'./Formulario'
import SocialButton from './SocialButton'
import Subheader from './Subheader'
import Header from './Header'

function Registro () {
    return (
        <>
        <div>
            <Header/>
            <div className='d-flex flex-row justify-content-center align-items-center'>
                <SocialButton buttontype='facebook'/>
                <SocialButton buttontype='linkedin' />
                <SocialButton buttontype='github' />
            </div>
            <Subheader/>
            <Formulario/>
        </div>
        
        </>

    )
}

export default Registro