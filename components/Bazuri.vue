<template>
  <v-card
    class="mx-auto"
    light
  >
    <v-timeline
      align-top
      dense
    >
      <v-timeline-item
        v-for="(account,i) in accounts"
        :key="i"
        small
        right
      >
        <v-card
          class="mx-auto"
          color="#26c6da"
          dark
        >
          <v-card-actions>
            <v-list-item class="grow">
              <v-list-item-avatar color="grey darken-3">
                <v-img
                  class="elevation-6"
                  :src="account.src"
                ></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold">用意した名前</v-list-item-title>
              </v-list-item-content>
              <v-row
                align="center"
                justify="end"
              >
                <v-btn icon>
                  <v-icon class="mr-1">mdi-heart</v-icon>
                </v-btn>
                <span class="subheading mr-2">{{account.likeNum}}</span>
                <v-btn icon>
                  <v-icon class="mr-1">mdi-share-variant</v-icon>
                </v-btn>
                <span class="subheading">{{account.shareNum}}</span>
              </v-row>
            </v-list-item>
          </v-card-actions>
          <v-card-text class="headline font-weight-bold">
            {{account.comment}}
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-card>
</template>

<script>
  export default {
    data:() => ({
      accounts:[
        {
          src:'https://avataaars.io',
          name:'hoge',
          comment:'用意したコメント',
          likeNum:2,
          shareNum:0,
        },
        {
          src:'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light',
          name:'hoge',
          comment:'用意したコメント',
          likeNum:1,
          shareNum:1,
        },
      ]
    }),
  }
</script>
