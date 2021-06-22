import { Injectable } from '@angular/core';
import studentsData from '../file/studentsData.json';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }

    // Get all flights
    getStudentsData() {
      return studentsData;
    }
}
