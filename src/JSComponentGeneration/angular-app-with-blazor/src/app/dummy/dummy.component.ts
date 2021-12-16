import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BlazorAdapterComponent } from '../blazor-adapter/blazor-adapter.component';

@Component({
  selector: 'dummy',
  template: '',
})

export class DummyComponent extends BlazorAdapterComponent {
  @Input() title: string | null = null;
}
