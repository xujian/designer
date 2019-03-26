import axios from 'axios'

function loadByPlex (plexid: string) {
  return new Promise<any[]>((resolve, reject) => {
    axios.get(`/api/plexes/${plexid}/components`)
      .then(res => {
        resolve(res.data)
      })
  })
}

export default {
  loadByPlex
}