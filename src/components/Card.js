function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }  
  return (
    <li className="elements__element">
      <button type="button" className="elements__delete-button" />
      <img className="elements__image" onClick={handleClick} src={props.card.link} alt={props.card.name} />
      <div className="elements__info">
        <h2 className="elements__text">{props.card.name}</h2>
        <div className="elements__like">
          <button type="button" className="elements__like-button" />
          <p className="elements__counter">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}
export default Card;