import Home from "@/views/Home.vue";
export default [
  {
    path: "/login",
    name: "login",
    meta: {
      title: "Login - 登录",
      hideInMenu: true,
      icon: "md-home"
    },
    component: () => import("@/views/page/login.vue")
  },
  {
    path: "/",
    name: "home",
    redirect: "/home",
    meta: { title: "首页" },
    component: Home,
    children: [
      {
        path: "/home",
        name: "about",
        meta: { title: "折叠面板", icon: "md-home" },
        component: () => import("@/views/page/table.vue")
      },
      {
        path: "/editor",
        name: "editor",
        meta: { title: "editor", icon: "md-home" },
        component: () => import("@/views/page/editor.vue")
      }
    ]
  },
  {
    path: "/about",
    name: "home6",
    redirect: "/about/empty/table",
    meta: { title: "一级菜单", icon: "md-home" },
    component: Home,
    children: [
      {
        path: "/empty1",
        name: "about1",
        meta: {
          title: "折叠面板111",
          icon: "md-home"
        },
        component: () => import("@/views/page/empty.vue"),
        children: [
          {
            path: "/empty",
            name: "table1",
            meta: {
              title: "表格222",
              icon: "md-home",
              access: ["super_admin"]
            },
            component: () => import("@/views/page/empty.vue"),
            children: [
              {
                path: "/about/empty/table",
                name: "table9",
                meta: { title: "表格1", icon: "md-home" },
                component: () => import("@/views/page/table.vue")
              }
            ]
          },
          {
            path: "/about/empty/tag",
            name: "tag1",
            meta: { title: "tag", icon: "md-home" },
            component: () => import("@/views/page/tag.vue")
          }
        ]
      },
      {
        path: "/table",
        name: "table2",
        meta: { title: "表格", icon: "md-home" },
        component: () => import("@/views/page/empty.vue"),
        children: [
          {
            path: "/about/empty/table2",
            name: "table3",
            meta: { title: "表格" },
            component: () => import("@/views/page/table.vue")
          },
          {
            path: "/about/empty/tag",
            name: "tag2",
            meta: { title: "tag", icon: "md-home" },
            component: () => import("@/views/page/form.vue")
          }
        ]
      },
      {
        path: "/tag",
        name: "tag3",
        meta: { title: "tab切换", icon: "md-home" },
        component: () => import("@/views/page/tag.vue")
      },
      {
        path: "/form",
        name: "form4",
        meta: { title: "表单", icon: "md-home" },
        component: () => import("@/views/page/form.vue")
      }
    ]
  },
  {
    path: "/map",
    name: "home2",
    redirect: "/map",
    meta: { title: "一级菜单", icon: "md-home" },
    component: Home,
    children: [
      {
        path: "/a",
        name: "about5",
        meta: { title: "折叠面板", icon: "md-home" },
        component: () => import("@/views/page/empty.vue"),
        children: [
          {
            path: "/map",
            name: "about6",
            meta: { title: "map", icon: "md-home" },
            component: () => import("@/views/page/map.vue")
          },
          {
            path: "/up",
            name: "table5",
            meta: { title: "表格上传", icon: "md-home" },
            component: () => import("@/views/page/excel/upload-excel.vue")
          },
          {
            path: "/down",
            name: "table6",
            meta: { title: "表格下载", icon: "md-home" },
            component: () => import("@/views/page/excel/export-excel.vue")
          }
        ]
      },
      {
        path: "/echarts",
        name: "echarts",
        meta: { title: "echarts", icon: "md-home" },
        component: () => import("@/views/page/echarts.vue")
      },
      {
        path: "/menu",
        name: "menu",
        meta: { title: "递归菜单", icon: "md-home" },
        component: () => import("@/views/page/menu.vue")
      }
    ]
  },
  {
    path: "*",
    redirect: "/404",
    meta: {
      hideInMenu: true
    },
    component: () => import("@/views/page/404.vue")
  }
];
