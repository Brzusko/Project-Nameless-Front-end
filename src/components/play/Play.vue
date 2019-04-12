<template>
  <div id="brr">
    <app-article/>
    <app-delete/>
  </div>
</template>

<script>
import Slider from './Slider.vue'
import Header from './Header.vue'
import CreateArticle from './../signPanel/CreateArticle.vue'
import DeleteArticle from './../signPanel/DeleteArticle.vue'
import {mapGetters,mapActions,mapMutations} from 'vuex'
import {markdown} from 'markdown';
export default {

  name: '',
  data () {
    return {
      msg: null
    }
  },
  methods: {
    dupa: function(){
      return markdown.toHTML("Hello");
    }
  },
  components: {
    appSlider: Slider,
    appHeader: Header,
    appArticle: CreateArticle,
    appDelete: DeleteArticle
  },
  mounted(){
    this.msg = markdown.toHTML("Hello  ```World```!")
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
