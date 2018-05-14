import { Component } from '@angular/core';
//import { Observable } from 'rxjs/Observable';
{}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Testing typeahead';
   friends= [
     'Ritu',
     'Mansi',
     'Nisha',
     'Rushabh',
     'Gopi',
     'Man'
   ]
}
