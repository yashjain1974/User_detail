import styless from './Card.module.css';

const Card=(props)=>{
  return(
    <div className={`${styless.card} ${props.className}`}>{props.children}</div>
  )
}

export default Card;