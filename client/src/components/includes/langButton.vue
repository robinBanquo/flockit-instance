<template>
  <q-select
    v-model="locale"
    :options="localeOptions"
    dense
    borderless
    emit-value
    map-options
    options-dense
    label-color="main-color"
  />
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  setup () {
    const { locale } = useI18n({ useScope: 'global' })
    return {
      locale,
      localeOptions: [
        { value: 'fr-FR', label: 'FR' },
        { value: 'en-US', label: 'EN' }
      ]
    }
  }
}
</script>
