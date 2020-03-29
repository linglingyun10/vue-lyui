// import * as api from './api'
import {fetch, API_ROOT,sendPost} from './index'
export default {
  getCarouselData (params, cb) {
    return sendPost('/banner', params).then((res) => {
      cb(res)
    })
  },
  getGamePannelData (params, cb) {
    return sendPost('/gamepannel', params).then((res) => {
      cb(res)
    })
  }
}


//async function upimg(val) {
//console.log('calling');
//let post = ()=>{
//  return new Promise(resolve => {
//    this.ajax.post('/upload/Upload', val)
//      .then(response => {
//        if (response.data.code === 0) {
//              resolve(response.data.data);
//          }
//      })
// });
//  } 
//  let result = await post();
//  console.log(result);
//}
