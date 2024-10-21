<template>
    <section id="problemas" class="flex flex-col gap-10">
        <div class="flex flex-col gap-1 fade-in">
            <h1 class="text-corVerdeClaro text-[40px] font-bold text-wrap mobile:text-[24px]" >Desafios na Pecuária Moderna</h1>
            <p class="text-corTextoSecundario" >
            Gestão ineficiente e desperdício de recursos ameaçam a produtividade na pecuária atual.
            </p>
        </div>
        <div class="flex flex-row gap-5 md:flex-col mobile:flex-col big:flex">
            <Card
            v-for="(card, index) in cards"
            :key="index"
            :title="card.title"
            :description="card.description"
            :class="index % 2 === 0 ? 'slide-left' : 'slide-right'"
            />
        </div>
    </section>
</template>

<script>
import Card from '../cards/card.vue';

export default {
    name: 'App',
    components: {
        Card,
    },
    data() {
        return {
            cards: [
                {title: 'A dificuldade em detectar doenças precocemente', description: 'A ausência de monitoramento constante impede o diagnóstico precoce e a prevenção.'},
                {title: 'Perda de produtividade devido a enfermidades não monitoradas', description: 'Sem controle eficaz, doenças não monitoradas afetam a saúde e o rendimento do rebanho.'},
                {title: 'Alto custo com tratamentos corretivos', description: 'A falta de prevenção leva a tratamentos corretivos caros e maior uso de medicamentos.',}
            ]
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        this.handleScroll(); // Check on mount
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const elements = document.querySelectorAll('.fade-in, .slide-left, .slide-right');
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
