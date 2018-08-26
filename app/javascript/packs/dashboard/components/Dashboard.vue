<template>
  <v-app>
    <v-container style="max-width: 100%">
      <v-carousel style="height: 250px">
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    </v-container>
    <v-container fluid grid-list-md>
      <v-layout row wrap align-center>
        <v-flex xs12 md6 lg6>
          <v-date-picker 
            v-model="date"
            locale="pt-br"
            no-title
            reactive
            full-width
            class="mt-3"
          ></v-date-picker>
        </v-flex>
        <v-flex class="text-xs-center">
          <div>
            <v-progress-circular
              :rotate="360"
              :size="100"
              :width="15"
              :value="progress"
              color="teal"
            >
              {{ progress }}%
            </v-progress-circular>
          </div>
          <div>
            Conclusão das atividades da semana
          </div>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex xs6 md4 lg4 v-for="trail in trails" :key="trail.name">
          <trail :title="trail.name" />
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import Trail from '../../components/Trail';

export default {
  name: 'dashboard',
  components: {
    Trail,
  },
  data() {
    return {
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
        }
      ],
      trails: [
        {
          name: 'Trilha 1',
        },
        {
          name: 'Trilha 2',
        },
        {
          name: 'Trilha 3',
        },
        {
          name: 'Trilha 4',
        },
      ],
      date: '2018-08-20',
      progress: 37,
    };
  },
};
</script>
