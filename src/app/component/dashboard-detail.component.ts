import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { DashBoard } from '../service/dashboard';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

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
  widgetTypeList: string[] = [];
  widgetName: string; // the new widget name to be added

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private modalService: BsModalService) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.dashboard = data['dashboard'];
    })
  }

  openCreateWidgetModal(template: TemplateRef<any>) {
    this.widgetName = "";
    this.source = "";
    this.bsModalRef = this.modalService.show(template);
  }

  createNewWidget() {

  }

}
