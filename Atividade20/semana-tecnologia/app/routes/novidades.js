module.exports = function (app) {
    app.get('/novidades', function (req, res){
        res.send(`
                    <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Novidades</title>
        </head>

        <body>

            <header>
                <h1>Novidades</h1>

                <nav>
                    <a href="/">Início</a> |
                    <a href="/sobre">Sobre</a> |
                    <a href="/programacao">Programação</a> |
                    <a href="/contato">Contato</a> |
                    <a href="/novidades">Novidades</a> |
                    <a href="/admin/inscricao">Inscrição</a>
                </nav>
            </header>

            <main>
                <h2>Últimas novidades</h2>

                <ul>
                    <li>Novas palestras foram adicionadas à programação.</li>
                    <li>As inscrições estarão disponíveis em breve.</li>
                    <li>O evento contará com workshops de tecnologia.</li>
                </ul>
            </main>

            <footer>
                <p>&copy; 2026 Semana de Tecnologia</p>
            </footer>

        </body>
        </html>
            `);
    });
}