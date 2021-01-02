import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../common.service';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import {ToastrService} from 'ngx-toastr'
import { throwError } from 'rxjs';
import { SimpleModalModule } from 'ngx-simple-modal';
import { SimpleModalComponent, SimpleModalService } from 'ngx-simple-modal';
import {MatProgressSpinner, MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import {MatTableModule} from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator';
import {NgxPaginationModule} from 'ngx-pagination'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
  
  allUser: Object;
  isEdit=false;
  isAdd=false;
  myForm : NgForm;
  isUpdate=true;
  isId=false;
  showSpinner=false;
  

  collection=[];
  
  userObj={
    firstname:" ",
    lastname:"",
    id:"",
    gender:"",
    grade:""
  }

  
  @ViewChild(MatPaginator) paginator: MatPaginator;


  ngOnInit(): void{
    this.getLatestUser();
    
  }
  
  constructor(private commonService:CommonService,private snackbar:MatSnackBar,private table:MatTableModule){
    
  

  }
    
    addUser(formObj){
      
     
      for(let index in this.allUser){
        if(this.allUser[index].id == formObj.id||formObj.firstname==""||formObj.lastname==""||formObj.id==""||formObj.gender==""||formObj.grade==""){
            alert("Please enter correct details")
            this.isId=true;
            break;

        }
         
      }

  if(this.isId==false){
      this.commonService.createUser(formObj).subscribe((response)=>{
      this.getLatestUser();

      })
      this.snackbar.open("Added","",{duration:500})
      this.nouser();
       }

       this.isId=false;


      
      
    }

    getLatestUser(){
      
      this.showSpinner=true;
      setTimeout(() =>{
        this.showSpinner=false;

      },2000);

      this.commonService.getAllUser().subscribe((response)=>{
        this.allUser = response
       if(this.allUser!=0){
          this.isAdd=false;
          for(let index in this.allUser){
            this.collection.push(this.allUser[index])
            
          }
        }

       else
          this.isAdd=true;
        
      })
    }

    editUser(user){
    
      this.isEdit = true;
      this.userObj= user;
      

}

    deleteUser(user){
      this.commonService.deleteUser(user).subscribe(()=>{
        this.getLatestUser();
      })
    }
 
    updateUser(){

      this.isEdit = !this.isEdit;
      this.commonService.updateUser(this.userObj).subscribe(()=>{
        this.getLatestUser();
      }
      )
      this.nouser();
      this.snackbar.open("Updated","",{duration:500})
      this.isUpdate=false;
      
    }

    nouser(){
      this.userObj={
        firstname:"",
        lastname:"", 
        id:"",
        gender:"",
        grade:""
      }
      
    }

    loadData(){
      
    }
    

    


}
