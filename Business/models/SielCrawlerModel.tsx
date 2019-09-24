
export class SielCrawlerModel
{
    constructor(
        public Id: number,
        public Nome: string,
        public Titulo: string,
        public DataNascimento: string,
        public Zona: string,
        public Endereco: string,
        public Municipio: string,
        public UF: string,
        public DataDomicilio: string,
        public NomePai: string,
        public NomeMae: string,
        public Naturalidade: string,
        public CodValidacao: string
    ) {}
}