import axios from 'axios'

async function loadPlexes (): Promise<any[]> {
  return new Promise<any[]>((resolve, reject) => {
    axios.get('/api/plexes').then((res: any) => {
      resolve(res.data)
    })
  })
}

function addPlex (props: any) {
  axios.post('/api/plexes', {
    uuid: props.uuid,
    dimension: props.dimension,
    position: props.position,
    fixed: props.fixed
  }).then((res: any) => {
    console.log('this.$http.post^^^^^^^^^^^^^', res)
  })
}

function savePlex (uuid: string, props: any) {
  axios.post(`/api/plexes/${uuid}`, props)
    .then((res: any) => {
      console.log('this.$http.get^^^^^^^^^^^^^', res)
    })
}

function deletePlex (uuid: string) {

}

export default {
  loadPlexes,
  addPlex,
  savePlex,
  deletePlex
}
