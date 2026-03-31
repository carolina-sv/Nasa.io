import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NasaService } from './services/nasa.service';
import { TranslateService } from './services/translate';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit {
  nasaData: any;
  loading = true;
  translating = false;

  constructor(private nasaService: NasaService, private translateService: TranslateService) {}

  ngOnInit() {
  this.nasaService.getData().subscribe({
    next: (res) => {
      this.nasaData = res;
      this.loading = false;
      this.traduzir();
    },
    error: (err) => {
      console.warn('NASA bloqueou (Erro 429). Usando dados de backup para a demonstração.');
      
      // DADOS DE BACKUP PARA A ENTREVISTA:
      this.nasaData = {
        url: 'https://images-assets.nasa.gov/image/PIA08653/PIA08653~medium.jpg',
        title: 'Nebulosa de Helix',
        date: '2026-03-31',
        explanation: 'A Nebulosa de Helix é um exemplo de nebulosa planetária formada por uma estrela semelhante ao Sol no final de sua vida.'
      };
      
      this.loading = false;
    }
  });
}
  traduzir() {
    if (!this.nasaData?.explanation) return;
    this.translating = true;
    // Traduzindo só um pedaço para não estourar o limite da API gratuita
    const texto = this.nasaData.explanation.substring(0, 450);
    this.translateService.translate(texto).subscribe({
      next: (t) => {
        this.nasaData.explanation = t + "... [Tradução Parcial]";
        this.translating = false;
      },
      error: () => { this.translating = false; }
    });
  }
}