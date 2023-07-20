import React from 'react'
import logo from '../images/logo.svg';
import '../index.js';
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import ImagePopup from './ImagePopup.js'
import PopupWithForm from './PopupWithForm';
function App() { 
  const [isEditAvatarPopupOpen, SetAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, SetEditProfileOpen] = React.useState(false);
  const [isAddPlacePopupOpen, SetAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, handleCardClick] = React.useState('');
  function handleEditAvatarClick() {
    SetAvatarPopupOpen(true)
  }
  function handleEditProfileClick() {
    SetEditProfileOpen(true)
  }
  function handleAddPlaceClick() {
    SetAddPlacePopupOpen(true)
  }
  function closeAllPopups() {
    SetAvatarPopupOpen(false);
    SetEditProfileOpen(false);
    SetAddPlacePopupOpen(false);
    handleCardClick('');
  }
  return (
    <div className="App">
      <>
        <Header logo={logo} />
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
        <Footer />
        <PopupWithForm name={'profile'} title={'Редактировать профиль'} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
          <input
            type="text"
            id="name-input"
            name="name"
            required=""
            minLength={2}
            maxLength={40}
            placeholder="Имя"
            className="popup__text-input"
            defaultValue=""
          />
          <span className="name-input-error popup__input-error">
            Необходимо заполнить данное поле
          </span>
          <input
            type="text"
            id="job-input"
            name="job"
            required=""
            minLength={2}
            maxLength={200}
            placeholder="О себе"
            className="popup__text-input"
            defaultValue=""
          />
          <span className="job-input-error popup__input-error">
            Необходимо заполнить данное поле
          </span>
          <button type="submit" className="popup__submit-button">
            Сохранить
          </button>
        </PopupWithForm>
        <PopupWithForm name={'image'} title={'Новое место'} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          <input
            type="text"
            id="title-input"
            name="title"
            required=""
            minLength={2}
            maxLength={30}
            placeholder="Название"
            className="popup__text-input"
            defaultValue=""
          />
          <span className="title-input-error popup__input-error">
            Необходимо заполнить данное поле
          </span>
          <input
            type="url"
            id="link-input"
            name="link"
            required=""
            placeholder="Ссылка на картинку"
            className="popup__text-input"
            defaultValue=""
          />
          <span className="link-input-error popup__input-error">
            Необходимо заполнить данное поле
          </span>
          <button type="submit" className="popup__submit-button">
            Создать
          </button>
        </PopupWithForm>{/*id="add-image-form" У формы больше нет!!!*/}
        <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
        <PopupWithForm name={'delete'} title={'Вы уверены?'}>
          <button type="submit" className="popup__submit-button popup__submit-button_type_agree">
            Да
          </button>
        </PopupWithForm>
        <PopupWithForm name={'avatar'} title={'Обновить аватар'} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
          <input
            type="url"
            id="avatar-link-input"
            name="link"
            required=""
            placeholder="Ссылка на аватар"
            className="popup__text-input popup__text-input_type_avatar"
            defaultValue=""
          />
          <span className="avatar-link-input-error popup__input-error">
            Необходимо заполнить данное поле
          </span>
          <button
            type="submit"
            className="popup__submit-button popup__submit-button_type_avatar"
          >
            Сохранить
          </button>
        </PopupWithForm>
        <template id="image-element">
          <li className="elements__element">
            <button type="button" className="elements__delete-button" />
            <img className="elements__image" src="#" alt="" />
            <div className="elements__info">
              <h2 className="elements__text" />
              <div className="elements__like">
                <button type="button" className="elements__like-button" />
                <p className="elements__counter">0</p>
              </div>
            </div>
          </li>
        </template>
      </>
    </div>
  );
}
export default App;