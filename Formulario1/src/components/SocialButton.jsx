import '../styles/SocialButton.css'

function renderbuttontype(props) 
{switch(props.buttontype) {
    case 'facebook':
    return <i className="fa-brands fa-facebook fa-lg"></i>
    case 'linkedin':
    return <i className="fa-brands fa-linkedin fa-lg"></i>
    case 'github':
    return <i className="fa-brands fa-github fa-lg"></i>
    default:
    return <i className="fa-brands fa-github fa-lg"></i>}}

function SocialButton(props) {
    return (
        <>
            {/* se remueve container para alineación de contenido */}
            <div className="px-2">
                <div className={props.buttontype}>
                    {renderbuttontype(props)}
                </div>
            </div>
        </>
    )
}

export default SocialButton
