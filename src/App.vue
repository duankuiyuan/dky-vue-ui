<template>
<div id="app">
     <div>
      <dky-link href="https://element.eleme.io" target="_blank">默认链接</dky-link>
      <dky-link type="primary">主要链接</dky-link>
      <dky-link type="success">成功链接</dky-link>
      <dky-link type="warning">警告链接</dky-link>
      <dky-link type="danger">危险链接</dky-link>
      <dky-link type="info">信息链接</dky-link>
    </div>
    <div>
      <dky-link disabled>默认链接</dky-link>
      <dky-link type="primary" disabled>主要链接</dky-link>
      <dky-link type="success" disabled>成功链接</dky-link>
      <dky-link type="warning" disabled>警告链接</dky-link>
      <dky-link type="danger" disabled>危险链接</dky-link>
      <dky-link type="info" disabled>信息链接</dky-link>
    </div>
    <div>
      <dky-link :underline="false">无下划线</dky-link>
      <dky-link>有下划线</dky-link>
    </div>
    <div>
      <dky-link icon="el-icon-edit">编辑</dky-link>
      <dky-link>查看<i class="el-icon-view el-icon--right"></i> </dky-link>
    </div>
</div>
</template>
<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
.dky-row{
  margin-top:20px;
}
</style>
