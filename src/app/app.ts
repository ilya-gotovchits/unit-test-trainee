import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculatorService } from '../services/calculator.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('unit-test-trainee');

  constructor(private readonly calculator: CalculatorService) {}

  protected get demoSum(): number {
    return this.calculator.add(2, 3);
  }
}
