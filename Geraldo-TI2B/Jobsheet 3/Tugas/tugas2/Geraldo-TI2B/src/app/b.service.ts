import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BService {
  CourseService(): any[]{
  throw new Error("Method not implemented");
}

  constructor() { }

  getHobby(){
    return[
        {id:1, hob: "Berlari", ket: "Lari 1 jam tiap hari"},
        {id:2, hob: "Senam", ket: "Senam tiap sore"},
        {id:3, hob: "Bermain Musik", ket: "Bermain musik saat waktu senggang"}
    ]
}
}
