<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> LaJato </q-toolbar-title>

        <div>Version: 0.0.1</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>
          <!-- <img src="../assets/Logo.png" class="logo" /> -->
          Logo
        </q-item-label>

        <!-- Dashboard -->
        <q-item clickable v-ripple to="/" exact exact-active-class="drawer-active">
          <q-item-section avatar
            ><q-icon name="space_dashboard" class="text-black"
          /></q-item-section>
          <q-item-section><q-item-label class="text-black">Dashboard</q-item-label></q-item-section>
        </q-item>

        <!-- Settings -->
        <q-item clickable v-ripple to="/settings" exact exact-active-class="drawer-active">
          <q-item-section avatar><q-icon name="settings" class="text-black" /></q-item-section>
          <q-item-section
            ><q-item-label class="text-black">Configurações</q-item-label></q-item-section
          >
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<style>
.logo {
  border-style: none;
  width: 8rem;
  padding: 20px 0 40px 0;
}
</style>
