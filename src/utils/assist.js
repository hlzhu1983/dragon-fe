/**
 * 添加cookie
 * @param name
 * @param value
 * @param expireHours 有效时间,单位小时,为0
 */
function addCookie (name, value, expireHours) {
  let cookieString = name + '=' + value
  // 判断是否设置过期时间
  if (expireHours > 0) {
    let date = new Date()
    date.setTime(date.getTime + expireHours * 3600 * 1000)
    cookieString = cookieString + ' expires=' + date.toGMTString()
  }
  document.cookie = cookieString
}

export {addCookie}

/**
 * 获取cookie
 * @param name
 * @returns {*}
 */
function getCookie (name) {
  let strCookie = document.cookie
  let arrCookie = strCookie.split(' ')
  for (let i = 0; i < arrCookie.length; i++) {
    let arr = arrCookie[i].split('=')
    if (arr[0] === name) return arr[1]
  }
  return ''
}

export {getCookie}

/**
 * 删除cookie, 即把value设置为空
 * @param name
 */
function deleteCookie (name) {
  let date = new Date()
  date.setTime(date.getTime() - 10000)
  document.cookie = name + '=v expires=' + date.toGMTString()
}

export {deleteCookie}

// Find components upward
function findComponentUpward (context, componentName, componentNames) {
  if (typeof componentName === 'string') {
    componentNames = [componentName]
  } else {
    componentNames = componentName
  }

  let parent = context.$parent
  let name = parent.$options.name
  while (parent && (!name || componentNames.indexOf(name) < 0)) {
    parent = parent.$parent
    if (parent) name = parent.$options.name
  }
  return parent
}
export {findComponentUpward}

/**
 * 分页查询
 * @param allData 所有数据
 * @param page 页号
 * @param pageSize 页大小
 * @returns {Array} 返回查询的结果
 */
function pageSearch (allData, page, pageSize) {
  let res = []
  let startIndex = (page - 1) * pageSize
  if (allData.length > startIndex) {
    let endIndex = startIndex + pageSize
    res = allData.slice(startIndex, endIndex)
  }
  return res
}

export {pageSearch}

/**
 * 获取el对象的浏览器绝对位置
 * @param el
 * @returns {{top: number, left: number}}
 */
function getElPos (el) {
  let pos = {top: 0, left: 0}
  if (el.offsetParent) {
    while (el.offsetParent) {
      pos.top += el.offsetTop
      pos.left += el.offsetLeft
      el = el.offsetParent
    }
  } else if (el.x) {
    pos.left += el.x
  } else if (el.y) {
    pos.top += el.y
  }
  return pos
}

export {getElPos}

/**
 * 格式化千分位
 * @param value
 * @returns {string}
 */
function formatThousandth (value) {
  if (value === undefined || value === null || isNaN(value) || value.toString().trim() == '') {
    return value
  }
  let tmpVal = value.toString()
  let decimal = ''
  if (tmpVal.includes('.')) {
    decimal = tmpVal.substring(tmpVal.indexOf('.'))
    tmpVal = tmpVal.substring(0, tmpVal.indexOf('.'))
  }
  return tmpVal.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') + decimal
}

export {formatThousandth}

function compareStr(str1, str2) {
    if (str1 === undefined) {
        return 1
    }else if (str1 > str2) {
        return 1
    } else if (str1 === str2) {
        return 0
    } else {
        return -1
    }
}

export {compareStr}

function randomInt(base) {
    return Math.round(Math.random() * base)
}

export {randomInt}

function randomDouble(base) {
    return Math.random() * base
}

export {randomDouble}

/**
 * 获取字节长度
 * @param str
 */
function getByteLength (str) {
  return str.replace(/[^\x00-\xff]/g, 'aa').length
}

export {getByteLength}

function S4 () {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
}

/**
 * 生成uuid
 * @returns {string}
 */
function guid () {
  return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4())
}

export {guid}