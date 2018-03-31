import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgbModal, NgbModalOptions, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Output() toParent: EventEmitter<string> = new EventEmitter<string>();

  closeResult: string;
  modalWindowRef: NgbModalRef;

  _firstName: string;

  get firstName() :string {
    return this._firstName
  }

  set firstName(value: string ) {
    this._firstName = value; 
  }   
  
  @ViewChild('content') private modalContent;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.open(this.modalContent)
  }

  open(content) {

    let options: NgbModalOptions = {
      size: 'sm',
      keyboard: true,
      beforeDismiss: function() {
        return true
      }
    };

    this.modalWindowRef=this.modalService.open(content, options)
    this.modalWindowRef.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;console.log(result)
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;console.log(reason)
    });
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  closeModal(text: string)  {
    this.modalWindowRef.close()
    console.log('in closeModal')
  }

  dismissModal(text: string)  {
    this.modalWindowRef.close()
    console.log('in dismissModal')
  }

  sendOutputVariable(): void {
    this.toParent.emit('Dieser Text wurde von binding2.component (Child) an binding.component (Parent) geschickt');
  }


}