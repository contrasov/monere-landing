<template>
    <section class="flex flex-col gap-10">
        <div class="flex flex-col gap-1 max-w-[749px]" >
            <h1 class="text-corBranca text-[40px] font-bold text-wrap" >Resultados que Fazem a Diferença</h1>
            <p class="text-corTextoSecundario" >
                A Monere melhora a produtividade, reduz custos e previne doenças, trazendo ganhos reais ao produtor rural.            
            </p>
        </div>
        <div class="flex gap-5 flex-wrap border border-corVerde">
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
                {title: 'Bem-estar animal', description: 'Monitoramos a saúde do rebanho com dados das coleiras, gerando relatórios simples e gráficos que identificam sinais de doenças de forma ágil e precisa.'},
                {title: 'Melhora na gestão', description: 'Nossa IA transforma dados das coleiras em recomendações automáticas para o pecuarista, otimizando a gestão do rebanho.'},
                {title: 'Maior produtividade', description: 'A IA oferece insights inteligentes, ajudando a tomar decisões estratégicas para aumentar a eficiência da fazenda.'},
                {title: 'Entregar uma assistência de auditoria para o pecuarista', description: 'Identificamos problemas e melhorias com base nos dados coletados, economizando tempo e recursos do pecuarista.'},
                {title: 'Facilidade em Auditar', description: 'Nossa solução integrada usa machine learning para garantir análises seguras e detalhadas, alimentadas pelos dados das coleiras.'},
                {title: 'E mais', description: 'traremos mais recursos e melhorias para transformar ainda mais a gestão da sua propriedade.'},
            ]
        }
    }
}

</script>