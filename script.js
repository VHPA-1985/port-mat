const habilidadeSelect = document.getElementById('habilidadeSelect');
const subHabilidadeSelect = document.getElementById('subHabilidadeSelect');
const subHabilidadeContainer = document.getElementById('subHabilidadeContainer');
const explicacao = document.getElementById('explicacao');
const textoExplicacao = document.getElementById('textoExplicacao');
const imgMapaMental = document.getElementById('imgMapaMental');
const resetButton = document.getElementById('resetButton');
const imagemAmpliada = document.getElementById('imagemAmpliada');
const imagemGrande = document.getElementById('imagemGrande');
const fecharImagem = document.getElementById('fecharImagem');

imgMapaMental.addEventListener('click', function() {
    // Exibe a imagem ampliada
    imagemAmpliada.style.display = 'block';
    imagemGrande.src = imgMapaMental.src;  // Define a imagem ampliada com a mesma src da imagem clicada
});

// Fecha a imagem ampliada ao clicar no "X"
fecharImagem.addEventListener('click', function() {
    imagemAmpliada.style.display = 'none';  // Esconde a imagem ampliada
});

const subHabilidades = {
    "EM13MAT301": {
        "Sistemas Lineares": {
            descricao: "Sistemas lineares são equações com as mesmas variáveis, e sua solução é o ponto onde se interceptam. São usados em otimização, engenharia e redes econômicas, e resolvidos por métodos como substituição, adição e matrizes.",
            mapa: "sisLineares.jpg"
        },
        "Matriz": {
            descricao: "Uma matriz é uma tabela usada para representar sistemas lineares e é fundamental em operações como adição, multiplicação e inversão. Ela também é aplicada em computação gráfica, redes de computadores, aprendizado de máquina e física.",
            mapa: "matrizes.jpg"
        }
    },
    "EM13MAT305": {
        "Função Logarítmica": {
            descricao: "A função logarítmica, inversa da exponencial, resolve equações com expoentes e facilita cálculos ao transformar multiplicações em somas. É usada para modelar fenômenos como juros compostos e desintegração radioativa.",
            mapa: "funcLogaritima.jpg"
        },
        "Logaritmo": {
            descricao: "O logaritmo resolve equações exponenciais e tem aplicações em áreas como a escala Richter, criptografia, análise de algoritmos e medição de pH na química..",
            mapa: "logaritmo.jpg"
        }
    },
    "EM13MAT403": {
        "Potência": {
            descricao: "As funções de potência envolvem uma base elevada a um expoente e são usadas para descrever fenômenos como o crescimento populacional, juros compostos e radiação em reações nucleares. Elas também são aplicadas em física, como na lei da gravitação de Newton.",
            mapa: "potencicao.jpg"
        },
        "Função Exponencial": {
            descricao: "A função exponencial descreve o crescimento ou decaimento rápido de uma quantidade, expressa por f(x)=axf(x)=ax, onde aa é uma constante positiva. Ela é usada em fenômenos naturais, como crescimento populacional e decomposição química, e também em finanças, como no cálculo de juros compostos.",
            mapa: "funcExponecial.jpg"
        }
    }
};

habilidadeSelect.addEventListener('change', function() {
    const habilidade = habilidadeSelect.value;
    if (habilidade) {
        subHabilidadeContainer.style.display = 'block';
        subHabilidadeSelect.innerHTML = '<option value="">Selecione um tópico...</option>';
        Object.keys(subHabilidades[habilidade]).forEach(subHabilidade => {
            let option = document.createElement('option');
            option.value = subHabilidade;
            option.textContent = subHabilidade;
            subHabilidadeSelect.appendChild(option);
        });
        explicacao.style.display = 'none';
    } else {
        subHabilidadeContainer.style.display = 'none';
        explicacao.style.display = 'none';
    }
});

subHabilidadeSelect.addEventListener('change', function() {
    const habilidade = habilidadeSelect.value;
    const subHabilidade = subHabilidadeSelect.value;
    if (subHabilidade) {
        explicacao.style.display = 'block';
        textoExplicacao.textContent = subHabilidades[habilidade][subHabilidade].descricao;
        imgMapaMental.src = subHabilidades[habilidade][subHabilidade].mapa;
    } else {
        explicacao.style.display = 'none';
    }
});

resetButton.addEventListener('click', function() {
    habilidadeSelect.value = '';
    subHabilidadeSelect.innerHTML = '<option value="">Selecione um tópico...</option>';
    subHabilidadeContainer.style.display = 'none';
    explicacao.style.display = 'none';
    textoExplicacao.textContent = '';
    imgMapaMental.src = '';
});
