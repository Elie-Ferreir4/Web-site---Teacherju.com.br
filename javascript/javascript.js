    // Abrir links externos em uma nova aba
    document.addEventListener('DOMContentLoaded', function() {
        var links = document.querySelectorAll('a[href^="http"]:not([target])');
        links.forEach(function(link) {
            link.setAttribute('target', '_blank');
        });

        // Scroll suave para âncoras
        var linksAnchor = document.querySelectorAll('a[href^="#"]');
        linksAnchor.forEach(function(link) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                var targetId = this.getAttribute('href').substring(1);
                var targetElement = document.getElementById(targetId);
                if (targetElement) {
                    var offsetTop = targetElement.offsetTop;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Controle de Navegação do Carrossel
        var carousel = document.getElementById('carousel-spotify');
        var carouselNext = carousel.querySelector('.carousel-control-next');
        var carouselPrev = carousel.querySelector('.carousel-control-prev');
        carouselNext.addEventListener('click', function() {
            carouselNext.parentElement.carousel('next');
        });
        carouselPrev.addEventListener('click', function() {
            carouselPrev.parentElement.carousel('prev');
        });

        // Animação de rotação do celular na seção de recursos
        var celular = document.getElementById('cell1');
        celular.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.5s';
            this.style.transform = 'rotate(-45deg)';
        });
        celular.addEventListener('mouseleave', function() {
            this.style.transition = 'transform 0.5s';
            this.style.transform = 'rotate(-35deg)';
        });
    });