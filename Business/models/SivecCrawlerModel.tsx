
export class SivecCrawlerModel
{
    constructor(
        public Id: number,
        public Nome: string,
        public Sexo: string,
        public DataNascimento: string,
        public RG: string,
        public NumControle: string,
        public TipoRG: string,
        public DataEmissaoRG: string,
        public Alcunha: string,
        public EstadoCivil: string,
        public Naturalidade: string,
        public Naturalizado: string,
        public PostoIdentificacao: string,
        public GrauInstrucao: string,
        public FormulaFundamental: string,
        public NomePai: string,
        public CorOlhos: string,
        public NomeMae: string,
        public Cabelo: string,
        public CorPele: string,
        public Profissao: string,
        public EnderecoResidencial: string,
        public EnderecoTrabalho: string,
        public outros: Outros
    ) {}
}

export class Outros
{
    constructor(
        public Id: number,
        public Nome: string,
        public RG: string,
        public DataNascimento: string,
        public Naturalidade: string,
        public NomePai: string,
        public NomeMae: string
    ) {}
}