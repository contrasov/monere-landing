<template>
    <section id="tecnologia" class="flex flex-row justify-between">
        <div class="flex flex-col gap-10 fade-in opacity-0">
            <div class="flex flex-col gap-1 max-w-[492px]" >
                <h1 class="text-corBranca text-[40px] font-bold text-wrap mobile:text-[24px]" >Tecnologia de Ponta para o Campo</h1>
                <p class="text-corTextoSecundario" >
                    Sensores e IA avançada garantem monitoramento preciso da saúde bovina, 
                    otimizando a gestão rural. 
                </p>
            </div>
            <div class="mobile:flex mobile:flex-wrap mobile:gap-5">
                <span class="flex flex-row gap-3 items-center">
                    <img src="/src/assets/tec-icon.svg" class="mobile:max-h-7">
                    <p class="text-corBranca font-bold">Inteligência Artificial para análise preditiva</p>
                </span>
                <span class="flex flex-row gap-3 items-center">
                    <img src="/src/assets/tec-icon.svg" class="mobile:max-h-7">
                    <p class="text-corBranca font-bold">Sensores avançados para monitoramento de sinais vitais</p>
                </span>
                <span class="flex flex-row gap-3 items-center">
                    <img src="/src/assets/tec-icon.svg" class="mobile:max-h-7">
                    <p class="text-corBranca font-bold">Interface amigável para o produtor, acessível via app</p>
                </span>
            </div>
        </div>
        <img src="/src/assets/cards-image.svg" class="max-h-[435px] mobile:hidden slide-right opacity-0">
    </section>
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
            const elements = document.querySelectorAll('.fade-in');
            elements.forEach(el => {
                const rect = el.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
                
                if (isVisible) {
                    el.classList.add('animate');
                }
            });
        }
    }
}
</script>
