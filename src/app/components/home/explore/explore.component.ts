import { Component, OnInit } from '@angular/core';
import { ForYou } from "../../../components/home/explore/homedata.model";
@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {
  data:any;
  forYou: ForYou[] = [
      new ForYou ('Jonathan Reinink','Automated and human services for upgrading your@laravelphpprojects, including Lumen, as well as linters to keep your code modern.','4 hours ago','https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 500w, https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 1000w'),
      new ForYou ('Tailwind CSS','A utility-first CSS framework for rapid UI development. Created by@adamwathan, developed in collaboration with@reinink,@steveschoger, and@davidhemphill. ','9 hours ago','https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 500w, https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 1000w'),
      new ForYou ('Taylor Otwell','Founded and creating Laravel for the happiness of all sentient beings, especially developers. Space pilgrim.','4 hours ago','https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 500w, https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 1000w'),
      new ForYou ('Jonathan Reinink','Automated and human services for upgrading your@laravelphpprojects, including Lumen, as well as linters to keep your code modern.','4 hours ago','https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 500w, https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 1000w'),
      new ForYou ('Tailwind CSS','A utility-first CSS framework for rapid UI development. Created by@adamwathan, developed in collaboration with@reinink,@steveschoger, and@davidhemphill. ','9 hours ago','https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 500w, https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 1000w'),
      new ForYou ('Taylor Otwell','Founded and creating Laravel for the happiness of all sentient beings, especially developers. Space pilgrim.','4 hours ago','https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 500w, https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 1000w'),
      new ForYou ('Taylor Otwell','Founded and creating Laravel for the happiness of all sentient beings, especially developers. Space pilgrim.','4 hours ago','https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 500w, https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 1000w'),
    ];
  constructor() { }

  ngOnInit(): void {
    this.data = this.forYou;
    console.log(this.data);

  }

}
