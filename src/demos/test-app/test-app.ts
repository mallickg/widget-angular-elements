import {Component, HostListener, Input, Output, EventEmitter, ViewEncapsulation, ChangeDetectorRef, IterableDiffers} from '@angular/core'

@Component({
  selector: 'test-app',
  templateUrl: './test-app.html',
  encapsulation: ViewEncapsulation.Native,
  providers: []
})
export class TestApp {
  name = 'Angular 4.3';
}
