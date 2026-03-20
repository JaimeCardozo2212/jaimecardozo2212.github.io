// ========== FILTRO DE PROJETOS ==========
document.addEventListener('DOMContentLoaded', function() {
    // Filtros
    const filterButtons = document.querySelectorAll('.filtro-btn');
    const projectCards = document.querySelectorAll('.projeto-card');

    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                // Get filter value
                const filterValue = button.getAttribute('data-filter');
                
                // Filter projects
                projectCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 10);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
});

// ========== MODAL DE PROJETOS ==========
// Dados dos projetos
const projetosData = {
    'sistemas': {
        titulo: 'Sistema Gerenciador de Chamados',
        descricao: 'Sistema completo para gerenciamento de chamados e tickets de suporte. Desenvolvido em Python com interface web para facilitar o acompanhamento e resolução de problemas.',
        tecnologias: ['Python', 'Streamlit', 'SQLite',],
        features: [
            'Abertura e acompanhamento de chamados',
            'Sistema de login e níveis de acesso',
            'Painel administrativo',
            'Relatórios e estatísticas',
            'Chat interno para comunicação entre equipe',
            'Notificações por email'
        ],
        imagens: [
            'img/ger_chamados/painel_chamados.png',
            'img/ger_chamados/login.png',
            'img/ger_chamados/chat.png'

        ],
        github: 'https://github.com/JaimeCardozo2212/controle_de_chamados',
        demo: 'https://github.com/JaimeCardozo2212/controle_de_chamados'
    },
    'sistemasIA': {
        titulo: 'Sistema IA Local',
        descricao: 'Sistema desenvolvido para executar modelos de inteligência artificial localmente, sem a necessidade de conexão com servidores remotos. Ideal para ambientes com restrições de internet ou para garantir a privacidade dos dados processados.',
        tecnologias: ['Python', 'Streamlit','Langchain','ollama'],
        features: [
            'Execução de modelos de IA localmente',
            'Interface web para interação com os modelos',
            'Suporte a múltiplos modelos de IA',
            'análise de dados e visualização offline',
        ],
        imagens: [
            'img/sis_IA/sistema_IA.png',

        ],
        github: 'https://github.com/JaimeCardozo2212/IA_local',
        demo: 'https://github.com/JaimeCardozo2212/IA_local'
    },
    'obitos': {
        titulo: 'Automation Bot RPA',
        descricao: [
            'Robô desenvolvido para a Secretaria de Saúde de Joinville com o objetivo de otimizar o processo de baixa de óbitos no município. ',
             'A solução automatiza as seguintes etapas: ',
             'Busca pelo nome do falecido e localização do endereço; ',
             'Consulta do endereço no mapa da Prefeitura de Joinville; ',
             'Identificação da Unidade de Saúde responsável pelo registro; ',
             'Envio dos dados para um banco de dados, que alimenta um dashboard. ',
             'Com essas informações, o funcionário responsável tem todos os dados necessários para finalizar a operação de baixa do documento de óbito.'
            ],
        tecnologias: ['Python', 'Selenium', 'Pandas'],
        features: [
            'Extração automática de dados de sistemas web',
            'Geração de relatórios em Excel e PDF',
            'Agendamento de tarefas',
            'Sistema de logs e monitoramento',
            'Tratamento de erros automático'
        ],
        imagens: [
            'img/obitos/obitos.png'
        ],
        github: 'https://github.com/JaimeCardozo2212/Robo_Baixa_de_obitos_ses_',
        demo: 'https://github.com/JaimeCardozo2212/Robo_Baixa_de_obitos_ses_'
    },
    'extracao': {
        titulo: 'Extração de dados',
        descricao: 'Ferramenta de automação que extrai e processa dados do GLPI para classificar a urgência dos chamados, otimizando a priorização do atendimento.',
        tecnologias: ['Python', 'Tkinter', 'OpenCV', 'Pandas', 'SQLite', 'Selenium'],
        features: [
            'Login e autenticação de usuário',
            'Interface gráfica para configuração',
            'Multi-threading para ações simultâneas',
        ],
        imagens: [
            'img/extracao_dados/extracao.png',
        ],
        github: 'https://github.com/JaimeCardozo2212/Robo-extra-o-de-dados-ordem-de-servi-o',
        demo: 'https://github.com/JaimeCardozo2212/Robo-extra-o-de-dados-ordem-de-servi-o'
    },
    'app_web': {
        titulo: 'API de Automação',
        descricao: 'Criado para a Secretaria de Saúde de Joinville (SC), este aplicativo ajuda a população a encontrar, de forma rápida e fácil, a unidade de saúde de referência. Basta digitar o endereço para o app informar a unidade de saúde correspondente, o distrito ao qual pertence e outras informações complementares para agilizar o atendimento.',
        tecnologias: ['Python', 'Streamlit', 'Docker', 'PostgreSQL', 'Selenium', 'Pandas'],
        features: [
            'Autenticação e autorização',
            'Escalabilidade horizontal',
        ],
        imagens: [
            'img/ubsf_ref/app_web.png',

        ],
        github: 'https://github.com/JaimeCardozo2212/consulta_mapa_ubsf_referencia',
        demo: 'https://consultamapa.streamlit.app/'
    },
    'bot_tibia': {
        titulo: 'Bot Tibia',
        descricao: 'bot Tibia, para fazer runa, puxar blank runa do chão para bp, e tirar runa da pb botar pro chão, para poder rodar 24h, opcão de usar ring e soft boots para maior produção de runas possivel, se cair a internet e deslogar ele entra sozinho e continua fazendo runas.',
        tecnologias: ['Python', 'OpenCV', 'PyAutoGUI', 'PIL'],
        features: [
                'Automação de tarefas repetitivas',
                'Gerenciamento de inventário',
                'Detecção de eventos no jogo',
                'Configurações personalizáveis',
                'Monitoramento em tempo real'
        ],
        imagens: [
            'img/bot_tibia/bot_interface.png',
        ],
        github: 'https://github.com/JaimeCardozo2212/Bot_Fazer_Runa',
        demo: 'https://github.com/JaimeCardozo2212/Bot_Fazer_Runa'
    }
};
// ========== FILTRO DE HABILIDADES ==========
const categoryButtons = document.querySelectorAll('.category-btn');
const skillCards = document.querySelectorAll('.skill-card');

