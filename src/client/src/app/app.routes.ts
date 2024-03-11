import { Routes } from '@angular/router';
import { DetallesAutoComponent } from './components/detalles-auto/detalles-auto.component';
import { AutosComponent } from './components/autos/autos.component';
import { PromocionesComponent } from './components/promociones/promociones.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { AdminComponent } from './components/admin/admin.component';
import { PaisComponent } from './components/pais/pais.component';

export const routes: Routes = [
    {
        path : '',
        redirectTo : '/home',
        pathMatch : 'full'
      },
      {
        path : 'home',
        component : DetallesAutoComponent
      },
      {
        path : 'admin',
        component : AdminComponent
      },
      { path: 'autos',
       component: AutosComponent
      },
      { 
        path: 'autos/detalles_auto',
        component: DetallesAutoComponent 
      },
      { path: 'promociones',
        component: PromocionesComponent
      },
      {
        path: 'reservas',
        component: ReservaComponent
      },
      
      {
        path: 'Pais-admin',
        component: PaisComponent
      } 
];
