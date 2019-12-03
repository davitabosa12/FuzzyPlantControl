<template>
  <v-card class="mx-auto" min-width="344">
    <v-card-title>
      <div class="headline mb-1">{{name}}</div>
    </v-card-title>
    <v-container>
      <v-row>
        <v-slider
          label="Temperatura (°C)"
          min="-10"
          max="50"
          v-model="temperatura"
          thumb-label
          v-on:end="sendData"
          :thumb-size="25"
        ></v-slider>
      </v-row>
      
      <v-row>
        <v-slider
          v-model="persiana"
          label="Persiana"
          min="0"
          max="100"
          thumb-label
          :thumb-size="25"
          step="1"
          v-on:end="sendData"
        ></v-slider>
      </v-row>
      <v-row>
        <v-btn v-if="tanque" v-on:click="sendReabastecer">Reabastecer tanque d'água</v-btn>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
/* eslint-disable no-console */
export default {
  props: {
    name: String,
    tanque: {
      type: Boolean,
      default: false
      }
  },
  data: function() {
    return {
      temperatura: 20,
      persiana: 25,
    };
  },
  sockets:{

  },
  methods:{
    sendData: function(){
      console.log(this.houseInfo);
      this.$socket.emit("houseChange", this.houseInfo);
    },
    sendReabastecer: function(){
      let data = {
        name: this.name,
        command: "refill"
      }
      this.$socket.emit("command", data);
      console.log(data);
    }
  },
  computed:{
    houseInfo: function(){
      return {
        name: this.name,
        temperatura: this.temperatura,
        persiana: this.persiana
      }
    }
  }
};
</script>

<style>
</style>