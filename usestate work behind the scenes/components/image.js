

const Button = ({imageUrl, title,arrowName,clickable})=>{
    return <button title={title} onClick={clickable}>
        <img className="button-img" src={imageUrl} alt={arrowName} />
        </button> 
}

export default Button