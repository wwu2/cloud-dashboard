import { Injectable } from '@angular/core';
import { DashBoard } from './dashboard';

@Injectable({
  providedIn: 'root'
})
export class CloudDashboardService {
  private dashboardList: DashBoard[] = [];
  private dashboardId: number = 0;

  constructor() { 
  }
  
  addAndGetId(): number{
     return ++this.dashboardId;
  }

  getAllDashBoards() : DashBoard[]{
      return this.dashboardList;
  }

  addDashBoard(dashboard: any) {
      this.dashboardList.push(dashboard);
  }

  getDashboardById(id: number): DashBoard{
    return this.dashboardList.find(eachDashboard => eachDashboard['id'] === id);
  }

}
