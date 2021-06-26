// 负责注入或者修改项目中的文件

module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    dependencies: {
      "lodash": "^4.0.0",
      "axios": "^0.18.0",
      "vuex": "^3.0.1",
      "vue-router": "^3.0.1",
      "honghu-ui": "^2.10.1",
    },
    devDependencies: {},
  })

  /*  if (options.vuex) {
     api.extendPackage({
       dependencies: {
         vuex: "^3.0.1",
       },
     })
   }
 
   if (options.router) {
     api.extendPackage({
       dependencies: {
         "vue-router": "^3.0.1",
       },
     })
   }
  */
  api.render("./template")
  api.render({
    './.eslintrc.js': './template/_eslintrc.js',
    './.gitignore': './template/_gitignore'
  })
}
