<template>
  <h3>Login</h3>
  <div class="q-pa-md" style="max-width: 800px">

    <q-form
      @reset="onReset"
      class="q-gutter-md"
      @submit="login"
    >
      <q-input
        filled
        v-model="form.account"
        label="Your account *"
        hint="account > 4 <15"
        :rules="[rules.required, rules.length]"
      />

      <q-input
      v-model="form.password"
      type="password"
      hint="Password with toggle"
      label="Your password *"
      :rules="[rules.required, rules.length]">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <div>
        <q-btn label="Submit" type="submit" color="primary" :loading="loading"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useUserStore } from '@/stores/user'

const user = useUserStore()

const loading = ref(false)
const form = reactive({
  account: '',
  password: ''
})

const rules = {
  required (value) {
    return !!value || '欄位必填'
  },
  length (value) {
    return (value.length >= 4 && value.length <= 20) || '長度必須為 4 ~ 20 個字'
  }
}

const login = async () => {
  loading.value = true
  await user.login(form)
  loading.value = false
}

const onReset = () => {
  form.email = null
  form.account = null
  form.password = null
}
</script>
