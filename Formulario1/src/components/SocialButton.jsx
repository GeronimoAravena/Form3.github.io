function renderbuttontype(props) 
{switch(props.buttontype) {
    case 'facebook':
    return <i className="fa-brands fa-facebook fa-lg"></i>
    case 'linkedin':
    return <i class="fa-brands fa-linkedin fa-lg"></i>
    case 'github':
    return <i class="fa-brands fa-github fa-lg"></i>
    default:
    return <i class="fa-brands fa-github fa-lg"></i>}}

function SocialButton(props) {
    return (
        <>
            <div className="container">
                <button className={props.buttontype}>
                    {renderbuttontype(props)}
                </button>

            </div>
        </>
    )
}

export default SocialButton
