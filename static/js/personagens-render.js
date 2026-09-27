// ==========================================
// RENDERIZAÇÃO AUTOMÁTICA DA PÁGINA DE PERSONAGENS
// ==========================================
// Este script lê o array CHARACTERS (characters-data.js) e monta:
// - o card de destaque no topo
// - a grade de personagens
// - os filtros (Todos / Heróis / Vilões / Quarteto Fantástico / X-Men)
// - a paginação
// Não precisa mexer aqui pra adicionar personagem — só em characters-data.js

const PERSONAGENS_POR_PAGINA = 8;

let filtroAtual = "todos";
let paginaAtual = 1;


function personagemPassaNoFiltro(personagem, filtro) {

    if (filtro === "todos") return true;
    if (filtro === "herois") return personagem.faccao === "heroi";
    if (filtro === "viloes") return personagem.faccao === "vilao";

    return personagem.grupos && personagem.grupos.includes(filtro);

}


function renderizarDestaque() {

    const destinoEl = document.querySelector(".featured-character");

    if (!destinoEl) return;

    const principal = CHARACTERS.find(p => p.principal) || CHARACTERS[0];

    if (!principal) return;

    const badgeClasse = principal.faccao === "vilao" ? "villain" : "hero";
    const badgeTexto = (principal.destaque && principal.destaque.badge)
        ? principal.destaque.badge
        : (principal.faccao === "vilao" ? "VILÃO" : "HERÓI");

    const descricao = (principal.destaque && principal.destaque.descricao) || "";

    destinoEl.innerHTML = `
        <div class="featured-character-img">
            <img src="${principal.imagem}" alt="${principal.nome}">
        </div>

        <div class="featured-character-content">

            <span class="faction-badge ${badgeClasse}">${badgeTexto}</span>

            <h2>${principal.nome}</h2>

            <p class="featured-character-actor">Interpretado por ${principal.ator}</p>

            <p>${descricao}</p>

            <button
                class="primary-button"
                onclick="abrirPersonagem('${principal.id}')">
                VER PERFIL COMPLETO
            </button>

        </div>
    `;

}


function criarCardPersonagem(personagem) {

    const badgeClasse = personagem.faccao === "vilao" ? "villain" : "hero";
    const badgeTexto = personagem.faccao === "vilao" ? "Vilão" : "Herói";

    const card = document.createElement("a");
    card.href = "#";
    card.className = "character-card";
    card.dataset.faccao = personagem.faccao;
    card.dataset.grupos = (personagem.grupos || []).join(",");

    card.innerHTML = `
        <img src="${personagem.imagem}" alt="${personagem.nome}">
        <span class="faction-badge ${badgeClasse}">${badgeTexto}</span>
        <div class="card-overlay">
            <span>${personagem.nome.toUpperCase()}</span>
            <h3>${personagem.ator}</h3>
        </div>
    `;

    card.addEventListener("click", (e) => {
    e.preventDefault();
    abrirPersonagem(personagem.id);
});

    return card;

}


function renderizarGrade() {

    const grid = document.querySelector(".cards-grid");

    if (!grid) return;

    const personagensFiltrados =
        CHARACTERS.filter(p => personagemPassaNoFiltro(p, filtroAtual));

    const totalPaginas =
        Math.max(1, Math.ceil(personagensFiltrados.length / PERSONAGENS_POR_PAGINA));

    if (paginaAtual > totalPaginas) paginaAtual = totalPaginas;

    const inicio = (paginaAtual - 1) * PERSONAGENS_POR_PAGINA;
    const fim = inicio + PERSONAGENS_POR_PAGINA;

    const personagensDaPagina =
        personagensFiltrados.slice(inicio, fim);

    grid.innerHTML = "";

    personagensDaPagina.forEach(personagem => {
        grid.appendChild(criarCardPersonagem(personagem));
    });

    renderizarPaginacao(totalPaginas);

}


