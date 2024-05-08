import { Component, Input } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'dgo-loading',
  templateUrl: 'loading.component.html',
  styleUrls: ['loading.component.scss'],
})
export class LoadingComponent {

  @Input() set loading( value: boolean) {
    this.isLoading = value;
  }

  isLoading = false;

  options: AnimationOptions = {
    path: '/assets/images/lottie/loading.json',
  };

  animationCreated(animationItem: AnimationItem): void {
  }


}
