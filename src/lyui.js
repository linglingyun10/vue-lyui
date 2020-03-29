import './assets/less/base.less'
import './assets/less/components/row.scss'
import './assets/less/components/col.scss'
import './assets/less/components/carousel.scss'
import './assets/less/components/carousel-item.scss'
import {Button, ButtonGroup} from './components/button'
import {SendCode} from './components/sendcode'
import {Input} from './components/input'
import {Modal} from './components/modal'
import {Icon} from './components/icon'
import {Upload} from './components/upload'
import {Progress} from './components/progress'
import {KeyBoard} from './components/keyboard'
import { LyCol } from './components/col'
import { LyRow } from './components/row'
import { ImageBanner } from './components/imgbanner'
import { ImageCard } from './components/imgcard'
import { Carousel } from './components/carousel'
import { LyCarouselItem } from './components/carousel-item'
import { LyBanner, LyBannerItem } from './combincomponents/lybanner'
import { LyInfolist, LyInfolistitem } from './combincomponents/infolist'
import { LyGamepannel } from './combincomponents/gamepannel'
import { LyInfocontainer } from './combincomponents/infocontainer'
import { LyInfoitem } from './combincomponents/infoitem'
import { LyBannerd } from './combindatacomp/lybannerd'
import { LyPeocard } from './components/peoplecard'
import { LySplitline } from './combincomponents/splitline'
import { LyLink } from './components/link'
window.document.addEventListener('touchstart', (event) => {
}, false)

const install = function (Vue) {
  Vue.component(Button.name, Button)
  Vue.component(ButtonGroup.name, ButtonGroup)
  Vue.component(Input.name, Input)
  Vue.component(Modal.name, Modal)
  Vue.component(Icon.name, Icon)
  Vue.component(Upload.name, Upload)
  Vue.component(Progress.name, Progress)
  Vue.component(KeyBoard.name, KeyBoard)
  Vue.component(LyCol.name, LyCol)
  Vue.component(LyRow.name, LyRow)
  Vue.component(ImageBanner.name, ImageBanner)
  Vue.component(ImageCard.name, ImageCard)
  Vue.component(Carousel.name, Carousel)
  Vue.component(LyCarouselItem.name, LyCarouselItem)
  Vue.component(LyBanner.name, LyBanner)
  Vue.component(LyBannerItem.name, LyBannerItem)
  Vue.component(LyInfolist.name, LyInfolist)
  Vue.component(LyInfolistitem.name, LyInfolistitem)
  Vue.component(LyGamepannel.name, LyGamepannel)
  Vue.component(LyInfocontainer.name, LyInfocontainer)
  Vue.component(LyInfoitem.name, LyInfoitem)
  Vue.component(LyBannerd.name, LyBannerd)
  Vue.component(LyPeocard.name, LyPeocard)
  Vue.component(LySplitline.name, LySplitline)
  Vue.component(LyLink.name, LyLink)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(Window.Vue)
}

export default {
  install
}
