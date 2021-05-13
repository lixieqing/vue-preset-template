// 负责注入或者修改项目中的文件

module.exports = (api, options, rootOptions) => {
 /*  api.extendPackages({
    scripts: {
      test: "vue-cli-service command",
    },
  })

  api.render("./template")

  if (options.module === "module1") {
    console.log(`Your chooices is ${options.module}`)
  }

  if (options.moduleName === "myModule") {
    console.log(`Your input is ${options.moduleName}`)
  } */
  api.render("./template")
}
