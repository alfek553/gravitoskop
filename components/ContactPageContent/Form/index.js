'use client';
import styles from './styles.module.scss';
import { createQuestion } from '@/app/actions';
import { useFormState } from 'react-dom'

/**
 * Компонент `Form` отображает форму для заполнения
 */
export default function Form({ }) {

  const initialState = {
    message: '',
  }
  const [state, formAction] = useFormState(createQuestion, initialState);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    await formAction(formData);
    event.target.reset(); // Сброс формы после успешной отправки
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.form}
        onSubmit={handleFormSubmit}
      >
        <div className={styles.containerInput}>
          <input className={styles.input}
            type="text"
            id='name'
            name="name"
            minLength="2"
            maxLength="70"
            placeholder="Name" required />
          <input className={styles.input}
            type="email"
            id='email'
            name="email"
            minLength="5"
            maxLength="70"
            placeholder="E-mail" required />
        </div>
        <div className={styles.textareaContainer}>
          <textarea className={styles.textarea}
            id='comment'
            name="comment"
            minLength="5"
            maxLength="800"
            placeholder="Comment" required>
          </textarea>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.submit}
            type="submit">Submit
          </button>
          <label className={styles.check}>
            <input type="checkbox" required />
            I agree with the <a href="#">user agreement</a>
          </label>
        </div>
        <p className={styles.alertForm}>
          {state?.message}
        </p>
      </form>
    </div>
  );
}
