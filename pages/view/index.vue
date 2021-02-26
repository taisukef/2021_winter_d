<template>
  <div>
    <v-card dark>
      <v-container style="max-width: 800px;">
        <v-card elevation="10">
          <v-card-text>
            <v-container>
              <v-row>
                <MainCard></MainCard>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-container>
    </v-card>
  </div>
</template>
<script>
  import MainCard from '~/components/MainCard.vue'
  export default{
    components:{
      MainCard,
    }
  }
</script>
