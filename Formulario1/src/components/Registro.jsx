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
            <SocialButton buttontype='facebook'/>
            <SocialButton buttontype='linkedin' />
            <SocialButton buttontype='github' />
            <Subheader/>
            <Formulario/>
        </div>
        
        </>

    )
}

export default Registro