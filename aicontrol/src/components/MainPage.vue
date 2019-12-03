<template>
  <v-container>
    <v-row>
      <div class="headline mb-1">AI Control</div>
    </v-row>

    <v-row>
      <div class="headline mb-2">Configurações do ambiente</div>
    </v-row>
    <v-row>
      <v-col cols="12" md="6" sm="6">
        <v-slider
          label="Índice Ultravioleta"
          min="0"
          max="12"
          step="1"
          v-model="iuv"
          :color="color"
          track-color="grey"
          thumb-label
          :thumb-size="25"
          v-on:end="sendGlobal"
        ></v-slider>
      </v-col>
    </v-row>
    <v-row>
      <v-row>
        <v-col>
          <HomeControl name="Sala de estar" />
        </v-col>
        <v-col>
          <HomeControl name="Sala de jantar" />
        </v-col>
        <v-col>
          <HomeControl name="Cozinha" />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <HomeControl name="Quarto 1" />
        </v-col>
        <v-col>
          <HomeControl name="Quarto 2" />
        </v-col>
        <v-col>
          <HomeControl name="Área de Convivência" />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <HomeControl name="Quintal" :tanque="true" />
        </v-col>
        <v-col>
          <HomeControl name="Jardim" :tanque="true"/>
        </v-col>
        <v-col>
          <HomeControl name="Garagem" />
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>

<script>
/* eslint-disable no-console */
import HomeControl from "./elements/HomeControl";

export default {
  components: {
    HomeControl
  },
  data: function(){
    return {
      iuv: 3,
    }
  },
  methods:{
    sendGlobal: function(){
      let data = {
        name: "global",
        iuv: this.iuv,
      };
      this.$socket.emit("uvChange", data);
      console.log(data);
    }
  },
  computed: {
    color : function(){
      if(this.iuv  <= 2) return 'green';
      if(this.iuv  <= 5) return 'yellow darken-1';
      if(this.iuv  <= 7) return 'orange';
      if(this.iuv  <= 10) return 'red';
      if(this.iuv  <= 12) return 'purple';
      return 'green';
    }
  }
};
</script>

<style>
</style>