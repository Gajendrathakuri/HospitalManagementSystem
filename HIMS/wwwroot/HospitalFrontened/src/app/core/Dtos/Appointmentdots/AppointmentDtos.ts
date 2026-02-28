export interface CreateAppointmentDto {
  title: string;
  patientId: string; 
  staffId: string;   
  appointmentStatus?: AppointmentStatus; 
  appointmentDate: string; 
  appointmentTime: string;
}



export enum AppointmentStatus{
     Completed=0,
  Pending=1, 
  Canceled=2
}


export interface AppointmentResponseDto {
  appointmentId: string;
  appointmentDate: string; 
  appointmentTime: string; 
  patientName: string;
  patientContact: string;
  patientAddress: string;
  patientEmail: string;
  DoctorName:string;
  patientAge: number;
  appointmentStatus: AppointmentStatus;
}