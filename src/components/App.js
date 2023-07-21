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
  const [selectedCard, setSelectedCard] = React.useState({name: '', link: ''});
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
    setSelectedCard({name: '', link: ''})
  }
  return (
    <div className="App">
      <>
        <Header logo={logo} />
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={setSelectedCard} />
        <Footer />
        <PopupWithForm name={'profile'} title={'Редактировать профиль'} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} buttonText={'Сохранить'} buttonClassName={'popup__submit-button'} >
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
        </PopupWithForm>
        <PopupWithForm name={'image'} title={'Новое место'} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} buttonText={'Создать'} buttonClassName={'popup__submit-button'} >
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
        </PopupWithForm>{/*id="add-image-form" У формы больше нет!!!*/}
        <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
        <PopupWithForm name={'delete'} title={'Вы уверены?'} buttonText={'Да'} buttonClassName={'popup__submit-button popup__submit-button_type_agree'} />
        <PopupWithForm name={'avatar'} title={'Обновить аватар'} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} buttonText={'Сохранить'} buttonClassName={'popup__submit-button popup__submit-button_type_avatar'}>
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
        </PopupWithForm>
      </>
    </div>
  );
}
export default App;