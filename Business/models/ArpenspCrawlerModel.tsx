
export class ArpenspCrawlerModel
{
    constructor(
        public Id: number,
        public CartorioRegistro: string,
        public NumeroCNS: string,
        public UF: string,
        public NomeConjugeA1: string,
        public NovoNomeConjugeA2: string,
        public NomeConjugeB1: string,
        public NovoNomeConjugeB2: string,
        public DataCasamento: string,
        public Matricula: string,
        public DataEntrada: string,
        public DataRegistro: string,
        public Acervo: string,
        public NumeroLivro: string,
        public NumeroFolha: string,
        public NumeroRegistro: string,
        public TipoLivro: string
    ) {}
}