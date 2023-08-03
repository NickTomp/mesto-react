import React from 'react'
import { currentUserContext } from '../contexts/CurrentUserContext.js';
import PopupWithForm from './PopupWithForm.js';
function EditProfilePopup(props) {
  const currentUser = React.useContext(currentUserContext);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  function HandleSetName(e) {
    setName(e.target.value)
  }
  function HandleSetDescription(e) {
    setDescription(e.target.value)
  }
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);
  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name: name,
      about: description,
    });
  }
  return (
    <PopupWithForm name={'profile'} title={'Редактировать профиль'} onSubmit={handleSubmit} isOpen={props.isOpen} onClose={props.onClose} buttonText={'Сохранить'} buttonClassName={'popup__submit-button'} >
      <input
        type="text"
        id="name-input"
        name="name"
        required=""
        minLength={2}
        maxLength={40}
        placeholder="Имя"
        className="popup__text-input"
        defaultValue={name}
        onChange={HandleSetName}
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
        defaultValue={description}
        onChange={HandleSetDescription}
      />
      <span className="job-input-error popup__input-error">
        Необходимо заполнить данное поле
      </span>
    </PopupWithForm>
  );
}
export default EditProfilePopup;