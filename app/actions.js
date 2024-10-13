'use server';

//функция принимающая данные с формы
export async function createQuestion(prevState, formData) {
  const rawFormData = {
    nameId: formData.get('name'),
    email: formData.get('email'),
    comment: formData.get('comment'),
  };

  return {
    message: "Данные успешно отправлены!",
  }

}