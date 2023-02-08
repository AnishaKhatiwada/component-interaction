import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // @Input() only for parent to child
  @Input() users

  // @Output() for child to parent
  @Output() deleteUser = new EventEmitter()
}