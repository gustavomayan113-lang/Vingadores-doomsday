// ===== equipes.js =====
// Liga os cards da index.html (que apontam para equipes.html#destino,
// equipes.html#quarteto, equipes.html#xmen, equipes.html#vingadores)
// com a seção correspondente nesta página: faz a rolagem suave até lá
// e acende um destaque rápido na seção, considerando o header fixo.

document.addEventListener("DOMContentLoaded", () => {

    const HEADER_OFFSET = 90; // altura aproximada do header fixo

    function irParaSecao(hash, comAnimacao) {
        if (!hash) return;

        const alvo = document.querySelector(hash);
        if (!alvo) return;

        const topoAlvo = alvo.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;

        window.scrollTo({
            top: topoAlvo,
            behavior: comAnimacao ? "smooth" : "auto"
        });

        // destaque visual rápido na seção acessada
        alvo.classList.add("highlight");
        setTimeout(() => alvo.classList.remove("highlight"), 1600);
    }

    // Ao carregar a página vindo de um card da index.html (ex: equipes.html#destino)
    if (window.location.hash) {
        // pequeno delay pra garantir que imagens/layout já carregaram
        setTimeout(() => irParaSecao(window.location.hash, true), 150);
    }

    // Se o usuário clicar em algum link interno com # dentro da própria página
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", (e) => {
            const hash = link.getAttribute("href");
            const alvo = document.querySelector(hash);
            if (alvo) {
                e.preventDefault();
                irParaSecao(hash, true);
                history.pushState(null, "", hash);
            }
        });
    });

});
