import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home {
  rawkv0q: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('MEKYD')
    this.meta.addTags([
      {
        name: 'description',
        content: 'Design, engineering, and artist services.',
      },
      {
        property: 'og:title',
        content: 'MEKYD',
      },
      {
        property: 'og:description',
        content: 'Design, engineering, and artist services.',
      },
      {
        property: 'og:image',
        content:
          'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/fdae3922-f9c7-4185-88e0-2f8344560279/f878d92d-b8db-4f9c-b511-0c1356a6def6?org_if_sml=1&force_format=original',
      },
    ])
  }
}
