// store.js
import { reactive } from 'vue';
import { io } from 'socket.io-client';

const events = reactive({
  socket: io('http://localhost:3000'),
  cities: [],
});
export default events;
