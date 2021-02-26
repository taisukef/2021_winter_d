<template>
  <div>
    <v-card dark>
      <div id="contactMain">
        <h1 align="center" id="title">Bazらせたい作品を投稿！！</h1>
        <v-container style="max-width: 800px;">
          <v-card elevation="10">
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                  <v-file-input
                    label="作品画像"
                    multiple
                    accept="image/png, image/jpeg"
                    prepend-icon="mdi-image"
                    v-model="files"
                  >
                    <template v-slot:selection="{ text }">
                      <v-chip
                        small
                        label
                        color="primary"
                      >
                        {{ text }}
                      </v-chip>
                    </template>
                  </v-file-input>

                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    <v-text-field label="作品タイトル" required v-model="title"></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field label="製作者名" required v-model="name"></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea label="概要" outlined required v-model="description"></v-textarea>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn  v-on:click="submit" color="primary">Send</v-btn>
            </v-card-actions>
          </v-card>
        </v-container>
      </div>
    </v-card>
  </div>
</template>
<script>
  export default{
    components:{
    },

    data:()=>({
      title:'',
      name:'',
      description:'',
      files:[],
    }),

    methods:{
      submit:function(){

      }
    }
  }
</script>
<style scoped>
  #contactMain{
    padding-bottom: 30px;
  }

  #title{
    padding:20px 0px;
  }

  a{
    text-decoration: none;
  }

  @media screen and (min-width:0px) and ( max-width:480px){
    #title{
      font-size: 25px;
    }
  }
</style>
