import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router'
import { DashBoard } from '../service/dashboard';
import {BsModalService, BsModalRef} from 'ngx-bootstrap/modal';
import { CloudDashboardService } from '../service/cloud-dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  bsModalRef: BsModalRef;
  dashboards: DashBoard[];
  dashboardName: string;  // the new dashboard name to be created
  globalContext: string; // the global context to be selected for the new created dashboard
  contextList: string[] = ["Tenant Name","Project Name"];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private modalService: BsModalService, private dashboardService: CloudDashboardService) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
         this.dashboards = data['dashboards'];
    })
  }

  openCreateModal(template: TemplateRef<any>) {
      this.dashboardName = "";
      this.globalContext = "";
      this.bsModalRef = this.modalService.show(template);
  }

  createNewDashboard() {
       let dashboard = {};
       dashboard['name'] = this.dashboardName;
       dashboard['context'] = this.globalContext;
       dashboard['cloudResourceWidgets'] = [];
       let dashboardId = this.dashboardService.addAndGetDashboardId();
       dashboard['id'] = dashboardId;
       this.dashboardService.addDashBoard(dashboard);
       this.bsModalRef.hide();
       this.router.navigateByUrl('dashboard/' + dashboardId);
  }

}
