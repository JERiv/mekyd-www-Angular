import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-items',
  templateUrl: 'items.component.html',
  styleUrls: ['items.component.css'],
})
export class Items {
  @Input()
  description: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
  @Input()
  description1: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
  @Input()
  description2: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
  @Input()
  header: string = 'Esse cillum dolore eu fugiat nulla pariatur.'
  @Input()
  header1: string = 'Esse cillum dolore eu fugiat nulla pariatur.'
  @Input()
  rootClassName: string = ''
  @Input()
  header2: string = 'Esse cillum dolore eu fugiat nulla pariatur.'
  constructor() {}
}
