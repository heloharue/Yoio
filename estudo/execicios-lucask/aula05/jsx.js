
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aula 05 - JSX</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
            padding: 20px;
        }

        .destaque {
            background-color: #dbeafe;
            color: #1e3a8a;
            padding: 15px;
            border-radius: 8px;
        }

        .cartao {
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            margin-top: 15px;
        }
    </style>

    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>

<body>

    <div id="root"></div>

    <script type="text/babel">

        const projeto = "Meu Projeto";

        function Cabecalho() {
            return (
                <header>
                    <h1>{projeto}</h1>
                    <p>Bem-vindo ao meu projeto React!</p>
                </header>
            );
        }

        function Cartao() {
            return (
                <div className="cartao destaque">
                    <h2>Sobre o projeto</h2>
                    <p>Este projeto foi desenvolvido utilizando React e JSX.</p>
                </div>
            );
        }

        const tarefas = [
            { id: 1, texto: "Estudar React", feita: true },
            { id: 2, texto: "Aprender JSX", feita: false },
            { id: 3, texto: "Fazer a atividade", feita: true },
            { id: 4, texto: "Entregar o trabalho", feita: false }
        ];

        function Lista() {
            return (
                <div>
                    <h2>Lista de tarefas</h2>

                    <ul>
                        {tarefas.map((t) => (
                            <li key={t.id}>
                                {t.texto} {t.feita ? "(feita)" : "(pendente)"}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }

        function App() {
            return (
                <div>
                    <Cabecalho />
                    <Cartao />
                    <Lista />
                </div>
            );
        }

        const root = ReactDOM.createRoot(
            document.getElementById("root")
        );

        root.render(<App />);

    </script>

</body>
</html>
