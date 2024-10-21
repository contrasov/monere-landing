<template>
    <div class="flex justify-between">
        <div class="flex flex-row items-center gap-9">
            <img src="/src/assets/logo-monere.svg">
            <ul class="flex gap-4 text-corBranca mobile:hidden">
                <li @click="scrollToSection('sobre')"><a href="#">Sobre</a></li>
                <li @click="scrollToSection('problemas')"><a href="#">Problemas</a></li>
                <li @click="scrollToSection('solucao')"><a href="#">Solução</a></li>
                <li @click="scrollToSection('tecnologia')"><a href="#">Tecnologia</a></li>
                <li @click="scrollToSection('beneficios')"><a href="#">Benefícios</a></li>
            </ul>
        </div>
        <button @click="scrollToSection('contato')" class="text-corBranca bg-corVerde rounded-lg px-[15px] py-[2px]">
            Contato
        </button>
    </div>
    
    <div class="text-corBranca text-[72px] font-semibold leading-[5rem] py-[10%] max-w-2xl 
    mobile:text-[50px] mobile:leading-none mobile:max-w-fit mobile:py-[160px] mobile:font-bold">
        <h1>Monitoramento Inteligente para Saúde Bovina</h1>
    </div>
</template>

<script>
export default {
    methods: {
        scrollToSection(sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                const offset = 50;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Ajuste a duração do scroll (em milissegundos)
                const scrollDuration = 999;
                setTimeout(() => {
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'auto'
                    });
                }, scrollDuration);
            } else {
                console.error(`Element with ID ${sectionId} not found`);
            }
        }
    }
}
</script>
