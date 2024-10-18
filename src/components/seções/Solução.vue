<template>
    <section id="solucao" class="flex flex-col gap-10">
        <div class="flex flex-col gap-1 max-w-[749px]" >
            <h1 class="text-corBranca text-[40px] font-bold text-wrap mobile:text-[24px]" >Como a Monere Transforma a Gestão de Saúde do Rebanho</h1>
            <p class="text-corTextoSecundario" >
                A Monere estabelece um ecossistema, prevenindo doenças, aumentando a produtividade e reduzindo custos no campo.            </p>
        </div>
        <div class="flex flex-row gap-5 mobile:flex-wrap">
            <Card
            v-for="(card, index) in cards"
            :key="index"
            :title="card.title"
            :description="card.description"
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
                {title: 'Monitoramento contínuo da saúde dos bovinos por sensores e IA', description: 'Sensores e IA acompanham a saúde dos bovinos 24/7, garantindo controle total.'},
                {title: 'Prevenção de doenças com alertas em tempo real', description: 'Alertas em tempo real permitem a detecção precoce de doenças, evitando surtos.'},
                {title: 'Redução de custos e aumento da produtividade', description: 'A gestão eficiente diminui gastos com tratamentos e melhora a produtividade geral.',}
            ]
        }
    }
}

</script>