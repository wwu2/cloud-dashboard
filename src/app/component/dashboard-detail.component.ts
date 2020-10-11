import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { DashBoard } from '../service/dashboard';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CloudDashboardService } from '../service/cloud-dashboard.service';
import { CloudResourceWidget } from '../service/cloud-resource-widget';

@Component({
  selector: 'app-dashboard-detail',
  templateUrl: './dashboard-detail.component.html',
  styleUrls: ['./dashboard-detail.component.css']
})
export class DashboardDetailComponent implements OnInit {
  bsModalRef: BsModalRef;
  dashboard: DashBoard;
  source: string;
  sourceList: string[] = ["API Call", "SQL"];
  widgetTypeList: string[] = ["networks", "servers", "storages", "applications"];
  resourceName: string; // the new cloud resource name to be added
  widget: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private modalService: BsModalService, private dashboardService: CloudDashboardService) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.dashboard = data['dashboard'];
    })
  }

  openCreateWidgetModal(template: TemplateRef<any>) {
    this.widget = "";
    this.resourceName = "";
    this.source = "";
    this.bsModalRef = this.modalService.show(template);
  }

  createNewCloudResource() {
     let cloudResource: CloudResourceWidget = {id: undefined, name: "", widgetType: "", source: ""};
     cloudResource['name'] = this.resourceName;
     cloudResource['widgetType'] = this.widget;
     cloudResource['source'] = this.source;
     let cloudResourceId =  this.dashboardService.addAndGetWidgetId();
     cloudResource['id'] = cloudResourceId;
     this.dashboard['cloudResourceWidgets'].push(cloudResource);
  }

}
