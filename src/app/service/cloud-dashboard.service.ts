import { Injectable } from '@angular/core';
import { DashBoard } from './dashboard';

@Injectable({
  providedIn: 'root'
})
export class CloudDashboardService {
  private dashboardList: DashBoard[] = [];
  // In real case, Id should be generated by DB
  private dashboardId: number = 0;
  private widgetId: number = 0;

  constructor() { 
  }
  
  addAndGetDashboardId(): number{
     return ++this.dashboardId;
  }

  addAndGetWidgetId(): number{
    return ++this.widgetId;
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
