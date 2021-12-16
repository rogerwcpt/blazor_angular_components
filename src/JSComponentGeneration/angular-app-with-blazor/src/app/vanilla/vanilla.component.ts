import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BlazorAdapterComponent } from '../blazor-adapter/blazor-adapter.component';

@Component({
  selector: 'vanilla',
  template: '',
})

export class VanillaComponent extends BlazorAdapterComponent {
  @Input() title: string | null = null;
}
