<template>
    <section id="contato" class="flex flex-row justify-between items-center 
    mobile:flex-wrap mobile:gap-8 mobile:justify-center fade-in">
        <div class="flex-col gap-1 max-w-fit text-center hidden mobile:block slide-up">
            <h1 class="text-corBranca text-[50px] font-bold text-wrap mobile:text-[24px]" >Monere: Inovação a Serviço da Pecuária</h1>
            <p class="text-corTextoSecundario" >
                Junte-se à Monere e apoie a inovação na pecuária. Entre em contato para parcerias e faça parte dessa transformação no campo!
            </p>
        </div>
        
        <div class="flex flex-col gap-6">
            <span class="flex flex-row gap-6">
                <img src="/src/assets/mail-02.svg">
                <p class="font-bold text-corBranca text-[24px]">sistemamonere@gmail.com</p>
            </span>
            <span class="flex flex-row gap-6">
                <img src="/src/assets/message-notification-circle.svg">
                <p class="font-bold text-corBranca text-[24px]">(85) 98142-8261</p>
            </span>
            <span class="flex flex-row gap-6">
                <img src="/src/assets/marker-pin-01.svg">
                <p class="font-bold text-corBranca text-[24px]">Russas, CE</p>
            </span>
        </div>

        <div class="flex flex-col gap-1 max-w-[700px] text-center mobile:hidden slide-up" >
            <h1 class="text-corBranca text-[50px] font-bold text-wrap" >Monere: Inovação a Serviço da Pecuária</h1>
            <p class="text-corTextoSecundario" >
                Junte-se à Monere e apoie a inovação na pecuária. Entre em contato para parcerias e faça parte dessa transformação no campo!
            </p>
        </div>
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
