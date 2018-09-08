<template>
  <v-card>
    <v-card-media
      class="white--text"
      height="200px"
      :src="source"
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
        <v-icon :color="favoriteMarked">favorite</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>bookmark</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn color="info" v-if="isActive">
        Continuar
      </v-btn>
      <v-tooltip bottom v-else>
        <v-btn icon slot="activator">
          <v-icon>near_me</v-icon>
        </v-btn>
        <span>Iniciar trilha</span>
      </v-tooltip>
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
  name: 'trail',
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
    isFavorite: {
      type: Boolean,
      default: false,
    },
    title: String,
    source: String,
  },
  computed: {
    favoriteMarked() {
      return this.isFavorite ? 'red' : 'default';
    }
  }
};

</script>
