<template>
  <div>
    <v-card dark>
      <v-container style="max-width: 800px;">
        <v-card elevation="10">
          <v-card-text>
            <v-container>
              <v-row>
                <MainCard
                  v-bind="viewData"
                ></MainCard>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-container>
    </v-card>
  </div>
</template>
<script>
  import { fetchJSON } from "~/vendor/fetchJSON.js"
  import MainCard from '~/components/MainCard.vue'

  export default{
    components:{
      MainCard,
    },

    async asyncData() {
      const resp = await fetchJSON("http://localhost:8001/api/get_bazuri", {});
      const respBody = await resp.json()

      const viewData = {
        items: [
          {
            src: respBody.image_url,
            flex: 12
          }
        ],
        productTitle: respBody.title,
        author: respBody.user_name,
        description: respBody.description
      }

      return { viewData }
    }
  }
</script>
