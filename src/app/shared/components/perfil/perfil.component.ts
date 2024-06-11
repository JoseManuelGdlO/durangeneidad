import { Component, Input, OnInit } from '@angular/core';
import { ConfigService } from '../../utils/configuraciones.utils';

@Component({
  selector: 'app-perfil',
  templateUrl: 'perfil.component.html',
  styleUrls: ['perfil.component.scss'],
})
export class PerfilComponent {
  userName = 'Jose de la O Holguin';
  profilePic = 'assets/images/profile-pic.jpg';

  FB = ''
  TW = ''
  TK = ''
  YT = ''
  
  constructor(public configService: ConfigService) {
    this.initConfigurations()
  }

  async initConfigurations() {
    this.FB = await this.configService.findConfiguration('FACEBOOK_LINK')
    this.TW = await this.configService.findConfiguration('TWITTER_LINK')
    this.TK = await this.configService.findConfiguration('TIKTOK_LINK')
    this.YT = await this.configService.findConfiguration('YOUTUBE_LINK')
    this.profilePic = `https://extra.durangueneidad.com/${await this.configService.findConfiguration('IMAGEN_PERFIL')}`
  }


}
