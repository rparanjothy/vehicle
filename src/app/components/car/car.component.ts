import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-car",
  templateUrl: "./car.component.html",
  styleUrls: ["./car.component.css"]
})
export class CarComponent implements OnInit {
  year: number;
  make: string;
  model: string;
  smiles: string[];
  features: string[];
  isEditing: boolean;
  constructor() {
    console.log("Car Component constructor..");
  }

  ngOnInit() {
    console.log("Car Component ngOnInit..");
    this.make = "Acura";
    this.model = "MDX";
    this.year = 2011;
    this.smiles = ["-"];
    this.features = ["Twin A/C", "SH-AWD", "11-speakers", "V6"];
    console.log(this);
    this.isEditing = false;
  }

  smile() {
    console.log("Smiling!!");
    this.smiles.unshift(";)");
    console.log(this.smiles.length);
  }

  addFeature(f) {
    console.log(f);
    this.features.unshift(f);
    return false;
  }

  editVehicle() {
    this.isEditing = !this.isEditing;
  }
}
