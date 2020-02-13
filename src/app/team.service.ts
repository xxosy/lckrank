import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { Team } from "./team";
import { MessageService } from "./message.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TeamService {
  private teamesUrl = "api/teames";

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}
  private log(message: string) {
    this.messageService.add(`TeamService: ${message}`);
  }
  getTeams(): Observable<Team[]> {
    const req = this.http
      .get("http://localhost:3000/user/1274347239")
      .subscribe(response => console.log(response));
    return this.http
      .get<Team[]>(this.teamesUrl)
      .pipe(catchError(this.handleError<Team[]>("getTeames", [])));
  }

  getTeam(id: number): Observable<Team> {
    // TODO: send the message _after_ fetching the team
    const url = `${this.teamesUrl}/${id}`;
    return this.http.get<Team>(url).pipe(
      tap(_ => this.log(`fetched team id=${id}`)),
      catchError(this.handleError<Team>(`getTeam id=${id}`))
    );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
