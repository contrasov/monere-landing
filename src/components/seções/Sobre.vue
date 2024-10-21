<template>
<div id="sobre" class="flex flex-row gap-16 mobile:flex-col mobile:gap-2 fade-in">
    <h1 class="text-corBranca text-[64px] font-bold text-nowrap mobile:text-[24px]" >Sobre Monere</h1>
    <p class="text-corTextoSecundario" >A Monere é um sistema desenvolvida pela software house Darp, focada em monitoramento da saúde bovina. 

        Utilizando sensores e inteligência artificial, a Monere permite o acompanhamento contínuo do 
        rebanho, prevenindo doenças com alertas em tempo real e otimizando a gestão para aumentar 
        a produtividade e reduzir custos. Com uma interface amigável e insights precisos, 
        a Monere transforma a maneira como o pecuarista gerencia seu tempo e seus recursos no campo.</p>
</div>
</template>

<script>
export default {
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        this.handleScroll(); // Check on mount
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
    handleScroll() {
        const elements = document.querySelectorAll('.fade-in, .slide-up');
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isVisible) {
                el.classList.add('animate');
            } else {
                el.classList.remove('animate');
            }
        });
    }
}
}
</script>
