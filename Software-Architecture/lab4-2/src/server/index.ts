import * as http from 'http';
import { IncomingMessage, ServerResponse } from 'http';
import { TaxCalculator, TaxRequest2023, TaxRequest2024 } from './models/TaxCalculator';

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    res.setHeader('Content-Type', 'application/json');

    if (req.method === 'POST') {
        let body = '';

        req.on('data', (chunk: Buffer | string) => { 
            body += chunk.toString(); 
        });

        req.on('end', () => {
            try {
                const data = JSON.parse(body || '{}');

                if (req.url === '/api/tax/2023') {
                    const tax = TaxCalculator.calculateTax2023(data as TaxRequest2023);
                    res.writeHead(200);
                    res.end(JSON.stringify({ year: 2023, tax }));
                } else if (req.url === '/api/tax/2024') {
                    const tax = TaxCalculator.calculateTax2024(data as TaxRequest2024);
                    res.writeHead(200);
                    res.end(JSON.stringify({ year: 2024, tax }));
                } else {
                    res.writeHead(404);
                    res.end(JSON.stringify({ error: 'Endpoint Not Found' }));
                }
            } catch (error) {
                res.writeHead(400);
                res.end(JSON.stringify({ error: 'Invalid JSON body' }));
            }
        });
    } else {
        res.writeHead(405);
        res.end(JSON.stringify({ error: 'Method Not Allowed' }));
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`[Server] Tax API server running on http://localhost:${PORT}`);
});