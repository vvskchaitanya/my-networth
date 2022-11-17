import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.less']
})
export class LogoutComponent implements OnInit {

  constructor(private firestore:FirestoreService,private route:Router) { }

  ngOnInit(): void {
    this.firestore.loader.show();
    this.firestore.auth.signOut().then(()=>{
      this.firestore.loader.hide();
      this.firestore.toast.success("User Logged out","Logout");
      this.route.navigate(['home']);
    });
  }

}
