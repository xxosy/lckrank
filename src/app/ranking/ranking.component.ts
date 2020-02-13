import { Component, OnInit } from "@angular/core";
import { Team } from "../team";
import { TeamService } from "../team.service";

@Component({
  selector: "app-ranking",
  templateUrl: "./ranking.component.html",
  styleUrls: ["./ranking.component.css"]
})
export class RankingComponent implements OnInit {
  teams: Team[];
  constructor(private teamService: TeamService) {}

  ngOnInit() {
    this.getTeams();
  }

  getTeams(): void {
    this.teamService.getTeams().subscribe(teams => (this.teams = teams));
  }
}
