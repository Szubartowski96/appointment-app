import { Appointment } from './../models/appointment';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css'],
})
export class AppointmentListComponent implements OnInit {

  newAppointmentTitle: string = '';
  newAppointnmentDate: Date = new Date();
  
  appointments: Appointment[] = [];

  ngOnInit(): void {
    let saveAppointments = localStorage.getItem('appointments');
    this.appointments = saveAppointments ? JSON.parse(saveAppointments) : []; 
  }

  addApointment(){
    if(this.newAppointmentTitle.trim().length && this.newAppointnmentDate){
      let newApointment: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointnmentDate
      }

      this.appointments.push(newApointment)

      this.newAppointmentTitle = '';
      this.newAppointnmentDate = new Date();

      localStorage.setItem('appointments', JSON.stringify(this.appointments))

    }
  }

  deleteAppointment(index: number){
    this.appointments.splice(index,1)
    localStorage.setItem('appointments', JSON.stringify(this.appointments))
  }
  
}
