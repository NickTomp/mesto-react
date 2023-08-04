import React from 'react'
import logo from '../images/logo.svg';
import '../index.js';
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import ImagePopup from './ImagePopup.js'
import EditProfilePopup from './EditProfilePopup.js'
import EditAvatarPopup from './EditAvatarPopup.js'
import AddPlacePopup from './AddPlacepopup.js'
import PopupWithForm from './PopupWithForm.js';
import api from '../utils/api.js'
import { currentUserContext } from '../contexts/CurrentUserContext.js';
function App() {
  const [isEditAvatarPopupOpen, SetAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, SetEditProfileOpen] = React.useState(false);
  const [isAddPlacePopupOpen, SetAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({ name: '', link: '' });
  const [currentUser, setCurrentUser] = React.useState({ name: '', about: '', avatar: '', _id: '' });
  const [cards, setCardsArray] = React.useState([]);
  React.useEffect(() => {
    api.getUserInfo()
      .then((data) => {
        setCurrentUser({ name: data.name, about: data.about, avatar: data.avatar, _id: data._id })
      })
      .then(() => {
        api.getCardsArray()
        .then((cardsArray) => {
          setCardsArray(cardsArray)
        })
      })
      .catch((err) => alert(`${err} - не удалось загрузить данные`))
  }, [])
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
    setSelectedCard({ name: '', link: '' })
  }
  function handleCardLike(card, setCards) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch((err) => alert(`${err} - не удалось загрузить данные`));
  }
  function handleCardDelete(card, cards, setCards) {
    api.deleteCard(card)
    .then(() => {
      const newArray = cards.filter(item => item._id !== card._id)
      setCards(newArray);
    })
    .catch((err) => alert(`${err} - не удалось удалить карточку`));
  }
  function handleUpdateUser(data) {
    api.editProfileInfo(data)
    .then((data) => {
      setCurrentUser(data);
      closeAllPopups();
    })
    .catch((err) => alert(`${err} - не удалось отредактировать профиль`));
  }
  function handleUpdateAvatar(link) {
    api.editProfileAvatar(link)
    .then((data) => {
      setCurrentUser(data);
      closeAllPopups();
    })
    .catch((err) => alert(`${err} - не удалось обновить аватар`));
  }
  function handleAddPlace (link, title) {
    api.addNewCard(link, title)
    .then((newCard) => {
      setCardsArray([newCard, ...cards])
    })
    .catch((err) => alert(`${err} - не удалось добавить изображение`));
  }
  return (
    <div className="App">
      <currentUserContext.Provider value={currentUser}>
        <Header logo={logo} />
        <Main cards={cards} 
        setCardsArray={setCardsArray} 
        onEditProfile={handleEditProfileClick} 
        onAddPlace={handleAddPlaceClick} 
        onEditAvatar={handleEditAvatarClick} 
        onCardClick={setSelectedCard} 
        onCardLike={handleCardLike} 
        onCardDelete={handleCardDelete} 
        />
        <Footer />
        <EditProfilePopup 
        isOpen={isEditProfilePopupOpen} 
        onClose={closeAllPopups} 
        onUpdateUser={handleUpdateUser}
        /> 


        <AddPlacePopup 
        isOpen={isAddPlacePopupOpen} 
        onClose={closeAllPopups} 
        onAddPlace={handleAddPlace}
        />


        <ImagePopup 
        card={selectedCard} 
        onClose={closeAllPopups} 
        />
        <PopupWithForm 
        name={'delete'} 
        title={'Вы уверены?'} 
        buttonText={'Да'} 
        buttonClassName={'popup__submit-button popup__submit-button_type_agree'} />
        <EditAvatarPopup 
        isOpen={isEditAvatarPopupOpen} 
        onClose={closeAllPopups} 
        onUpdateAvatar={handleUpdateAvatar}/> 
      </currentUserContext.Provider>
    </div>
  );
}
export default App;