import { Injectable } from "@angular/core";
import { Team } from "./team";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { TeamService } from "./team.service";

@Injectable({
  providedIn: "root"
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const teams = [
      { id: 0, name: "Dr Nice", rank: 1, win: 2, lose: 0, point: 4 },
      { id: 1, name: "Narco", rank: 3, win: 2, lose: 0, point: 4 },
      { id: 2, name: "Bombasto", rank: 2, win: 2, lose: 0, point: 4 },
      { id: 3, name: "Bombasto", rank: 4, win: 2, lose: 0, point: 4 },
      { id: 4, name: "Celeritas", rank: 6, win: 2, lose: 0, point: 4 },
      { id: 5, name: "Magneta", rank: 5, win: 2, lose: 0, point: 4 },
      { id: 6, name: "RubberMan", rank: 8, win: 2, lose: 0, point: 4 },
      { id: 7, name: "Dynama", rank: 10, win: 2, lose: 0, point: 4 },
      { id: 8, name: "Dr IQ", rank: 7, win: 2, lose: 0, point: 4 },
      { id: 9, name: "Magma", rank: 9, win: 2, lose: 0, point: 4 }
    ];
    teams.sort((a: Team, b: Team): number => {
      return a.rank - b.rank;
    });
    return { teams };
  }
  genId(teams: Team[]): number {
    return teams.length > 0 ? Math.max(...teams.map(team => team.id)) + 1 : 11;
  }
  constructor() {}
}
