import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center">
      <h1>
        Welcome to {{title}}!
      </h1>

      <home-page></home-page>
      <home-page-footer></home-page-footer>
    
    </div>
    
  `,
  styles: []
})

      


export class AppComponent {
  title = 'Skill India';
}
