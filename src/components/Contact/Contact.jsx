import { FaUser } from 'react-icons/fa6';
import { FaPhoneAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';
import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <>
      {/* Розмітка даних контакту */}
      <div className={css.wrapper}>
        <div className={css.contactData}>
          <FaUser className={css.icon} />
          <p>{name}</p>
        </div>
        <div className={css.contactData}>
          <FaPhoneAlt className={css.icon} />
          <p>{number}</p>
        </div>
      </div>

      {/* Кнопка видалення контакту */}
      <button
        type="button"
        onClick={() => dispatch(deleteContact(id))}
        className={css.deleteBtn}
      >
        Delete
      </button>
    </>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;
