import axios from 'axios'

function loadByPlex (plexid: string) {
  return new Promise<any[]>((resolve, reject) => {
    axios.get(`/api/plexes/${plexid}/components`)
      .then(res => {
        resolve(res.data)
      })
  })
}

function add (component: any) {
  axios.post(`/api/components`, {
    uuid: component.uuid,
    plexid: component.plexid,
    name: component.constructor.name,
    props: component.props
   })
  .then((res: any) => {
    console.log('api.saveComponent^^^^^^^^^^^^^', res)
  })
}

function save (uuid: string, props: any) {
  axios.post(`/api/components/${uuid}`, { props })
    .then((res: any) => {
      console.log('api.saveComponent^^^^^^^^^^^^^', res)
    })
}

export default {
  loadByPlex,
  save,
  add
}