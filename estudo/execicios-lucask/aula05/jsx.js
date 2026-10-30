// o que você escreve (JSX)
const titulo = <h1 className="destaque">Olá, React</h1>;
// o que o Babel entrega para o navegador
const titulo = React.createElement("h1", { className: "destaque" }, "Olá, React");


function Perfil() {
const nome = "Ana";
const turma = "2C";
return (
<div>
<h2>{nome}</h2>
<p>Turma {turma}, {2026 - 2009} anos</p>
<p>{nome.toUpperCase()}</p>
</div>
);
}


return (
<div>
<h1>Título</h1>
<p>Texto</p>
</div>
);

