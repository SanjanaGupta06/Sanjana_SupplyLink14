import { Component } from '@angular/core';

@Component({
  selector: 'app-warehousesample',
  standalone: true,
  imports: [],
  templateUrl: './warehousesample.component.html',
  styleUrls: ['./warehousesample.component.css']
})
export class WarehouseSampleComponent {
  warehouse={
    warehouseId:100,
    supplierId:'1',
    warehouseName: "xyzab",
    location: "abcd",
    capacity: 500
  };
}
