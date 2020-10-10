import { Component, OnInit, Input } from '@angular/core';
import { Router} from '@angular/router'
import { DashBoard } from '../service/dashboard';

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.css']
})
export class DashboardListComponent implements OnInit {
  @Input() dashboards: DashBoard[];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  updateDashboard(dashboard: DashBoard){
    let dashboardId = dashboard.id;
    this.router.navigateByUrl('dashboard/' + dashboardId);
  }

  deleteDashboard(dashboard: DashBoard){
     console.log("yet to be implemented");
  }

}
