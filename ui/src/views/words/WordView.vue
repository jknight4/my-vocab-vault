<script setup lang="ts">
import FooterNavigation from '@/components/common/FooterNavigation.vue'
import Logo from '@/components/common/Logo.vue'
import DetailedWordCard from '@/components/DetailedWordCard.vue'
import { useWordStore } from '@/stores/wordsStore'

import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const wordStore = useWordStore()

onMounted(() => {
  console.log(route.params.word)
  wordStore.findWord(route.params.word)
})

</script>

<template>
  <div class="container">
      <header>
      <Logo />
    </header>
    <main>
        <DetailedWordCard :word="wordStore.selectedWord"/>
    </main>
    <FooterNavigation />
  </div>
</template>
