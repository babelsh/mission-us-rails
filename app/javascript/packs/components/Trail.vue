<template>
    <v-card>
      <v-card-media 
        class="white--text" 
        height="200px" 
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-container fill-height fluid>
          <v-layout fill-height>
            <v-flex xs12 align-end flexbox>
              <span class="headline">{{ title }}</span>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-media>
      <v-card-actions>
        <v-btn icon>
          <v-icon>favorite</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>bookmark</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>face</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>

export default {
  name: 'trail',
  props: {
    title: String,
  },
};

</script>
