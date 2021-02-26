<template>
  <v-card
    class="mx-auto"
    light
  >
    <v-toolbar
      color="indigo"
      dark
    >
      <v-toolbar-title>{{title}}</v-toolbar-title>
    </v-toolbar>
    <v-container>
      <v-row dense>
        <v-col
          v-for="(item,i) in items"
          :key="i"
          :cols="item.flex"
        >
          <v-card>
            <v-img
              :src="item.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
            </v-img>
          </v-card>
          <v-card
            class="mx-auto"
            color="#26c6da"
            dark
          >
            <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-content>
                  <v-list-item-title class="title font-weight-bold">{{author}}</v-list-item-title>
                </v-list-item-content>
                <v-row
                  align="center"
                  justify="end"
                >
                  <v-btn icon>
                    <v-icon class="mr-1">mdi-heart</v-icon>
                  </v-btn>
                  <span class="subheading mr-2">{{likeNum}}</span>
                  <v-btn icon>
                    <v-icon class="mr-1">mdi-share-variant</v-icon>
                  </v-btn>
                  <span class="subheading">{{shareNum}}</span>
                </v-row>
              </v-list-item>
            </v-card-actions>
            <v-card-text class="subtitle-1 font-weight-bold">
              {{description}}
            </v-card-text>
          </v-card>
        <Bazuri ></Bazuri>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
  import Bazuri from '~/components/Bazuri.vue'
  export default {
    components:{
      Bazuri
    },

    data: () => ({
      title:'入力されたタイトル',
      author:'入力された名前',
      description:'入力された概要入力された概要入力された概要入力された概要入力された概要入力された概要入力された概要',
      files:[],
      likeNum:0,
      shareNum:0,

      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
          flex: 12
        },
      ],
    }),

    created:function(){
      setInterval(() => {
        this.likeNum +=8
      }, 1000);

      setInterval(() => {
        this.likeNum +=1
      }, 1500);

      setInterval(() => {
        this.likeNum +=4
      }, 3000);

      setInterval(() => {
        this.likeNum +=500
      }, 20000);

      setInterval(() => {
        this.shareNum +=1
      }, 1000);

      setInterval(() => {
        this.shareNum +=7
      }, 2500);

      setInterval(() => {
        this.shareNum +=49
      }, 10000);

      setInterval(() => {
        this.shareNum +=300
      }, 20000);
    }
  }
</script>
