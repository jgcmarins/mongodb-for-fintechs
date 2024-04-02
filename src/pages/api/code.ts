import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { fileName } = req.body;

  const protocol = req.headers['x-forwarded-proto'] || 'http';

  const host = req.headers.host;

  try {
    const url = `${protocol}://${host}/code/${fileName}`;
    const fileResponse = await fetch(url);
    if (!fileResponse.ok) {
      throw new Error(`Falha ao buscar o arquivo: status ${fileResponse.status}`);
    }
    const code = await fileResponse.text();

    res.status(200).send(code);
  } catch (error) {
    console.error(error);
    res.status(500).json('Erro ao ler o arquivo');
  }
}
