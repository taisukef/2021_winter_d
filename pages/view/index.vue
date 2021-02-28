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
  import MainCard from '~/components/MainCard.vue'
  
  const staticData = 		{
			"image_url": "http://localhost:8001/data/20210227/4b69cb3a-a13d-458a-b76a-152d9415bf38.jpeg",
			"title": "Geo3x3 まだ緯度経度で消耗しているの！？",
			"user_name": "@taisukef",
			"description": "地球を東(E)と西(W)に分け、再帰的に3x3の9エリアで分割します。長いほど精度が上がります。"
		};


  export default{
    components:{
      MainCard,
    },

    async asyncData() {
      //const resp = await fetchJSON("http://localhost:8001/api/get_bazuri", {});
      //const resp = await fetch("http://localhost:51236/db.json");
      //const respBody = (await resp.json()).timeline[0];
      const respBody = staticData;
      console.log(respBody);

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
