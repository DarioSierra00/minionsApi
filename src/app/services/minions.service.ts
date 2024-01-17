import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Minion } from '../interfaces/minion';

@Injectable({
  providedIn: 'root'
})
export class MinionsService {

  constructor(private http : HttpClient) { }

  url : string = "http://localhost:3000/minions/"

  getMinions() : Observable<Minion[]>{
    return this.http.get<Minion[]>(this.url)
  }

  getMinionByName(name : string) : Observable<Minion>{
    return this.http.get<Minion>(`${this.url}?name=${name}`)
  }

  getMinionById(id : string) : Observable<Minion>{
    return this.http.get<Minion>(this.url+"/"+id)
  }

  addMinion(minion : Omit<Minion,"id">) : Observable<Minion>{
    return this.http.post<Minion>(this.url,minion)
  }

  editMinion(id : string ,minion : Omit<Minion, "id">) : Observable<Minion>{
    return this.http.put<Minion>(this.url+"/"+id, minion)
  }

  deleteMinion(id : number) : Observable<Minion>{
    return this.http.delete<Minion>(this.url+"/"+id)
  }
}
