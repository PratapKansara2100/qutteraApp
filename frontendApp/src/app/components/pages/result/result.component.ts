import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-result-page',
  standalone: false,
  templateUrl: './result.component.html',
})
export class ResultPageComponent implements OnInit {
  website: string = '';
  serverData: any;

  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit(): void {
    this.website = decodeURIComponent(this.route.snapshot.paramMap.get('website') || '');
    this.serverData = this.dataService.getServerData(); // Retrieve the stored data
  }
}
