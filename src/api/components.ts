import axios from 'axios'

function loadByPlex (plexid: string) {
  return new Promise<any[]>((resolve, reject) => {
    axios.get(`/api/plexes/${plexid}/components`)
      .then(res => {
        resolve(res.data)
      })
  })
}

function saveComponent (uuid: string, props: any) {
  axios.post(`/api/components/${uuid}`, props)
    .then((res: any) => {
      console.log('api.saveComponent^^^^^^^^^^^^^', res)
    })
}

export default {
  loadByPlex,
  saveComponent
}