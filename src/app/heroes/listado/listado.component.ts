import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Aquaman', 'Batman', 'Superman', 'Flash'];

  heroeBorrado: string ='';

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
