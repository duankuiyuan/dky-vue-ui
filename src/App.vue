<template>
<div id="app">
     <dky-row>
      <dky-button>默认按钮</dky-button>
      <dky-button type="primary">主要按钮</dky-button>
      <dky-button type="success">成功按钮</dky-button>
      <dky-button type="info">信息按钮</dky-button>
      <dky-button type="warning">警告按钮</dky-button>
      <dky-button type="danger">危险按钮</dky-button>
    </dky-row>
    <dky-row>
      <dky-button plain>朴素按钮</dky-button>
      <dky-button type="primary" plain>主要按钮</dky-button>
      <dky-button type="success" plain>成功按钮</dky-button>
      <dky-button type="info" plain>信息按钮</dky-button>
      <dky-button type="warning" plain>警告按钮</dky-button>
      <dky-button type="danger" plain>危险按钮</dky-button>
    </dky-row>
    <dky-row>
      <dky-button round>圆角按钮</dky-button>
      <dky-button type="primary" round>主要按钮</dky-button>
      <dky-button type="success" round>成功按钮</dky-button>
      <dky-button type="info" round>信息按钮</dky-button>
      <dky-button type="warning" round>警告按钮</dky-button>
      <dky-button type="danger" round>危险按钮</dky-button>
    </dky-row>
     <dky-row>
      <dky-button icon="el-icon-search" circle></dky-button>
      <dky-button type="primary" icon="el-icon-edit" circle></dky-button>
      <dky-button type="success" icon="el-icon-check" circle></dky-button>
      <dky-button type="info" icon="el-icon-message" circle></dky-button>
      <dky-button type="warning" icon="el-icon-star-off" circle></dky-button>
      <dky-button type="danger" icon="el-icon-delete" circle></dky-button>
    </dky-row>
    <dky-row>
      <dky-button disabled>默认按钮</dky-button>
      <dky-button type="primary" disabled>主要按钮</dky-button>
      <dky-button type="success" disabled>成功按钮</dky-button>
      <dky-button type="info" disabled>信息按钮</dky-button>
      <dky-button type="warning" disabled>警告按钮</dky-button>
      <dky-button type="danger" disabled>危险按钮</dky-button>
    </dky-row>
     <dky-row>
      <dky-button plain disabled>朴素按钮</dky-button>
      <dky-button type="primary" plain disabled>主要按钮</dky-button>
      <dky-button type="success" plain disabled>成功按钮</dky-button>
      <dky-button type="info" plain disabled>信息按钮</dky-button>
      <dky-button type="warning" plain disabled>警告按钮</dky-button>
      <dky-button type="danger" plain disabled>危险按钮</dky-button>
    </dky-row>
    <dky-button type="text">文字按钮</dky-button>
    <dky-button type="text" disabled>文字按钮</dky-button>
    <dky-button type="primary" icon="el-icon-edit"></dky-button>
    <dky-button type="primary" icon="el-icon-share"></dky-button>
    <dky-button type="primary" icon="el-icon-delete"></dky-button>
    <dky-button type="primary" icon="el-icon-search">搜索</dky-button>
    <dky-button type="primary">上传<i class="el-icon-upload dky-icon--right"></i></dky-button>
    <dky-button type="primary"><i class="el-icon-upload dky-icon--left"></i>上传</dky-button>
    <dky-button type="primary" :loading="true">加载中</dky-button>

     <dky-row>
      <dky-button>默认按钮</dky-button>
      <dky-button size="medium">中等按钮</dky-button>
      <dky-button size="small">小型按钮</dky-button>
      <dky-button size="mini">超小按钮</dky-button>
    </dky-row>
    <dky-row>
      <dky-button round>默认按钮</dky-button>
      <dky-button size="medium" round>中等按钮</dky-button>
      <dky-button size="small" round>小型按钮</dky-button>
      <dky-button size="mini" round>超小按钮</dky-button>
    </dky-row>
    <dky-row>
      <dky-button type="primary" icon="el-icon-edit" circle ></dky-button>
      <dky-button type="success" icon="el-icon-check" circle size="medium"></dky-button>
      <dky-button type="info" icon="el-icon-message" circle size="small"></dky-button>
      <dky-button type="warning" icon="el-icon-star-off" circle size="mini"></dky-button>
    </dky-row>
    <dky-row>
        <dky-button-group>
      <dky-button type="primary" icon="el-icon-arrow-left">上一页</dky-button>
      <dky-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></dky-button>
    </dky-button-group>
    <dky-button-group>
      <dky-button type="primary" icon="el-icon-edit"></dky-button>
      <dky-button type="primary" icon="el-icon-share"></dky-button>
      <dky-button type="primary" icon="el-icon-delete"></dky-button>
    </dky-button-group>
    <dky-button-group>
      <dky-button type="primary" icon="el-icon-delete"></dky-button>
    </dky-button-group>
    <dky-button-group>
      <dky-button round type="primary" icon="el-icon-delete"></dky-button>
    </dky-button-group>
     <dky-button-group>
      <dky-button circle type="primary" icon="el-icon-delete"></dky-button>
    </dky-button-group>
    </dky-row>
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