if (categoryButtons.length > 0) {
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active de todos
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Adiciona active no clicado
            button.classList.add('active');
            
            // Pega a categoria
            const category = button.getAttribute('data-category');
            
            // Filtra os cards
            skillCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}
// ========== FORMULÁRIO DE CONTATO ==========
const contatoForm = document.getElementById('contatoForm');
const statusMensagem = document.getElementById('statusMensagem');
const btnSubmit = document.querySelector('.btn-submit');
const btnText = document.querySelector('.btn-text');
const btnIcon = document.querySelector('.btn-icon');
const btnLoading = document.querySelector('.btn-loading');

if (contatoForm) {
    contatoForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Mostrar loading
        btnText.style.display = 'none';
        btnIcon.style.display = 'none';
        btnLoading.style.display = 'inline-block';
        
        // Pegar dados do formulário
        const formData = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            assunto: document.getElementById('assunto').value,
            mensagem: document.getElementById('mensagem').value
        };
        
        // SIMULAÇÃO DE ENVIO (SUBSTITUIR PELO SEU BACKEND)
        try {
            // Simular delay de rede
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Aqui você substituirá pela chamada real à sua API
            console.log('Dados do formulário:', formData);
            
            // Sucesso
            mostrarMensagem('success', '✅ Mensagem enviada com sucesso! Entrarei em contato em breve.');
            contatoForm.reset();
            
        } catch (error) {
            // Erro
            mostrarMensagem('error', '❌ Erro ao enviar mensagem. Tente novamente mais tarde.');
        } finally {
            // Esconder loading
            btnText.style.display = 'inline-block';
            btnIcon.style.display = 'inline-block';
            btnLoading.style.display = 'none';
        }
    });
}

