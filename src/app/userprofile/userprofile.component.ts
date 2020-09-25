import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit {

  userid: any;
  questions: any;
  questionslist = [];
  user = [];

  constructor(private authservice: AuthService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    // this.authservice.$userid.subscribe(data1 => {
    //   console.log("this is id:", data1);
    // })

    this.route.queryParams.subscribe((params)=>{
      console.log(params);
      this.userid = params;
      console.log(this.userid.id);
    })

    this.authservice.getQuestions().subscribe(data => {
      this.questions = data;
      this.questionslist = this.questions.items;
      console.log(this.questionslist);
      for(var i in this.questionslist){
        if(this.questionslist[i].question_id == this.userid.id){
            this.user = this.questionslist[i];
        }
      }
      console.log(this.user);
    });


  }

}
