<template>
  <div>
    <div class="parcel">
      <Parcel
        :config="parcelConfig"
        :mountParcel="mountParcel"
        :parcelProps="props"
      />
    </div>
    <div class="animals-wrapper">
        <div class="animal-wrapper" v-for="(animal, index) in animals" :key="index">
          <div class="animal-image">
              <img :src="getImgUrl(animal.image)" alt="animal-image">
          </div>
          <div class="animal-content">
              <div class="animal-title">
                  <span>{{animal.title}}</span>
              </div>
              <div class="animal-origin">
                  <span>Origin: {{animal.origin}}</span>
              </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import Parcel from 'single-spa-vue/parcel'
 
import { mountRootParcel } from 'single-spa'

export default {
  name: 'Animals',
  components: {
    Parcel
  },
  data() {
    return {
      animals: [
        {
          title: 'Wise Panda',
          origin: 'Cloudmobility cluster',
          image: "wise-panda.jpeg"
        },
        {
          title: 'Sardinian long-eared bat',
          origin: 'Sardinia, Italy',
          image: "plecotus-sardus.png"
        },
        {
          title: 'Small Wolf',
          origin: 'Cloudmobility cluster',
          image: "small-wolf.jpeg"
        },
        {
          title: 'Iberian Lynx',
          origin: 'Iberian Peninsula in southwestern Europe',
          image: "iberian-lynx.jpeg"
        },
      ],
      // eslint-disable-next-line
      parcelConfig: System.import('@joaoc/mf-shared').then(m => m.goBackBtnParcel),
      mountParcel: mountRootParcel,
      props: {
        url: '/continents',
        btnText: 'Back to continents'
      }
    };
  },
  setup() {
    const getImgUrl = (path) => { 
      return require('@/assets/' + path);
    }
    return { getImgUrl }
  }
};
</script>


<style scoped>
.animals-wrapper {
    margin: 50px auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    width: 1280px;
}

.animal-wrapper {
    border-radius: 5px;
    border: 2px solid orange;
    display: flex;
    flex-direction: row;
    width: 500px;
    height: 200px;
    margin: 50px 25px;
}

.animal-image > img {
    width: 200px;
    height: 200px;
    object-fit: cover;
}

.animal-content {
    display: flex;
    flex-direction: column;
    width: 600px;
}

.animal-title {
    height: 50px;
    display: flex;
    align-items: center;
}

.animal-title > span {
    font-weight: bold;
    margin: 0 20px;
    font-size: 20px;
} 

.animal-origin {
    height: 100px;
    padding: 25px 0;
    display: flex;
}

.animal-origin > span {
    margin: 0 20px;
} 

.parcel {
  margin: 50px;
}
</style>