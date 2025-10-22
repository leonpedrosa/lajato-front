<template>
  <q-page class="q-pa-sm">
    <q-card bordered class="q-pa-sm q-ma-sm">
      <q-card-section>
        <div class="text-h6">Status</div>
        <div class="text-subtitle2">
          <q-btn
            label="Adicionar Status"
            size="0.8rem"
            color="blue"
            flat
            dense
            round
            icon="add"
            @click="showDialogNewStatus()"
          />
        </div>
      </q-card-section>

      <q-separator dark inset />

      <q-card-section>
        <q-table
          dense
          flat
          hide-bottom
          :rows-per-page-options="[0]"
          :columns="colunsStatus"
          :rows="statusrows"
          no-data-label="Não há status cadastrados"
        >
        </q-table>
      </q-card-section>
    </q-card>

    <q-card bordered class="q-pa-sm q-ma-sm">
      <q-card-section>
        <div class="text-h6">Pacotes de Lavagens</div>
        <div class="text-subtitle2">
          <q-btn
            label="Adicionar pacote"
            size="0.8rem"
            color="blue"
            flat
            dense
            round
            icon="add"
            @click="addLavagem()"
          />
        </div>
      </q-card-section>

      <q-separator dark inset />

      <q-card-section>
        <q-table
          dense
          flat
          hide-bottom
          :rows-per-page-options="[0]"
          :columns="colunsTypeLavagens"
          :rows="typeLavagensrows"
          no-data-label="Não há Pacotes cadastrados"
        >
          <template v-slot:body-cell-action="props">
            <q-td align="center" :props="props">
              <q-btn
                size="0.8rem"
                color="grey-8"
                flat
                dense
                round
                icon="edit"
                @click="editLavagem(props.row)"
              />
              <q-btn
                size="0.8rem"
                color="red"
                flat
                dense
                round
                icon="delete"
                @click="deleteLavagem(props.row)"
              />
              <q-btn
                size="0.8rem"
                color="blue"
                flat
                dense
                round
                icon="info"
                @click="detailLavagem(props.row)"
              />
            </q-td>
          </template>
        </q-table>
      </q-card-section>
    </q-card>
  </q-page>

  <!-- Dialog Add status -->
  <q-dialog v-model="showDialogStatus">
    <q-card>
      <q-card-section>
        <div class="text-h6">Novo Status</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input label="status" v-model="newStatusString"></q-input>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn label="Salvar" color="primary" v-close-popup @click="newStatus(newStatusString)" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { api } from 'src/boot/axios'

// Status
const statusrows = ref([])
const colunsStatus = [{ name: 'st', align: 'center', label: 'Status', field: 'st' }]
const newStatusString = ref('')
const showDialogStatus = ref(false)

function showDialogNewStatus() {
  showDialogStatus.value = true
  console.log('aaaa', showDialogStatus.value)
}

async function newStatus(newStatus) {
  const payload = {
    st: newStatus,
  }

  await api.post('status/', payload)

  await fetchStatus()
}
// Tipo
const typeLavagensrows = ref([])
const colunsTypeLavagens = [
  { name: 'name', align: 'center', label: 'Nome', field: 'name' },
  { name: 'valor', align: 'center', label: 'Valor', field: 'valor' },
  { name: 'description', align: 'center', label: 'Descrição', field: 'description' },
  { name: 'action', align: 'center', label: 'Ações', field: 'action' },
]

async function fetchStatus() {
  const { data } = await api.get('status/')
  statusrows.value = data
}

async function fetchTypeLavagem() {
  const { data } = await api.get('tipo/')
  typeLavagensrows.value = data
}

onMounted(async () => {
  await fetchStatus()
  await fetchTypeLavagem()
})
</script>

<style></style>
