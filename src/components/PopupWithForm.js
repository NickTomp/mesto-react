
function PopupWithForm(props) {
  return (
    <div className={props.isOpen ? 'popup popup_opened' : 'popup'} id={`${props.name}-popup`}>
      <div className={`popup__container popup__container_type_${props.name}`}>
        <button
          onClick={props.onClose}
          type="button"
          className="popup__close-button"
          aria-label="Закрыть поп-ап"
        />
        <form className="popup__form" name={props.name} noValidate="">
          <h2 className="popup__header">{props.title}</h2>
          {props.children}
        </form>
      </div>
    </div>
  );
}
export default PopupWithForm;