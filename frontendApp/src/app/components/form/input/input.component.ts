import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-input-form',
  templateUrl: './input.component.html',
  standalone: false,
})
export class InputFormComponent {
  websiteLink: string = '';

  constructor(private dataService: DataService, private router: Router) {}

  fetchData() {
    // Call the API and navigate to the result page with the website link as the route parameter
    this.dataService.getData(this.websiteLink).subscribe(data => {
      this.dataService.setServerData(data); // Save data for the next page
      this.router.navigate(['/scan', encodeURIComponent(this.websiteLink)]);
    });
  }

  fetchData2() {
    // Call the API and navigate to the result page with the website link as the route parameter
    this.dataService.getData2(this.websiteLink).subscribe(data => {
      this.dataService.setServerData(data); // Save data for the next page
      this.router.navigate(['/report', encodeURIComponent(this.websiteLink)]);
    });
  }
}
