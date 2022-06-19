import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'finlex-frontend';
  items = [
    {logo: 'bi bi-pencil-square', name: 'Lorem Ipsum', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
    {logo: 'bi bi-arrow-clockwise', name: 'Lorem Ipsum', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
    {logo: 'bi bi-list-check', name: 'Lorem Ipsum', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
    {logo: 'bi bi-globe', name: 'Lorem Ipsum', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
    {logo: 'bi bi-gear', name: 'Lorem Ipsum', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
    {logo: 'bi bi-people', name: 'Lorem Ipsum', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
    {logo: 'bi bi-building', name: 'Lorem Ipsum', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
    {logo: 'bi bi-briefcase', name: 'Lorem Ipsum', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
    {logo: 'bi bi-newspaper', name: 'Lorem Ipsum', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
    {logo: 'bi bi-graph-up-arrow', name: 'Lorem Ipsum', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
    {logo: 'bi bi-currency-euro', name: 'Lorem Ipsum', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
    {logo: 'bi bi-briefcase', name: 'Lorem Ipsum', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
    {logo: 'bi bi-building', name: 'Lorem Ipsum', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
  ]
}
