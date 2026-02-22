import {
  Component,
  importProvidersFrom,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { IpatientReponse } from '../../core/types/patient';

@Component({
  selector: 'app-patient-detail',
  imports: [],
  templateUrl: './patient-detail.html',
  styleUrl: './patient-detail.css',
})
export class PatientDetail implements OnChanges {
  @Input() curr: IpatientReponse | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['curr'] && this.curr) {
      console.log(this.curr, 'received in child');
      console.log('hello wolrld');
    }
  }
}
