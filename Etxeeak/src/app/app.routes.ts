
import { Routes } from '@angular/router';
import { EtxeZerrenda } from './etxe-zerrenda/etxe-zerrenda';
import { EtxeXehetasuna } from './etxe-xehetasuna/etxe-xehetasuna';

export const routes: Routes = [
    { path: '', component: EtxeZerrenda, title: 'Hasiera - Etxeak' },
    { path: 'xehetasuna/:id', component: EtxeXehetasuna, title: 'Etxearen xehetasunak' }
];
