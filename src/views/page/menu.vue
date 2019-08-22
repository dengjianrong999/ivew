<template>
  <div class="list-detail">
    <list :list="list"></list>
  </div>
</template>
<script>
import List from "../../components/List";
export default {
  components: { List },
  data() {
    return {
      list: [
        {
          id: 1,
          label: "1级目录1",
          show: true,
          children: [
            {
              id: "1-1",
              label: "1.1目录"
              
            },
            {
              id: "1-2",
              label: "1.2目录"
            },
            {
              id: "1-3",
              label: "1.3目录"
            }
          ]
        },
        {
          id: 2,
          label: "1级目录2",
          show: false
        },
        {
          id: 3,
          label: "1级目录3",
          show: false,
          children: [
            {
              id: "3-1",
              label: "3.1目录"
            },
            {
              id: "3-2",
              label: "3.2目录",
              show: false,
              children: [
                {
                  id: "3-2-1",
                  label: "3.2.1目录"
                },
                {
                  id: "3-2-2",
                  label: "3.2.2目录"
                },
                {
                  id: "3-2-3",
                  label: "3.2.3目录"
                }
              ]
            }
          ]
        },
        {
          id: 4,
          label: "1级目录4",
          show: false,
          children: [
            {
              id: "4-1",
              label: "4.1目录"
            },
            {
              id: "4-2",
              label: "4.2目录",
              show: false,
              children: [
                {
                  id: "4-2-1",
                  label: "4.2.1目录"
                }
              ]
            }
          ]
        },
        {
          id: 5,
          label: "1级目录5",
          show: false,
          children: [
            {
              id: "5-1",
              label: "5.1目录",
              show: false,
              children: [
                {
                  id: "5-1-1",
                  label: "5.1.1目录"
                },
                {
                  id: "5-1-2",
                  label: "5.1.2目录",
                  show: false,
                  children: [
                    {
                      id: "5-1-2-1",
                      label: "5.1.2.1目录"
                    }
                  ]
                }
              ]
            },
            {
              id: "5-2",
              label: "5.2目录",
              show: false
            },
              {
              id: "5-3",
              label: "5.3目录",
              show: false
            },
              {
              id: "5-4",
              label: "5.4目录",
              show: false
            }
          ]
        }
      ]
    };
  }
};
</script>
<style>
  .list-detail{
    overflow:scroll;
  }

</style>