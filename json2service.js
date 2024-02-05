/**
 * @typedef { import("auto-service/lib/consts").JSON2Service } JSON2Service
 * @type {JSON2Service} 配置
 */
module.exports = {
  url: './swagger.json',
  swagger2openapi: true,
  remoteUrl:
    'https://yapi.zuoyebang.cc/api/open/plugin/export-full?type=json&pid=776&status=all&token=9b0dd87aae70d4febec746dec86679b965185fd56c4377e8f48bf2cacbca2db3',
  type: 'yapi',
  yapiConfig: {
    beforeTransform: yapiList => {
      // 后端可能会生成一些无用数据
      yapiList.forEach(yapi => {
        yapi.name = 'cungong';
        yapi.desc = 'cungongDesc';
        yapi.proDescription = '';
        yapi.list.forEach(api => {
          api.markdown = '';
          api.desc = '';
        });
      });
      return yapiList;
    }
  },
  swaggerParser: {
    '-DmodelPropertyNaming=original': '',
    '-o': 'dist/types',
    '-l': 'typescript-axios'
    // '-t': 'plugins/types-only' // 存在大小写异常、model未生成的case
    // '-t': 'v3/plugins/types-only' // 存在大小写异常 required 生成异常
    // '-t': 'v3/plugins/typescript-tkit-autos' // 只存在大小写异常
    // '-t': 'v3/plugins/types-tkit' // 错误信息：Error: ENOENT: no such file or directory json 找不到
  },
  guardConfig: {
    mode: 'strict',
    validUrlReg: /users|cungong|spamftp/g
  }
};
