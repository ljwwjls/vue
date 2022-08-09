<template>
  <el-empty description="您暂时没有选择 Mcrosoft产品"></el-empty>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.el-empty__description{
  font-size: 20px;

}
</style>
