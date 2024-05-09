# Microsoft Store Clone

- Esse projeto é um desafio de código que faz parte da trilha de Angular da [DIO](https://dio.me).
- Trata de um simples clone da Microsoft Store. Obviamente que não está implementado todas as funcionalidades de um e-commerce.

## Requisitos

- Para executar esse exemplo é necessário criar uma conta grátis no site [Rawg.io](https://rawg.io/) e obter uma chave para utilizar a API que obtém as informações referente aos jogos.
- Substitua a variável `apiKey` conforme mostrado no código abaixo, pela chave obtida após realizar com sucesso o cadastro no site.
- Depois de clonar o projeto execute o comando `npm i` para instalar todas as dependências do projeto em sua máquina.

```games.service.ts
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Games } from '../interfaces/games.interface';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  private readonly baseUrl: string = 'https://api.rawg.io/api/games';
  private readonly apiKey: string = 'your-api-key';

  constructor(private readonly http: HttpClient) {}

  getGames(page: number, page_size: number): Observable<Games[]> {
  }
}
```

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 17.3.1.

## Development server

Execute `ng serve -o` para criar um server de desenvolvimento. Navegue para `http://localhost:4200/`. A aplicação recarregará automaticamente para qualquer alteração realizada no projeto.

## Code scaffolding

Execute `ng generate component component-name` para gerar um novo componente. Você também pode usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Compilação

Execute `ng build` para compilar o projeto. Os artefatos da compilação serão armazenados no diretório `dist/`.

## Ajuda

Para obter mais ajuda execute `ng help` ou consulte a página [Angular CLI Overview and Command Reference](https://angular.io/cli).
