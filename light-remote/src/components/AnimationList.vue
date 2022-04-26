<script setup>
import { onMounted, ref } from 'vue'
import { io } from "socket.io-client";
let socket 

const action = (actionName) => {
  console.log(actionName)
  socket.emit('action',{
    name: actionName
  })
}

const showModal = () => {
  isShow.value = true
}

const closeModal = () => {
  isShow.value = false
}

const isShow = ref(false)

onMounted(()=>{
  socket = io('http://localhost:3131')
})
</script>

<template>
  <div>
    <ul>
      <button @click="showModal">
        Show modal
      </button>
      <li><button @click="action('blackout')"> Blackout</button></li>
      <li><button @click="action('FadeIn Yoyo')">FadeIn Yoyo</button></li>
      <li><button @click="action('Breath')">Breath</button></li>
      <li><button @click="action('Center Wave')">Center Wave</button></li>
      <li><button @click="action('Full light')">Full light</button></li>
    </ul>
    <Modal
    v-model="isShow"
    :close="closeModal"
  >
    <div class="modal">
      <p>
        Hello
      </p>
      <button @click="closeModal">
        close
      </button>
    </div>
  </Modal>
  </div>
</template>

<style scoped lang="scss">
.modal {
  width: 300px;
  padding: 30px;
  box-sizing: border-box;
  background-color: #fff;
  font-size: 20px;
  text-align: center;
}
</style>
