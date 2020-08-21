<template>
<div id="app">
<dky-container>
  <dky-header>Header</dky-header>
  <dky-main>Main</dky-main>
</dky-container>
<hr>
<dky-container>
  <dky-header>Header</dky-header>
  <dky-main>Main</dky-main>
  <dky-footer>Footer</dky-footer>
</dky-container>
<hr>
<dky-container>
  <dky-aside width="200px">Aside</dky-aside>
  <dky-main>Main</dky-main>
</dky-container>
<hr>
<dky-container>
  <dky-header>Header</dky-header>
  <dky-container>
    <dky-aside width="200px">Aside</dky-aside>
    <dky-main>Main</dky-main>
  </dky-container>
</dky-container>
<hr>
<dky-container>
  <dky-header>Header</dky-header>
  <dky-container>
    <dky-aside width="200px">Aside</dky-aside>
    <dky-container>
      <dky-main>Main</dky-main>
      <dky-footer>Footer</dky-footer>
    </dky-container>
  </dky-container>
</dky-container>
<hr>
<dky-container>
  <dky-aside width="200px">Aside</dky-aside>
  <dky-container>
    <dky-header>Header</dky-header>
    <dky-main>Main</dky-main>
  </dky-container>
</dky-container>
<hr>
<dky-container>
  <dky-aside width="200px">Aside</dky-aside>
  <dky-container>
    <dky-header>Header</dky-header>
    <dky-main>Main</dky-main>
    <dky-footer>Footer</dky-footer>
  </dky-container>
</dky-container>
  </div>
</template>
<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
 .dky-header, .dky-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .dky-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .dky-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .dky-container {
    margin-bottom: 40px;
  }
  
  .dky-container:nth-child(5) .dky-aside,
  .dky-container:nth-child(6) .dky-aside {
    line-height: 260px;
  }
  
  .dky-container:nth-child(7) .dky-aside {
    line-height: 320px;
  }
</style>