function renderizarPaginacao(totalPaginas) {

    const nav = document.querySelector(".pagination");

    if (!nav) return;

    // se só tem 1 página, esconde a paginação
    if (totalPaginas <= 1) {
        nav.innerHTML = "";
        return;
    }

    let html = `<a href="#" class="page-btn prev" data-acao="anterior">← Anterior</a>`;

    for (let i = 1; i <= totalPaginas; i++) {
        html += `<a href="#" class="page-num ${i === paginaAtual ? "active" : ""}" data-pagina="${i}">${i}</a>`;
    }

    html += `<a href="#" class="page-btn next" data-acao="proxima">Próxima →</a>`;

    nav.innerHTML = html;

    nav.querySelectorAll("[data-pagina]").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            paginaAtual = Number(link.dataset.pagina);
            renderizarGrade();
        });
    });

    const prev = nav.querySelector("[data-acao='anterior']");
    const next = nav.querySelector("[data-acao='proxima']");

    if (prev) prev.addEventListener("click", (e) => {
        e.preventDefault();
        if (paginaAtual > 1) {
            paginaAtual--;
            renderizarGrade();
        }
    });

    if (next) next.addEventListener("click", (e) => {
        e.preventDefault();
        if (paginaAtual < totalPaginas) {
            paginaAtual++;
            renderizarGrade();
        }
    });

}


function ativarFiltros() {

    const chips = document.querySelectorAll(".filter-chip");

    chips.forEach(chip => {

        chip.addEventListener("click", () => {

            chips.forEach(c => {
                c.classList.remove("active");
                c.setAttribute("aria-pressed", "false");
            });

            chip.classList.add("active");
            chip.setAttribute("aria-pressed", "true");

            filtroAtual = chip.dataset.filter || "todos";
            paginaAtual = 1;

            renderizarGrade();

        });

    });

}


document.addEventListener("DOMContentLoaded", () => {

    renderizarDestaque();
    ativarFiltros();
    renderizarGrade();

});


const modal = document.getElementById("personagemModal");

const imgModal = document.getElementById("personagemImagem");
const nomeModal = document.getElementById("personagemNome");
const atorModal = document.getElementById("personagemAtor");
const resumoModal = document.getElementById("personagemResumo");
const origemModal = document.getElementById("personagemOrigem");
const filmesModal = document.getElementById("personagemFilmes");
const hqsModal = document.getElementById("personagemHQs");
const grupoModal = document.getElementById("personagemGrupo");

function abrirPersonagem(id){

    const personagem = CHARACTERS.find(p => p.id === id);

    if(!personagem) return;

    imgModal.src = personagem.imagem;

    nomeModal.textContent = personagem.nome;

    atorModal.textContent =
        "Interpretado por " + personagem.ator;

    resumoModal.textContent =
        personagem.resumo || "";

    origemModal.textContent =
        personagem.origem || "";

    filmesModal.textContent =
        personagem.filmes || "";

    hqsModal.textContent =
        personagem.hqs || "";

    const forcaBar = document.getElementById("forcaBar");
    const inteligenciaBar = document.getElementById("inteligenciaBar");
    const magiaBar = document.getElementById("magiaBar");
    const combateBar = document.getElementById("combateBar");

    grupoModal.textContent =
        personagem.grupos[0]?.toUpperCase() || "MARVEL";

    forcaBar.style.width = (personagem.forca || 0) + "%";
    inteligenciaBar.style.width = (personagem.inteligencia || 0) + "%";
    magiaBar.style.width = (personagem.magia || 0) + "%";
    combateBar.style.width = (personagem.combate || 0) + "%";

    modal.classList.add("ativo");

    document.body.style.overflow = "hidden";
}

document
.getElementById("fecharModal")
.addEventListener("click", fecharModal);

function fecharModal(){

    modal.classList.remove("ativo");

    document.body.style.overflow = "auto";
}

modal.addEventListener("click", function(e){

    if(e.target === modal){
        fecharModal();
    }

});

