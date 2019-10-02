
export class ArispCrawlerModel
{
    constructor(
        public Id: number,
        public Processos: Processo[]
    ) {}
}

export class Processo
{
    constructor(
        public Id: number,
        public Cidade: string,
        public Cartorio: string,
        public Matricula: string,
        public Arquivo: string
    ) {}
}
