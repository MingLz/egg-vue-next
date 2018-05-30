<template>
  <Layout title="Home Page" description="vue server side render" keywords="egg, vue, webpack, server side render">
    <v-container  fill-height>
      <v-layout align-center>
          <v-flex>
            <h3 class="display-3">Welcome to home page</h3>
            <span class="subheading">Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id, ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum.</span>
            <v-divider class="my-3"></v-divider>
            <div class="title mb-3">Check out our newest features!</div>
            <v-btn large color="primary" class="mx-0">See more</v-btn>
          </v-flex>
        </v-layout>
    </v-container>
  </Layout>
</template>
<style>
  @import "index.css";
</style>
<script type="text/babel">
  export default {
    components: {

    },
    data(){
      return {
        isFinish: false,
        isLoading : false,
        pageIndex: 1,
        pageSize: 10
      }
    },
    computed: {
      lists(){
        return this.list;
      }
    },
    methods: {
      fetch(){
        this.$http.get(`${location.origin}/example?pageIndex=${this.pageIndex}&pageSize=${this.pageSize}`).then(res=> {
          console.log('res', res);
          if(res.data.list && res.data.list.length){
            this.total = res.data.total;
            this.list = this.list.concat(res.data.list);
          }else{
            this.isFinish = true;
          }
          this.isLoading = false;
        });
      },
      loadPage(){
        if (!this.isFinish && !this.isLoading) {
          this.isLoading = true;
          this.pageIndex++;
          setTimeout(()=>{
            this.fetch();
          }, 1500);
        }
      }
    },
    mounted() {
      import('service-worker-register').then(sw =>{
        sw.default.register('service-worker.js');
      });
      window.addEventListener('scroll', ()=>{
        this.loadPage();
      }, false);
    }
  }
</script>