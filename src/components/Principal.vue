<template>
    <div class="flex flex-col gap-32 py-10 mt-[60px]">
        <Sobre/>
        <Problemas/>
        <Solucao/>
        <Tecnologia/>
        <Beneficios/>
        <!-- <TESTE/> -->
        <Contato/>
        <div class="flex flex-col gap-6">
            <div class="bg-[#2A2A2A] min-h-[1px]"></div>
            <p class="text-corTextoSecundario text-[14px]">© 2024 Darp.</p>
        </div>
    </div>
</template>

<script>
    import Sobre from './sessions/Sobre.vue'
    import Problemas from './sessions/Problemas.vue'
    import Solucao from './sessions/Solucao.vue'
    import Tecnologia from './sessions/Tecnologia.vue'
    import Beneficios from './sessions/Beneficios.vue';
    import Contato from './sessions/Contato.vue';
    // import TESTE from './sessions/teste.vue';


export default {
    name: 'App',
    components: {
        Sobre,
        Problemas,
        Solucao,
        Tecnologia,
        Beneficios,
        Contato,
        // TESTE,
    }   
}
</script>