<template>
    <div class="flex flex-col gap-32 py-10 mt-[60px]">
        <Sobre/>
        <Problemas/>
        <Solução/>
        <Tecnologia/>
        <Beneficios/>
        <Contato/>
        <div class="flex flex-col gap-6">
            <div class="bg-[#2A2A2A] min-h-[1px]"></div>
            <p class="text-corTextoSecundario text-[14px]">© 2024 Auris.</p>
        </div>
    </div>
</template>

<script>
import Sobre from './seções/Sobre.vue'
import Problemas from './seções/Problemas.vue'
import Solução from './seções/Solução.vue'
import Tecnologia from './seções/Tecnologia.vue'
import Beneficios from './seções/Beneficios.vue';
import Contato from './seções/Contato.vue';


export default {
    name: 'App',
    components: {
        Sobre,
        Problemas,
        Solução,
        Tecnologia,
        Beneficios,
        Contato,
    }   
}
</script>