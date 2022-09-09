// homeApi.js
var models = require('../db') // 引入db配置
var express = require('express') // express框架
var router = express.Router()
var mysql = require('mysql')
var $sql = require('../sqlMap') // sql语句
// 连接数据库
var conn = mysql.createConnection(models.mysql)
conn.connect()

var jsonWrite = function (res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    })
  } else {
    res.json(ret)
  }
}
 
// 查询列表接口，
// get接口，这里配置的/getlist,使用的时候就是 /home/getlist
// 回看index.js 中 app.use('/home', homeApi) ，就懂了

router.get('/getimgurlarray', (req, res) => {
  var sql = $sql.home.getimgurlarray
  var parms = req.query
  console.log(parms)
  conn.query(sql, function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      console.log(result)
      res.send(result)
    }
  })
})

router.get('/getconnects', (req, res) => {
  var sql = $sql.home.getconnects
  var parms = req.query
  console.log(parms)
  conn.query(sql, function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      console.log(result)
      res.send(result)
    }
  })
})
//请求弹幕
router.post('/getdanmus', (req, res) => {
  var sql = $sql.home.getdanmus
  var params = req.body
  console.log(params)
  conn.query(sql, [params.tag], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})


//保存弹幕到数据库
router.post('/shotdanmu', (req, res) => {
  var sql = $sql.home.savedanmus
  var params = req.body
  console.log(params)
  conn.query(sql, [params.danmu,params.tag], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})

//保存联系方式到数据库
router.post('/addconnect', (req, res) => {
  var sql = $sql.home.addconnect
  var params = req.body
  console.log(params)
  conn.query(sql, [params.name, params.connect, params.updatetime, params.iseffective], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})
module.exports = router

