<template>
  <div>
    <div>
      <!-- <input type="file" id="imgfile" multiple> -->

    </div>
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
                    <v-text-field label="製作者名" required v-model="author"></v-text-field>
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

    // import { ImageUploader } from "https://code4sabae.github.io/js/ImageUploader.js";
    // import { fetchJSON } from "https://code4sabae.github.io/js/fetchJSON.js";



  export default{
    components:{
    },

    data:()=>({
      title:'',
      author:'',
      description:'',
      files:[],
    }),

    methods:{
      submit:function(){
        // window.onload = async () => {
        //     imgfile.onchange = async (e) => {
        //         for (let i = 0; i < e.target.files.length; i++) {
        //             let file = e.target.files[i];
        //             let uploader = new ImageUploader("/data/");
        //             // 最大幅1200px、最大ファイルサイズ1メガバイト
        //             uploader.setFile(file, 1200, 1024 * 1024);
        //             uploader.onload = async (url) => {
        //                 await fetchJSON("/api/post", {"url": url});
        //             };
        //         }
        //     };
        // };
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
