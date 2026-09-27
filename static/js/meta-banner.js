// =====================================================
//  BANNER DA META DE SPOILERS
//  Injeta o banner sozinho em qualquer pagina do portal.
//  A meta e lida direto do GoatCounter (numero real).
// =====================================================

(function () {

    // Não mostra na pagina que já tem a area de spoilers
    if (document.getElementById('spoilers')) return;

    const META = 500; // manter igual ao META de templates/membros.html
    const CHAVE = 'metaBannerVisto';
    const DIAS = 3;
    const SEGUNDOS = 6;

    const CSS = `
    .meta-banner {
        position: fixed;
        left: 0; right: 0; bottom: 0;
        z-index: 9999;

        padding: 16px 18px;

        background: linear-gradient(90deg, #05080a 0%, #0a1410 60%, #0d1f18 100%);
        border-top: 2px solid #00e096;

        box-shadow: 0 -20px 50px -20px rgba(0, 224, 150, .45);

        transform: translateY(120%);
        transition: transform .5s cubic-bezier(.2, .8, .2, 1);
    }
    .meta-banner.visivel { transform: translateY(0); }

    .meta-banner .mb-inner {
        width: min(1100px, 100%);
        margin: 0 auto;

        display: flex;
        align-items: center;
        gap: 18px;
    }

    .meta-banner .mb-icone {
        flex-shrink: 0;
        width: 42px; height: 42px;

        display: flex; align-items: center; justify-content: center;

        background: rgba(0, 224, 150, .12);
        border: 1px solid #00e096;
        color: #00e096;
        font-size: 18px;
    }

    .meta-banner .mb-texto { flex: 1; min-width: 0; }

    .meta-banner .mb-label {
        display: block;

        color: #00e096;
        font-size: 9px;
        font-weight: 900;
        letter-spacing: 2px;
    }

    .meta-banner .mb-titulo {
        display: block;
        margin: 2px 0 7px;

        color: #fff;
        font-family: "Bebas Neue", Impact, sans-serif;
        font-size: 23px;
        line-height: 1.1;
    }

    .meta-banner .mb-barra {
        height: 7px;
        background: #05080a;
        border: 1px solid #2a2f3a;
    }

    .meta-banner .mb-barra i {
        display: block;
        width: 0;
        height: 100%;
        background: linear-gradient(90deg, #006c46, #00e096);
        box-shadow: 0 0 12px rgba(0, 224, 150, .6);
        transition: width .9s ease;
    }

    .meta-banner .mb-nota {
        display: block;
        margin-top: 6px;

        color: #6a707b;
        font-size: 11px;
    }

    .meta-banner .mb-cta {
        flex-shrink: 0;

        padding: 12px 20px;

        background: #00A86B;
        border: 1px solid #00e096;
        color: #050608;

        font-size: 11px;
        font-weight: 900;
        letter-spacing: 1px;
        text-decoration: none;
        white-space: nowrap;

        transition: .2s;
    }

    .meta-banner .mb-cta:hover {
        background: #00e096;
        transform: scale(1.03);
    }

    .meta-banner .mb-fechar {
        flex-shrink: 0;

        width: 28px; height: 28px;

        background: none;
        border: none;

        color: #6a707b;
        font-size: 20px;
        line-height: 1;
        cursor: pointer;
    }

    .meta-banner .mb-fechar:hover { color: #fff; }

    @media (max-width: 700px) {
        .meta-banner { padding: 14px; }
        .meta-banner .mb-icone { display: none; }
        .meta-banner .mb-titulo { font-size: 19px; }
        .meta-banner .mb-cta { padding: 10px 14px; font-size: 10px; }
    }
    `;

    const estilo = document.createElement('style');
    estilo.textContent = CSS;
    document.head.appendChild(estilo);

    // Espaço pro banner não cobrir o rodapé
    document.body.style.paddingBottom = '0px';

    const banner = document.createElement('div');
    banner.className = 'meta-banner';
    banner.innerHTML =
        '<div class="mb-inner">' +
            '<span class="mb-icone">▶</span>' +
            '<div class="mb-texto">' +
                '<span class="mb-label">META DE SPOILERS • DOUTOR DESTINO</span>' +
                '<span class="mb-titulo" id="mbTitulo">Carregando...</span>' +
                '<div class="mb-barra"><i id="mbBarra"></i></div>' +
                '<span class="mb-nota" id="mbNota"></span>' +
            '</div>' +
            '<a class="mb-cta" href="membros.html#spoilers">VER SPOILERS</a>' +
            '<button class="mb-fechar" id="mbFechar" aria-label="Fechar">×</button>' +
        '</div>';
    document.body.appendChild(banner);

    const titulo = banner.querySelector('#mbTitulo');
    const nota = banner.querySelector('#mbNota');
    const barra = banner.querySelector('#mbBarra');
    const cta = banner.querySelector('.mb-cta');
    const fechar = banner.querySelector('#mbFechar');

    const numeroBR = valor => valor.toLocaleString('pt-BR');
    const metaTotal = { valor: 0 };

    function pintar() {
        const total = metaTotal.valor;
        const percentual = Math.min(100, Math.round((total / META) * 100));

        barra.style.width = percentual + '%';

        if (total >= META) {
            titulo.textContent = 'META BATIDA! Os spoilers já estão liberados.';
            nota.textContent = 'Bateu a meta: ' + numeroBR(total) + ' acessos no portal.';
            cta.textContent = 'ASSISTIR AGORA';
            barra.style.width = '100%';
            return;
        }

        const faltam = META - total;
        titulo.textContent =
            numeroBR(faltam) + ' acessos e eu libero o vídeo';
        nota.textContent =
            'Faltam ' + numeroBR(faltam) + ' de ' + numeroBR(META) +
            ' acessos (' + percentual + '%) para abrir o spoiler do Doomsday.';
    }

    function mostrar() {
        if (banner.classList.contains('visivel')) return;
        banner.classList.add('visivel');
        document.body.style.paddingBottom = '150px';
    }

    function esconder() {
        banner.classList.remove('visivel');
        document.body.style.paddingBottom = '0px';
    }

    // Fecha e lembra por alguns dias
    fechar.addEventListener('click', function () {
        esconder();
        try {
            localStorage.setItem(CHAVE, Date.now().toString());
        } catch (err) { }
    });

    // Se já fechou, não mostra de novo (mas volta depois de uns dias)
    let visto = 0;
    try {
        visto = parseInt(localStorage.getItem(CHAVE) || '0', 10) || 0;
    } catch (err) { }

    const expirou = (Date.now() - visto) > DIAS * 24 * 60 * 60 * 1000;

    pintar();

    if (expirado) {
        // Aparece depois de alguns segundos na página
        setTimeout(mostrar, SEGUNDOS * 1000);

        // Ou antes, se a pessoa descer a página
        window.addEventListener('scroll', function checar() {
            if (window.innerHeight + window.scrollY >
                document.body.scrollHeight * 0.6) {
                mostrar();
            }
        }, { passive: true });
    }

    // Busca o total real no GoatCounter
    fetch('https://gustavo.goatcounter.com/counter/TOTAL.json')
        .then(resp => resp.json())
        .then(data => {
            metaTotal.valor =
                parseInt(String(data.count).replace(/\D/g, ''), 10) || 0;
            pintar();
        })
        .catch(function () {
            titulo.textContent = 'Spoiler exclusivo do Doutor Destino';
            nota.textContent = 'Meta de acessos para liberar o vídeo.';
        });

})();
