<script setup>
import Header from './components/TelaInicial.vue'
import Principal from './components/Principal.vue'
</script>

<template>
  <section id="background" class="bg-cover bg-center px-[60px] py-[24px] mobile:px-[12px]  big:px-80">
    <Header/>
  </section>
  <div class="px-[60px] mobile:px-[12px] big:px-80">
    <Principal/>
  </div>
</template>
