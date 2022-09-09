// sqlmap.js
var sqlMap = {
    // home
    home: {
      getdanmus: 'select * from danmu WHERE `tag` = ?',
      getimgurlarray: 'SELECT * FROM `image` WHERE 1',
      savedanmus: 'INSERT INTO `danmu` (`id`, `content`, `tag`) VALUES (NULL, ?, ?);',
      addconnect: 'INSERT INTO `book`(`name`, `connect`, `updatetime`, `iseffective`) VALUES (?,?,?,?)',
      getconnects: 'SELECT * FROM `book` WHERE 1'
    },
    other:{
        delete:'', // delete sql语句
        post: '',
        get: ''
    }
  }
  module.exports = sqlMap