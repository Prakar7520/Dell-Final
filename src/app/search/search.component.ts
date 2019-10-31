import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }
  first
  prob_list=[{p:"heating issue",s1:"clean out fan/vents",s2:"limit no. of programs you run",s3:"Laptop cooler reccomended"},
{p:"laptop running slow",s1:"reduce items that run on start up",s2:"remove programs no longer in use",s3:"clean out drive"},
{p:"PowerOn booting error",s1:"hard reset",s2:"Run Hardware Diagosis",s3:"Troubleshoot problem"},
{p:"refuse to charge",s1:"go to device manager, click on the battery and expand microsoft ACPI-complaint control method battery uninstall,shut down,unplug battery and the plug-in the laptop",s2:"Contact Us",s3:"Check connections in the power cable"},
{p:"no internet",s1:"re-boot router",s2:"troubleshoot problem",s3:"Check for wifi issue"},
{p:"black screen", s1:"unplug the power, remove the battery, ten hold the power button for 30-60 seconds, re-attach the power-cord and reboot.Then shut down again,put inbthe battery and re-boot",s2:"troubleshoot",s3:"COntach Us"}]

  ngOnInit() {
  }

}
