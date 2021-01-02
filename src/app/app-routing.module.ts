import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuildingComponent } from './building/building.component';
import { CityComponent } from './city/city.component';
import { CreateComponent } from './create/create.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HinjewadiComponent } from './hinjewadi/hinjewadi.component';
import { LoginComponent } from './login/login.component';
import { OfficeComponent } from './office/office.component';
import { PuneComponent } from './pune/pune.component';
import { RigvedaComponent } from './rigveda/rigveda.component';
import { RigvedafloorComponent } from './rigvedafloor/rigvedafloor.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"create",component:CreateComponent},
  {path:"dashboard",component:DashboardComponent},
  {
    path: 'dashboard/page1/:pageOneID',
    component: CityComponent,
    data: {
      title: 'city',
      breadcrumb: [
        {
          label: "City",
          url: "/dashboard/page1/:pageOneID/page2/:pageTwoID"
        },

      ]
    },
  },
  {
    path: 'dashboard/page1/:pageOneID/page2/:pageTwoID',
    component: PuneComponent,
    data: {
      title: 'Pune',
      breadcrumb: [
        {
          label: 'City',
          url: '/dashboard/page1/:pageOneID'
        },
        {
          label: ':Pune',
          url: '/dashboard/page1/:pageOneID/page2/:pageTwoID/page3/:pageThreeID'
        }
      ]
    },
  },
  {
    path: 'dashboard/page1/:pageOneID/page2/:pageTwoID/page3/:pageThreeID',
    component: OfficeComponent,
    data: {
      title: 'page3',
      breadcrumb: [
        {
          label: 'City',
          url: '/dashboard/page1/:pageOneID'
        },
        {
          label: ':Pune',
          url: '/dashboard/page1/:pageOneID/page2/:pageTwoID'
        },
        {
          label: '>',
          url: ''
        },
        {
          label: 'Office',
          url: '/dashboard/page1/:pageOneID/page2/:pageTwoID/page3/:pageThreeID/page4/:pageFourID'
        }
      ]
    },
  },

  {
    path: 'dashboard/page1/:pageOneID/page2/:pageTwoID/page3/:pageThreeID/page4/:pageFourID',
    component: HinjewadiComponent,
    data: {
      title: 'page4',
      breadcrumb: [
        {
          label: 'City',
          url: '/dashboard/page1/:pageOneID'
        },
        {
          label: ':Pune',
          url: '/dashboard/page1/:pageOneID/page2/:pageTwoID'
        },
        {
          label: '>',
          url: ''
        },
        {
          label: 'Office',
          url: '/dashboard/page1/:pageOneID/page2/:pageTwoID/page3/:pageThreeID'
        },
        {
          label: ':Hinjewadi',
          url:'/dashboard/page1/:pageOneID/page2/:pageTwoID/page3/:pageThreeID/page4/:pageFourID/page5/:pageFiveID'
        }

      ]
    },
  },

 { path: 'dashboard/page1/:pageOneID/page2/:pageTwoID/page3/:pageThreeID/page4/:pageFourID/page5/:pageFiveID',
  component: BuildingComponent,
  data: {
    title: 'page5',
    breadcrumb: [
      {
        label: 'City',
        url: '/dashboard/page1/:pageOneID'
      },
      {
        label: ':Pune',
        url: '/dashboard/page1/:pageOneID/page2/:pageTwoID'
      },
      {
        label: '>',
        url: ''
      },
      {
        label: 'Office',
        url: '/dashboard/page1/:pageOneID/page2/:pageTwoID/page3/:pageThreeID/page4/:pageFourID'
      },
      {
        label: ':Hinjewadi',
        url:'/dashboard/page1/:pageOneID/page2/:pageTwoID/page3/:pageThreeID/page4/:pageFourID'
      },
      {
        label: '>',
        url: ''
      },
      {
        label: 'Building',
        url:'/dashboard/page1/:pageOneID/page2/:pageTwoID/page3/:pageThreeID/page4/:pageFourID/page5/:pageFiveID/page6/:pageSixID'
      }


    ]
  },
},

{ path: 'dashboard/page1/:pageOneID/page2/:pageTwoID/page3/:pageThreeID/page4/:pageFourID/page5/:pageFiveID/page6/:pageSixID',
  component: RigvedaComponent,
  data: {
    title: 'page6',
    breadcrumb: [
      {
        label: 'City',
        url: '/dashboard/page1/:pageOneID'
      },
      {
        label: ':Pune',
        url: '/dashboard/page1/:pageOneID/page2/:pageTwoID'
      },
      {
        label: '>',
        url: ''
      },
      {
        label: 'Office',
        url: '/dashboard/page1/:pageOneID/page2/:pageTwoID/page3/:pageThreeID/page4/:pageFourID'
      },
      {
        label: ':Hinjewadi',
        url:'/dashboard/page1/:pageOneID/page2/:pageTwoID/page3/:pageThreeID/page4/:pageFourID'
      },
      {
        label: '>',
        url: ''
      },
      {
        label: 'Building',
        url:'/dashboard/page1/:pageOneID/page2/:pageTwoID/page3/:pageThreeID/page4/:pageFourID/page5/:pageFiveID'
      },

      {
        label: ':Rigveda',
        url:'/dashboard/page1/:pageOneID/page2/:pageTwoID/page3/:pageThreeID/page4/:pageFourID/page5/:pageFiveID/page6/:pageSixID/page7/:pageSevenID'
      }


    ]
  },
},

{ path: 'dashboard/page1/:pageOneID/page2/:pageTwoID/page3/:pageThreeID/page4/:pageFourID/page5/:pageFiveID/page6/:pageSixID/page7/:pageSevenID',
  component: RigvedafloorComponent,
  data: {
    title: 'page7',
    breadcrumb: [
      {
        label: 'City',
        url: '/dashboard/page1/:pageOneID'
      },
      {
        label: ':Pune',
        url: '/dashboard/page1/:pageOneID/page2/:pageTwoID'
      },
      {
        label: '>',
        url: ''
      },
      {
        label: 'Office',
        url: '/dashboard/page1/:pageOneID/page2/:pageTwoID/page3/:pageThreeID/page4/:pageFourID'
      },
      {
        label: ':Hinjewadi',
        url:'/dashboard/page1/:pageOneID/page2/:pageTwoID/page3/:pageThreeID/page4/:pageFourID'
      },
      {
        label: '>',
        url: ''
      },
      {
        label: 'Building',
        url:'/dashboard/page1/:pageOneID/page2/:pageTwoID/page3/:pageThreeID/page4/:pageFourID/page5/:pageFiveID'
      },

      {
        label: ':Rigveda',
        url:'/dashboard/page1/:pageOneID/page2/:pageTwoID/page3/:pageThreeID/page4/:pageFourID/page5/:pageFiveID/page6/:pageSixID'
      },
      {
        label: '>',
        url: ''
      },
      {
        label: 'Floors',
        url:''
      },


    ]
  },
},


  {
    path: '', pathMatch: 'full', redirectTo: '/page1/1'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
