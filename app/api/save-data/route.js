import { promises as fs } from 'fs';
import path from 'path';

export async function POST(req) {
  try {
    // Парсим тело запроса как JSON
    const body = await req.json();

    // Получаем текущее время
    const timestamp = new Date().toISOString();
    const { param2 } = body;

    // Формируем строку для записи
    const data = `${timestamp},${param2}\n`;

    // Указываем путь к файлам
    const dataFilePath = path.join(process.cwd(), 'public', 'data_holla.txt');
    const dataForNextFilePath = path.join(process.cwd(), 'public', 'data_holla_forNext.txt');

    // Записываем данные в файлы
    await fs.appendFile(dataFilePath, data, 'utf8');
    await fs.appendFile(dataForNextFilePath, data, 'utf8');

    // Возвращаем успешный ответ
    return new Response('OK', { status: 200 });
  } catch (error) {
    console.error('Error writing data:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
