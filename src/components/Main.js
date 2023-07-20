import React from "react";
import api from '../utils/Api.js'
import Card from './Card.js'
function Main(props) {
  const [userName, setName] = React.useState('');
  const [userDescription, setDescription] = React.useState('');
  const [userAvatar, setAvatar] = React.useState('');
  const [cards, setCardsArray] = React.useState([]);
  React.useEffect(() => {
    api.getUserInfo()
      .then((data) => {
        setName(data.name);
        setDescription(data.about);
        setAvatar(data.avatar);
      })
      .then(() => {
        api.getCardsArray()
          .then((cardsArray) => {
            setCardsArray(cardsArray)
          })
      })
      .catch((err) => alert(`${err} - не удалось загрузить данные`))
  }, [])
  return (
    <main className="content">
      <section className="profile">
        <button
          onClick={props.onEditAvatar}
          className="profile__avatar-button"
          type="button"
          aria-label="Редактировать аватар профиля"
        >
          <img className="profile__avatar" alt="Аватар профиля" src={userAvatar} />
        </button>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <p className="profile__job">{userDescription}</p>
          <button
            onClick={props.onEditProfile}
            type="button"
            aria-label="Редактировать профиль"
            className="profile__button"
          />
        </div>
        <button
          onClick={props.onAddPlace}
          type="button"
          className="profile__add-button" />
      </section>
      <section>
        {/*Контейнер*/}
        <ul className="elements">
          {cards.map((card, i) => (
            <Card key={card._id} card={card} onCardClick={props.onCardClick}/>
          ))}
        </ul>
      </section>
    </main>
  );
}
export default Main;