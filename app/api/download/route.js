// app/api/proxy/route.js
export async function GET(req) {
  try {
    const url = new URL(`http://xn--80auzl.xn--p1ai/Holla/data.txt`);  // Ваш URL
    const response = await fetch(url, { cache: 'no-store' });

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const data = await response.text();

    return new Response(data, {
      headers: {
        'Content-Type': 'text/plain',  // Тип содержимого (можно изменить при необходимости)
        'Content-Disposition': 'attachment; filename="enable_status.txt"',  // Указывает загрузку файла с именем
        'Access-Control-Allow-Origin': '*',  // при необходимости
        'Cache-Control': 'no-store, max-age=0',  // Отключаем кеширование
      },
    });
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
