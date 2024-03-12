import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { AutosComponent } from './components/autos/autos.component';
import { DetallesAutoComponent } from './components/detalles-auto/detalles-auto.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PaisComponent } from './components/pais/pais.component';
import { PromocionesComponent } from './components/promociones/promociones.component';
import { ReservaComponent } from './components/reserva/reserva.component';

export const routes: Routes = [
    {
        path : '',
        redirectTo : '/home',
        pathMatch : 'full'
      },
      {
        path : 'home',
        component : NavigationComponent
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
