import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getURLSearchParams } from '../../shared.util';

@Component({
  selector: 'inap-ns-tree-picker',
  templateUrl: './ns-tree-picker.component.html',
  styleUrls: ['./ns-tree-picker.component.scss']
})
export class NsTreePickerComponent implements OnInit {
  selectedArea = 'nationalwide';

  areaTree = [
    {
      label: "Telkomsel Border",
      id: "",
      children: [
        {
          label: "Nationwide",
          id: ''
        },
        {
          label: "Region",
          id: ''
        },
        {
          label: "RTPO",
          id: ''
        },
        {
          label: "NSA",
          id: ''
        },
        {
          label: "DO",
          id: ''
        }
      ]
    },
    {
      label: "Administrative Border",
      id: "",
      children: [
        {
          label: "Nationwide",
          id: '',
          children: [
            {
              label: "Indonesia",
              id: '',
              children: [
                {
                  label: "Papua Nugini",
                  id: ''
                }
              ]
            },
            {
              label: "Timor Leste",
              id: ''
            }
          ]
        },
        {
          label: "Provinsi",
          id: ''
        },
        {
          label: "Kabupaten",
          id: ''
        },
        {
          label: "Kecamatan",
          id: ''
        },
        {
          label: "Kelurahan",
          id: ''
        },
        {
          label: "Desa",
          id: ''
        },
        {
          label: "Site",
          id: ''
        }
      ]
    }
  ];
  constructor(private router: Router) { }

  ngOnInit(): void {
    const areaParam = getURLSearchParams(window.location.href);
    this.selectMenu({ label: areaParam.area || 'Nationalwide'  });
  }

  selectMenu(data: any) {
    this.selectedArea = data.label;
    this.router.navigate([], {
      queryParams: { area: this.selectedArea },
      queryParamsHandling: 'merge'
    });
  }

}
