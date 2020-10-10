import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DashBoard } from './dashboard';
import { CloudDashboardService } from './cloud-dashboard.service';
import { Injectable } from '@angular/core';


@Injectable()
export class DashBoardResolver implements Resolve<any>{
    constructor(private dashboardService: CloudDashboardService){

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): DashBoard[] {
        return this.dashboardService.getAllDashBoards();
    }
}

@Injectable()
export class DashBoardDetailResolver implements Resolve<any>{
    constructor(private dashboardService: CloudDashboardService){

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): DashBoard {
        return this.dashboardService.getDashboardById(parseInt(route.params['id']));
    }
}