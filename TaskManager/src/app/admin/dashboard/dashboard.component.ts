import { Component, OnInit } from "@angular/core";
import { DashboardService } from "../../dashboard.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  Designation: string;
  Username: string;
  NoOfTeamMembers: number;
  TotalCostOfAllProjects: number;
  PendingTasks: number;
  UpComingProjects: number;
  ProjectCost: number;
  CurrentExpenditure: number;
  AvailableFunds: number;
  ToDay: Date;

  Clients: string[];
  Projects: string[];
  Years: number[] = [];
  TeamMembersSummary = [];
  TeamMembers = [];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.Designation = "Team Leader";
    this.Username = "Mohit Richharya";
    this.NoOfTeamMembers = 67;
    this.TotalCostOfAllProjects = 240;
    this.PendingTasks = 15;
    this.UpComingProjects = 0.2;
    this.ProjectCost = 2113507;
    this.CurrentExpenditure = 96788;
    this.AvailableFunds = 52536;
    this.ToDay = new Date();

    this.Clients = [
      "AHA Technologies Guru.",
      "Church In The Canyon",
      "Prosper2000"
    ];

    this.Projects = ["Project A", "Project B", "Project C", "Project D"];

    for (var i = 2019; i >= 2010; i--) {
      this.Years.push(i);
    }

    this.TeamMembersSummary = this.dashboardService.getTeamMembersSummary();

    this.TeamMembers = [
      {
        Region: "East",
        Members: [
          { ID: 1, Name: "Denise", Status: "Available" },
          { ID: 2, Name: "Mike", Status: "Available" },
          { ID: 3, Name: "Jason", Status: "Busy" },
          { ID: 4, Name: "Sana", Status: "Busy" }
        ]
      },
      {
        Region: "West",
        Members: [
          { ID: 5, Name: "Hemansh", Status: "Available" },
          { ID: 6, Name: "Tony", Status: "Available" },
          { ID: 7, Name: "Jeremy", Status: "Busy" },
          { ID: 8, Name: "John", Status: "Busy" }
        ]
      },
      {
        Region: "South",
        Members: [
          { ID: 9, Name: "Krishna", Status: "Available" },
          { ID: 10, Name: "Mohan", Status: "Available" },
          { ID: 11, Name: "Raju", Status: "Busy" },
          { ID: 12, Name: "Farooq", Status: "Busy" }
        ]
      },
      {
        Region: "North",
        Members: [
          { ID: 13, Name: "Jacob", Status: "Available" },
          { ID: 14, Name: "Smith", Status: "Available" },
          { ID: 15, Name: "Jones", Status: "Busy" },
          { ID: 16, Name: "James", Status: "Busy" }
        ]
      }
    ];
  }

  onProjectChange($event) {
    if ($event.target.innerHTML == "Project A") {
      this.ProjectCost = 2113507;
      this.CurrentExpenditure = 96788;
      this.AvailableFunds = 52436;
    } else if ($event.target.innerHTML == "Project B") {
      this.ProjectCost = 88923;
      this.CurrentExpenditure = 22450;
      this.AvailableFunds = 2640;
    } else if ($event.target.innerHTML == "Project C") {
      this.ProjectCost = 662183;
      this.CurrentExpenditure = 7721;
      this.AvailableFunds = 9811;
    } else if ($event.target.innerHTML == "Project D") {
      this.ProjectCost = 928431;
      this.CurrentExpenditure = 562;
      this.AvailableFunds = 883;
    }
  }
}
