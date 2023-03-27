import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AirlineReservationApiService {
  readonly airlineRerservationAPI = "https://localhost:7147/api"
  readonly pythonAPI = "https://localhost:8000"
  constructor(private http: HttpClient) { }

  //Admins

  getAdminsList():Observable<any[]> {
    return this.http.get<any>(this.airlineRerservationAPI + '/Admins')
  }
  addAdmins(data: any) {
    return this.http.post(this.airlineRerservationAPI + '/Admins', data)
  }
  updateAdmins(id:number|string, data: any) {
    return this.http.put(this.airlineRerservationAPI + `/Admins/${id}`, data)
  }
  deleteAdmins(id: number|string) {
    return this.http.delete(this.airlineRerservationAPI + `/Admins/${id}`)
  }

  //Customers

  getCustomersList():Observable<any[]> {
    return this.http.get<any>(this.airlineRerservationAPI + '/Customers')
  }
  addCustomers(data: any) {
    return this.http.post(this.airlineRerservationAPI + '/Customers', data)
  }
  updateCustomers(id:number|string, data: any) {
    return this.http.put(this.airlineRerservationAPI + `/Customers/${id}`, data)
  }
  deleteCustomers(id: number|string) {
    return this.http.delete(this.airlineRerservationAPI + `/Customers/${id}`)
  }

  //Reports

  getReportsList():Observable<any[]> {
    return this.http.get<any>(this.airlineRerservationAPI + '/Reports')
  }
  addReports(data: any) {
    return this.http.post(this.airlineRerservationAPI + '/Reports', data)
  }
  updateReports(id:number|string, data: any) {
    return this.http.put(this.airlineRerservationAPI + `/Reports/${id}`, data)
  }
  deleteReports(id: number|string) {
    return this.http.delete(this.airlineRerservationAPI + `/Reports/${id}`)
  }

  //Reservations

  getReservationsList():Observable<any[]> {
    return this.http.get<any>(this.airlineRerservationAPI + '/Reservations')
  }
  addReservations(data: any) {
    return this.http.post(this.airlineRerservationAPI + '/Reservations', data)
  }
  updateReservations(id: number|string, data: any) {
    return this.http.put(this.airlineRerservationAPI + `/Reservations/${id}`, data)
  }
  deleteReservations(id: number|string) {
    return this.http.delete(this.airlineRerservationAPI + `/Reservations/${id}`)
  }

  //Schedules

  getSchedulesList():Observable<any[]> {
    return this.http.get<any>(this.airlineRerservationAPI + '/Schedules')
  }
  addSchedules(data: any) {
    return this.http.post(this.airlineRerservationAPI + '/Schedules', data)
  }
  updateSchedules(id: number|string, data: any) {
    return this.http.put(this.airlineRerservationAPI + `/Schedules/${id}`, data)
  }
  deleteSchedules(id: number|string) {
    return this.http.delete(this.airlineRerservationAPI + `/Schedules/${id}`)
  }

  //Tickets

  getTicketsList():Observable<any[]> {
    return this.http.get<any>(this.airlineRerservationAPI + '/Tickets')
  }
  addTickets(data: any) {
    return this.http.post(this.airlineRerservationAPI + '/Tickets', data)
  }
  updateTickets(id: number|string, data: any) {
    return this.http.put(this.airlineRerservationAPI + `/Tickets/${id}`, data)
  }
  deleteTickets(id: number|string) {
    return this.http.delete(this.airlineRerservationAPI + `/Tickets/${id}`)
  }

  //Transactions

  getTransactions():Observable<any[]> {
    return this.http.get<any>(this.airlineRerservationAPI + '/Transactions')
  }
  addTransactions(data: any) {
    return this.http.post(this.airlineRerservationAPI + '/Transactions', data)
  }
  updateTransactions(id: number|string, data: any) {
    return this.http.put(this.airlineRerservationAPI + `/Transactions/${id}`, data)
  }
  deleteTransactions(id: number|string) {
    return this.http.delete(this.airlineRerservationAPI + `/Transactions/${id}`)
  }

  getNotes():Observable<any[]> {
    return this.http.get<any>(this.airlineRerservationAPI + '/Notes')
  }
  addNotes(data: any) {
    return this.http.post(this.airlineRerservationAPI + '/Notes', data)
  }
  updateNotes(id: number|string, data: any) {
    return this.http.put(this.airlineRerservationAPI + `/Notes/${id}`, data)
  }
  deleteNotes(id: number|string) {
    return this.http.delete(this.airlineRerservationAPI + `/Notes/${id}`)
  }

}
