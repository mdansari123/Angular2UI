import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators,FormControl } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { PromptsComponent } from '../prompts/prompts.component';
import { Workspace } from './Workspace.interface';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];



@Component({
  moduleId: module.id,
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {
    //stateCtrl: FormControl = new FormControl();
    public myForm: FormGroup;
    closeResult: string;
    constructor(private _fb: FormBuilder) { }
   
    ngOnInit() {
        this.myForm = this._fb.group({
            //state: this.stateCtrl,
    
            Dialogname: ['', [Validators.required]],
            Intentname: ['', [Validators.required]],
            Slotquestions: this._fb.array([
                this.initSlotquestion(),
            ]),
            SlotquestionsAction: this._fb.array([
                this.initSlotquestionAction(),
            ]),
            Response: [''],
            SlotquestionsActionPrompt: this._fb.array([
                this.initSlotquestionActionPrompt(),
            ])
        });
    }
    
    
      
    initSlotquestion() {
        return this._fb.group({
            slotquestion: ['', Validators.required],
                   });
    }

    addSlotquestion() {
        const control = <FormArray>this.myForm.controls['Slotquestions'];

        control.push(this.initSlotquestion());
    }
    removeSlotquestion(i: number) {
        const control = <FormArray>this.myForm.controls['Slotquestions'];
        control.removeAt(i);
    }

    initSlotquestionAction() {
        return this._fb.group({
            txtrequired: [''],
            txtparameter: [''],
            txtentity: [''],
            txtvalue: [''],
            txtprompt: ['']
                   });
    }
    addSlotquestionAction() {
        const control = <FormArray>this.myForm.controls['SlotquestionsAction'];
        

        control.push(this.initSlotquestionAction());
    }
    removeSlotquestionAction(j: number) {
        const control = <FormArray>this.myForm.controls['SlotquestionsAction'];
        control.removeAt(j);
    }
    initSlotquestionActionPrompt() {
        return this._fb.group({
            
            prompttxtprompt: ['']
                   });
    }
    addSlotquestionActionPrompt() {
        const control = <FormArray>this.myForm.controls['SlotquestionsActionPrompt'];
        

        control.push(this.initSlotquestionActionPrompt());
    }
    removeSlotquestionActionPrompt(k: number) {
        const control = <FormArray>this.myForm.controls['SlotquestionsActionPrompt'];
        control.removeAt(k);
    }
   
    save(model: Workspace) {
        // call API to save
        // ...
        console.log(model);
    }
    
}
