<template>
  <div class="mainTop">
    <Breadcrumb style="height: 30px;
      line-height: 30px;
      text-align: left;">
      <BreadcrumbItem>当前位置</BreadcrumbItem>
      <BreadcrumbItem :to="this.$route.path">{{this.$route.meta.title}}</BreadcrumbItem>
    </Breadcrumb>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {}
};
</script>