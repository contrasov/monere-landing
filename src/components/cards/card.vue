<template>
<div class="flex flex-col gap-3 py-[32px] px-[24px] min-w-[400px] max-w-[400px] bg-corCard rounded-[13px] border-[1px] border-corBorda
 mobile:max-w-fit mobile:min-w-fit
">
    <h2 class="text-corBranca text-[18px] 
    mobile:text-[16px] font-bold
    ">{{ title }}</h2>
    <p class="text-corTextoSecundario text-[16px] max-w-[360px]
    ">{{ description }}</p>
</div>

</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }
}

</script>