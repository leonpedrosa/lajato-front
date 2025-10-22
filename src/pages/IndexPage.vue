<template>
  <q-page class="q-pa-md">
    <q-list bordered separator v-if="lavagens.length">
      <q-item v-for="lav in lavagens" :key="lav.id">
        <q-item-section>
          <q-item-label class="text-weight-bold">Placa: {{ lav.placa }}</q-item-label>
          <q-item-label caption>
            Lavagem: {{ lav.type_lavagem?.name || 'Sem tipo' }} — R$
            {{ (lav.type_lavagem?.valor ?? 0).toFixed(2) }}
          </q-item-label>
          <q-item-label caption> Hora pedido: {{ formatDate(lav.timestamp) }} </q-item-label>
          <q-item-label caption> Status: {{ lav.status.st }} </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

    <q-banner v-else class="q-mt-md" rounded> Sem lavagens ainda </q-banner>
  </q-page>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { api } from 'src/boot/axios'

const lavagens = ref([])

async function fetchLavagens() {
  const { data } = await api.get('lavagem/')
  console.log(data)
  lavagens.value = data
}

function formatDate(iso) {
  if (!iso) return ''
  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(new Date(iso))
}

onMounted(async () => {
  await fetchLavagens()
})
</script>
