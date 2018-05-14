import { Component } from '@angular/core';


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
   app: any;
   

  app.get('/:data', function(req,res))
  console.log(res.query.data);
  var data1=res.query.data;
  var friends=[]
  for(var i=0;i<friends.length;i++){
    if(friends[i].find(data1)>=0){
      friends.push(friends[i]);

    }
  }

res.json(friends);

  
});
app.listen(3000);
