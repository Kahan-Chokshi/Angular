import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {MemberService} from '../shared/member.service';
import{Member} from '../shared/member.model';

declare var Mes: any;

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
  providers:[MemberService]
})
export class MemberComponent implements OnInit {
  constructor(readonly memberService:MemberService) { }

  ngOnInit() {
      this.resetForm();
      this.getMembersListData();
  }

  resetForm(form?:NgForm){
  
    this.memberService.selectedMember={
      _id:"",
      FirstName:"", 
      LastName:"", 
      ContactNo:"", 
      EmailId:"", 
      Password:"", 
      Gender:"", 
      Status:"" 
    }

    if(form)
    {
      form.reset();
    }
  }

  getMembersListData(){
    this.memberService.getMemberList().subscribe((res)=>{
      this.memberService.Members=res as Member[];
    });
  }

  onSubmit(form: NgForm)
  {
    // form.value.Gender="Male";  
    form.value.Status="Y";
    if (form.value._id == "" || form.value._id == null) {
      this.memberService.postMember(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getMembersListData();
        Mes.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.memberService.putMember(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getMembersListData();
        Mes.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }  

  onEdit(M: Member) {
    this.memberService.selectedMember = M;
    this.getMembersListData();
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.memberService.deleteMember(_id).subscribe((res) => {
        this.resetForm(form);
        this.getMembersListData(); 
        Mes.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

}
