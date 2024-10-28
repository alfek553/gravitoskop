// app/api/proxy/route.js
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const source = searchParams.get('source');
    let url
    if (source === 'capacitor') {
       url = new URL(`http://xn--80auzl.xn--p1ai/Capacitor/data.txt?timestamp=${Date.now()}`);
    } else if (source === 'holla') {
       url = new URL(`http://xn--80auzl.xn--p1ai/Holla/data_holla.txt?timestamp=${Date.now()}`);
    } else {
       url="";
      return new Response('Bad Request', { status: 400 });
    }
    // const url = new URL(`http://xn--80auzl.xn--p1ai/Holla/data_holla.txt?timestamp=${Date.now()}`);

    const response = await fetch(url, { cache: 'no-store' });

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const data = await response.text();

    return new Response(data, {
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

