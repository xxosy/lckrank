import { Injectable } from "@angular/core";
import { Team } from "./team";
import { InMemoryDbService } from "angular-in-memory-web-api";

@Injectable({
  providedIn: "root"
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const teams = [
      { id: 0, name: "Dr Nice", rank: 1, win: 2, lose: 0, point: 4 },
      { id: 1, name: "Narco", rank: 1, win: 2, lose: 0, point: 4 },
      { id: 2, name: "Bombasto", rank: 1, win: 2, lose: 0, point: 4 },
      { id: 3, name: "Bombasto", rank: 1, win: 2, lose: 0, point: 4 },
      { id: 4, name: "Celeritas", rank: 1, win: 2, lose: 0, point: 4 },
      { id: 5, name: "Magneta", rank: 1, win: 2, lose: 0, point: 4 },
      { id: 6, name: "RubberMan", rank: 1, win: 2, lose: 0, point: 4 },
      { id: 7, name: "Dynama", rank: 1, win: 2, lose: 0, point: 4 },
      { id: 8, name: "Dr IQ", rank: 1, win: 2, lose: 0, point: 4 },
      { id: 9, name: "Magma", rank: 1, win: 2, lose: 0, point: 4 }
    ];
    return { teams };
  }
  genId(teams: Team[]): number {
    return teams.length > 0 ? Math.max(...teams.map(team => team.id)) + 1 : 11;
  }
  constructor() {}
}
