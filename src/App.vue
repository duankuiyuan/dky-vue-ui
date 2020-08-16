<template>
  <div id="app">
      <h1>基础布局</h1>
    <!-- <dky-row>
      <dky-col :span="23"><div class="grid-content bg-purple-dark"></div></dky-col>
    </dky-row> -->
    <dky-row>
      <dky-col :span="12"><div class="grid-content bg-purple"></div></dky-col>
      <dky-col :span="12"><div class="grid-content bg-purple-light"></div></dky-col>
    </dky-row>
    <h1>分栏间隔</h1>
    <dky-row :gutter="20">
      <dky-col :span="6"><div class="grid-content bg-purple"></div></dky-col>
      <dky-col :span="6"><div class="grid-content bg-purple"></div></dky-col>
      <dky-col :span="6"><div class="grid-content bg-purple"></div></dky-col>
      <dky-col :span="6"><div class="grid-content bg-purple"></div></dky-col>
    </dky-row>
    <h1>分栏偏移</h1>
    <dky-row :gutter="20">
      <dky-col :span="6"><div class="grid-content bg-purple"></div></dky-col>
      <dky-col :span="6" :offset="12"><div class="grid-content bg-purple"></div></dky-col>
    </dky-row>
    <dky-row :gutter="20">
      <dky-col :span="6"><div class="grid-content bg-purple"></div></dky-col>
      <dky-col :span="6" :offset="8"><div class="grid-content bg-purple"></div></dky-col>
    </dky-row>
     <dky-row :gutter="20">
      <dky-col :span="6"><div class="grid-content bg-purple"></div></dky-col>
      <dky-col :span="6" :push="6"><div class="grid-content bg-purple">push</div></dky-col>
    </dky-row>
     <dky-row :gutter="20">
      <dky-col :span="6"><div class="grid-content bg-purple"></div></dky-col>
      <dky-col :span="6" :pull="2"><div class="grid-content bg-purple">pull</div></dky-col>
    </dky-row>
      <h1>对齐方式 flex</h1>
    <dky-row type="flex" class="row-bg">
      <dky-col :span="6"><div class="grid-content bg-purple"></div></dky-col>
      <dky-col :span="6"><div class="grid-content bg-purple-light"></div></dky-col>
      <dky-col :span="6"><div class="grid-content bg-purple"></div></dky-col>
    </dky-row>
    <dky-row type="flex" class="row-bg" justify="center" align="bottom">
      <dky-col :span="6"><div class="grid-content bg-purple"></div></dky-col>
      <dky-col :span="6"><div class="grid-content bg-purple-light"></div></dky-col>
      <dky-col :span="6"><div class="grid-content bg-purple"></div></dky-col>
    </dky-row>
    <h1>响应式布局</h1>
    <dky-row :gutter="10">
      <dky-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content bg-purple"></div>
      </dky-col>
      <dky-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="grid-content bg-purple-light"></div>
      </dky-col>
      <dky-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="grid-content bg-purple"></div>
      </dky-col>
      <dky-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content bg-purple-light"></div>
      </dky-col>
    </dky-row>

    <h1>基于断点的隐藏类</h1>
    <dky-row :gutter="10">
      <dky-col class="hidden-xs-only" :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content bg-purple"></div>
      </dky-col>
    </dky-row>
  </div>
</template>

<script>
import DkyRow from '@element/Row.vue';
import DkyCol from '@element/Col.vue';

export default {
  name: 'App',
  components: {
    DkyRow,
    DkyCol,
  },
};
</script>

<style lang="scss">
.dky-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .dky-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
