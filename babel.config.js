module.exports = function (api) {
  api.cache(true);
  return {
    "presets": ["next/babel","@babel/preset-typescript"],
    "plugins": [
      [
        "module-resolver",
        {
          "root": ["."],
          "extensions": [".js", ".jsx", ".es", ".es6", ".mjs", ".ts", ".tsx"],
          "alias": {
            "@app": "./src",
            "@api": "./src/api",
            "@assets/images": "./src/assets/images",
            "@assets/scss": "./src/assets/scss",
            "@assets/svg": "./src/assets/svg",
            "@components/atoms": "./src/components/atoms",
            "@components/molecule": "./src/components/molecules",
            "@components/organisms": "./src/components/organisms",
            "@components/templates": "./src/components/templates",
            "@config": "./src/config",
            "@pages": "./src/pages",
            "@styles": "./src/styles",
            "@store": "./src/store",
            "@store/actions": "./src/store/actions",
            "@store/constants": "./src/store/constants",
            "@store/reducers": "./src/store/reducers",
            "@store/sagas": "./src/store/sagas",
            "@utils/constants": "./src/utils/constants",
            "@utils/contexts": "./src/utils/contexts",
            "@utils/dummys": "./src/utils/dummys",
            "@utils/helpers": "./src/utils/helpers",
            "@utils/hooks": "./src/utils/hooks",
            "@utils/libs": "./src/utils/libs"
          }
        }
      ]
    ]
  }
}
