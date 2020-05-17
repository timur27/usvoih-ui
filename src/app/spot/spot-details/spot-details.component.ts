import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NgbActiveModal, NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-spot-details',
  templateUrl: './spot-details.component.html',
  styleUrls: ['./spot-details.component.scss']
})
export class SpotDetailsComponent implements OnInit {

  displayedColumns = ['name', 'city', 'category'];
  @Input() public spot;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  @ViewChild('details', { static: false }) child: any;

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
    console.log(this.spot);
  }

  passBack() {
    this.passEntry.emit(this.spot);
    this.activeModal.close(this.spot);
  }
}
