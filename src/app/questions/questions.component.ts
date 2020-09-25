import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  questions: any;
  questionslist = [];

  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit(): void {
    
//    this.authservice.getQuestions().subscribe(data => this.questions = data);
    this.authservice.getQuestions().subscribe(data => {
      this.questions = data;
      this.questionslist = this.questions.items;
      console.log(this.questionslist);
    });

  }

  user(id){
    this.router.navigate(['userprofile'],{
      queryParams:{id: JSON.stringify(id)}
    });
    // this.authservice.individualuser(id);
  }

}
