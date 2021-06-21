import {Component} from '@angular/core';
import {ApiService} from "./api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'members-front';

  select_member = {id: 0, name: '', surname: ''};
  members = [
    {name: 'Member 01', id: 1, surname: 'Member', photo: 'teste.com'},
    {name: 'Member 02', id: 2, surname: 'Member', photo: 'teste.com'},
    {name: 'Member 03', id: 3, surname: 'Member', photo: 'teste.com'},
  ];

  constructor(private api: ApiService) {
    this.getMembers()
  }

  getMembers = () => {
    this.api.getAllMembers().subscribe(
      data => {
        this.members = data
      },
      error => {
        console.log("Erro");
      }
    );
  };

  memberClicked = (member: any) =>{
    this.api.getMember(member.id).subscribe(
      data => {
        console.log(data);
        this.select_member = data
      },
      error => {
        console.log("Erro", error.message);
      }
    );
  }
}
