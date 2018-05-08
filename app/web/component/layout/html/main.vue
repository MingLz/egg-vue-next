<template>
   <div>
     <v-app>
        <LayoutHeader></LayoutHeader>
        <v-content>
          <LayoutContent>
            <div slot="content"><slot name="main"></slot></div>
          </LayoutContent>
        </v-content>
        <LayoutFooter></LayoutFooter>
     </v-app>
   </div>
</template>
<style>

</style>
<script type="text/babel">
  import 'asset/css/global.css';
  import 'vuetify/dist/vuetify.min.css';
  import 'material-design-icons-iconfont/dist/material-design-icons.css';
  import LayoutHeader from './header/header';
  import LayoutContent from './content/content';
  import LayoutFooter from './footer/footer';
  export default{
    components: {
      LayoutHeader,
      LayoutContent,
      LayoutFooter
    }
  }
</script>
