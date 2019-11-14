import data from './taobaoArea'

const ids = Object.keys(data)

function mapData(data, type) {
  if (type === 1) {
    return {
      id,
      parentId: data[1],
      name: data[0],
      slug: data[2],
    }
  } else {
    return [ id, data[1], data[0], data[2] ]
  }
}

function getList(parentId, type) {
  const list = []
  
  ids.map(_id => {
    const item = data[_id]
    if (item[1] === parentId.toString()) {
      list.push(mapData(item, type))
    }
  })

  return list
}

function getOne(id, type) {
  ids.map(_id => {
    const item = data[_id]
    if (_id === id.toString()) {
      return mapData(item, type)
    }
  })

  return null
}

function getOneByName(name, type) {
  ids.map(_id => {
    const item = data[_id]
    if (item[0] === name) {
      return mapData(item, type)
    }
  })

  return null
}

export {
  getList,
  getOne,
  getOneByName
}
