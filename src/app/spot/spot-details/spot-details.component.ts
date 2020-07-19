import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NgbActiveModal, NgbTimeAdapter, NgbTimepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import {TimePickerAdapter} from './time-picker.adapter';

@Component({
  selector: 'app-spot-details',
  templateUrl: './spot-details.component.html',
  styleUrls: ['./spot-details.component.scss'],
  providers: [{provide: NgbTimeAdapter, useClass: TimePickerAdapter}]
})
export class SpotDetailsComponent implements OnInit  {
  @Input() public spot;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  @ViewChild('details', { static: false }) child: any;

  constructor(public activeModal: NgbActiveModal,
            config: NgbTimepickerConfig) {
    config.seconds = false;
    config.spinners = false;
    config.size = 'small';
  }

  ngOnInit(): void {}

  passBack() {
    this.passEntry.emit(this.spot);
    this.activeModal.close(this.spot);
  }
}
