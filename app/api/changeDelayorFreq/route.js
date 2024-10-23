export async function POST(req) {
    try {
      // Чтение данных из тела запроса
      const { url, dataToSend } = await req.json();
  
      console.log('Отправляем:', dataToSend);
  
      // Отправляем запрос на сторонний сервер
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: dataToSend,
      });
  
      // Проверяем успешность запроса
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
  
      const responseData = await response.text();
  
      // Возвращаем ответ
      return new Response(responseData, {
        headers: {
          'Content-Type': 'text/plain',
          'Access-Control-Allow-Origin': '*', // при необходимости
          'Cache-Control': 'no-store, max-age=0', // Отключаем кеширование
        },
      });
    } catch (error) {
      console.error('Ошибка при выполнении запроса:', error);
      return new Response('Internal Server Error', { status: 500 });
    }
  }
  