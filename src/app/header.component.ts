import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    // template: '<h1>Hello world<h1>' (this is not the best practice, so thats why we created a marca in external HTML file)
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'

})

export class HeaderComponent {

}