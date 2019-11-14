import data from './taobaoArea'

const ids = Object.keys(data)

function mapData(id, data, type) {
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

export const ver = '2019.11'

export function getList(parentId, type) {
  const list = []

  if (parentId === undefined) {
    return list
  }
  
  ids.map(_id => {
    const item = data[_id]
    if (item[1] === parentId.toString()) {
      list.push(mapData(_id, item, type))
    }
  })

  return list
}

export function getOne(id, type) {
  if (parentId === undefined) {
    return null
  }

  ids.map(_id => {
    const item = data[_id]
    if (_id === id.toString()) {
      return mapData(_id, item, type)
    }
  })

  return null
}

export function getOneByName(name, type) {
  if (parentId === undefined) {
    return null
  }

  ids.map(_id => {
    const item = data[_id]
    if (item[0] === name) {
      return mapData(_id, item, type)
    }
  })

  return null
}