// Função para mostrar mensagem de status
function mostrarMensagem(tipo, texto) {
    statusMensagem.textContent = texto;
    statusMensagem.className = 'status-mensagem ' + tipo;
    
    // Scroll até a mensagem
    statusMensagem.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Esconder após 5 segundos
    setTimeout(() => {
        statusMensagem.style.display = 'none';
    }, 5000);
}

// Aguarda o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    // Elementos do modal - AGORA COM VERIFICAÇÃO
    const modal = document.getElementById('projetoModal');
    
    // Se o modal não existir, não continua
    if (!modal) {
        console.log('Modal não encontrado');
        return;
    }
    
    const modalTitulo = document.querySelector('.modal-titulo');
    const modalDescricao = document.getElementById('modalDescricao');
    const modalTech = document.getElementById('modalTech');
    const modalFeatures = document.getElementById('modalFeatures');
    const modalImagemPrincipal = document.getElementById('modalImagemPrincipal');
    const modalMiniaturas = document.getElementById('modalMiniaturas');
    const modalLinkGithub = document.getElementById('modalLinkGithub');
    const modalLinkDemo = document.getElementById('modalLinkDemo');
    const modalFechar = document.querySelector('.modal-fechar');

    // Função para abrir o modal (disponível globalmente)
    window.abrirModal = function(projetoId) {
        console.log('Abrindo modal:', projetoId); // Para debug
        
        const projeto = projetosData[projetoId];
        if (!projeto) {
            console.log('Projeto não encontrado:', projetoId);
            return;
        }
        
        // Preencher informações
        if (modalTitulo) modalTitulo.textContent = projeto.titulo;
        if (modalDescricao) modalDescricao.textContent = projeto.descricao;
        
        // Tecnologias
        if (modalTech) {
            modalTech.innerHTML = projeto.tecnologias.map(tech => 
                `<span>${tech}</span>`
            ).join('');
        }
        
        // Features
        if (modalFeatures) {
            modalFeatures.innerHTML = projeto.features.map(feature => 
                `<li>${feature}</li>`
            ).join('');
        }
        
        // Links
        if (modalLinkGithub) modalLinkGithub.href = projeto.github;
        if (modalLinkDemo) modalLinkDemo.href = projeto.demo;
        
        // Imagens
        if (projeto.imagens && projeto.imagens.length > 0 && modalImagemPrincipal && modalMiniaturas) {
            modalImagemPrincipal.src = projeto.imagens[0];
            
            modalMiniaturas.innerHTML = projeto.imagens.map((img, index) => `
                <div class="miniatura ${index === 0 ? 'active' : ''}" onclick="trocarImagem(this, '${img}')">
                    <img src="${img}" alt="Miniatura ${index + 1}" onerror="this.src='https://via.placeholder.com/600x400/1a1a1a/00ff88?text=Imagem+${index+1}'">
                </div>
            `).join('');
        }
        
        // Mostrar modal
        if (modal) {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    };

    // Função para trocar imagem principal
    window.trocarImagem = function(elemento, imagemSrc) {
        if (!modalImagemPrincipal) return;
        
        // Atualizar imagem principal
        modalImagemPrincipal.src = imagemSrc;
        
        // Remover active de todas miniaturas
        document.querySelectorAll('.miniatura').forEach(min => {
            min.classList.remove('active');
        });
        
        // Adicionar active na miniatura clicada
        if (elemento) elemento.classList.add('active');
    };

    // Função para fechar modal
    function fecharModal() {
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    // Event listeners (só se os elementos existirem)
    if (modalFechar) {
        modalFechar.addEventListener('click', fecharModal);
    }

    // Fechar ao clicar fora do modal
    if (modal) {
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                fecharModal();
            }
        });
    }

    // Fechar com tecla ESC
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal && modal.style.display === 'block') {
            fecharModal();
        }
    });
});