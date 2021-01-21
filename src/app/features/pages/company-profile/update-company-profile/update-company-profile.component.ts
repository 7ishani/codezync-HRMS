import { Component, OnInit } from '@angular/core';
import { APP_CONFIG } from 'src/app/app.config';
@Component({
  selector: 'app-update-company-profile',
  templateUrl: './update-company-profile.component.html',
  styleUrls: ['./update-company-profile.component.css']
})
export class UpdateCompanyProfileComponent implements OnInit {

  public imagePath;

  public message: string;
  logo= APP_CONFIG.logo;
  imgURL: any;

  constructor()
  { }

  ngOnInit(): void {

  }

  onSubmit(){
    console.log();
  }

  preview(files){
    if(files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
      this.imagePath = files;
      reader.readAsDataURL(files[0]);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
     }
  }
}
