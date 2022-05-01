export default function initModal() {
    const botaoAbrir = document.querySelector('[data-modal="abrir"]');
    const botaoFechar = document.querySelector('[data-modal="fechar"]');
    const containerModal = document.querySelector('[data-modal="container"]');

    function toogleModal(event) {
        event.preventDefault();
        containerModal.classList.toggle('ativo');
    }

    function cliqueForaModal(event) {
        if (event.target === this) {
            toogleModal(event);
        }
    }

    if (botaoAbrir && botaoFechar && containerModal) {
        botaoAbrir.addEventListener('click', toogleModal);
        botaoFechar.addEventListener('click', toogleModal);
        containerModal.addEventListener('click', cliqueForaModal);
    }
}
