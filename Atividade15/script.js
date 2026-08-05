var cursos = {
    ads: {
        nome: "Análise e Desenvolvimento de Sistemas",
        modalidade: "Presencial",
        duracao: "6 semestres",
        descricao: "Forma profissionais para desenvolver, testar, implantar e manter sistemas computacionais."
    },

    automacao: {
        nome: "Automação Industrial",
        modalidade: "Presencial",
        duracao: "6 semestres",
        descricao: "Prepara profissionais para trabalhar com sistemas automatizados, equipamentos e processos industriais."
    },

    eletronica: {
        nome: "Eletrônica Automotiva",
        modalidade: "Presencial",
        duracao: "6 semestres",
        descricao: "Estuda sistemas eletrônicos utilizados em veículos, diagnóstico, manutenção e novas tecnologias automotivas."
    },

    fabricacao: {
        nome: "Fabricação Mecânica",
        modalidade: "Presencial",
        duracao: "6 semestres",
        descricao: "Forma profissionais para planejar e supervisionar processos de fabricação e produção mecânica."
    },

    qualidade: {
        nome: "Gestão da Qualidade",
        modalidade: "Presencial",
        duracao: "6 semestres",
        descricao: "Prepara profissionais para controlar, melhorar e garantir a qualidade de produtos, serviços e processos."
    },

    empresarial: {
        nome: "Gestão Empresarial",
        modalidade: "Ensino a distância",
        duracao: "6 semestres",
        descricao: "Aborda administração, planejamento, finanças, marketing e gestão de organizações."
    },

    logistica: {
        nome: "Logística",
        modalidade: "Presencial",
        duracao: "6 semestres",
        descricao: "Forma profissionais para administrar transportes, estoques, armazenamento e distribuição de produtos."
    },

    manufatura: {
        nome: "Manufatura Avançada",
        modalidade: "Presencial",
        duracao: "6 semestres",
        descricao: "Estuda tecnologias modernas de produção, automação, robótica e processos da Indústria 4.0."
    },

    aeronaves: {
        nome: "Manutenção de Aeronaves",
        modalidade: "Presencial",
        duracao: "6 semestres",
        descricao: "Prepara profissionais para planejar, executar e supervisionar serviços de manutenção aeronáutica."
    },

    polimeros: {
        nome: "Polímeros",
        modalidade: "Presencial",
        duracao: "6 semestres",
        descricao: "Estuda materiais plásticos, borrachas, processos de transformação e controle de qualidade."
    },

    metalurgicos: {
        nome: "Processos Metalúrgicos",
        modalidade: "Presencial",
        duracao: "6 semestres",
        descricao: "Forma profissionais para atuar na transformação, tratamento e controle de materiais metálicos."
    },

    projetos: {
        nome: "Projetos Mecânicos",
        modalidade: "Presencial",
        duracao: "6 semestres",
        descricao: "Prepara profissionais para desenvolver máquinas, equipamentos, peças e projetos mecânicos."
    },

    biomedicos: {
        nome: "Sistemas Biomédicos",
        modalidade: "Presencial",
        duracao: "6 semestres",
        descricao: "Forma profissionais para trabalhar com equipamentos médicos, hospitalares e sistemas de saúde."
    }
};

function carregarCurso(codigoCurso) {
    if (codigoCurso === "") {
        return;
    }

    var curso = cursos[codigoCurso];

    var confirmacao = confirm(
        "Deseja abrir uma nova janela com informações sobre o curso de " +
        curso.nome +
        "?"
    );

    if (confirmacao === true) {
        abrirJanelaCurso(curso);
    }

    document.getElementById("curso").value = "";
}

function abrirJanelaCurso(curso) {
    var janela = window.open(
        "",
        "_blank",
        "width=600,height=300,left=300,top=200"
    );

    if (janela === null) {
        alert("O navegador bloqueou a nova janela. Autorize os pop-ups e tente novamente.");
        return;
    }

    janela.document.open();

    janela.document.write(`
        <!DOCTYPE html>
        <html lang="pt-BR">

        <head>
            <meta charset="UTF-8">
            <title>${curso.nome}</title>

            <style>
                body {
                    margin: 0;
                    padding: 30px;
                    font-family: Arial, sans-serif;
                    color: #333333;
                    background-color: #f4f8fb;
                }

                h1 {
                    margin-top: 0;
                    color: #005c88;
                }

                .informacoes {
                    padding: 20px;
                    border-left: 5px solid #00a7d1;
                    border-radius: 6px;
                    background-color: white;
                }

                p {
                    line-height: 1.5;
                }
            </style>
        </head>

        <body>
            <div class="informacoes">
                <h1>${curso.nome}</h1>

                <p>
                    <strong>Modalidade:</strong>
                    ${curso.modalidade}
                </p>

                <p>
                    <strong>Duração:</strong>
                    ${curso.duracao}
                </p>

                <p>${curso.descricao}</p>
            </div>
        </body>

        </html>
    `);

    janela.document.close();
    janela.focus();
}