
export class CagedCrawlerModelPJ
{
    constructor(
        public Id: number,
        public Cnpj: string,
        public RazaoSocial: string,
        public Logradouro: string,
        public Bairro: string,
        public Municipio: string,
        public Estado: string,
        public Cep: string,
        public NomeContato: string,
        public CpfContato: string,
        public TelefoneContato: string,
        public RamalContato: string,
        public EmailContato: string,
        public Cnae: string,
        public AtividadeEconomica: string,
        public NoFilias: number,
        public TotalVinculos: number
    ) {}
}

export class CagedCrawlerModelPF
{
    constructor(
        public Id: number,
        public Cpf: string,
        public NomeTrabalhador: string,
        public PisBaseTrabalhador: string,
        public CtpsTrabalhador: string,
        public FaixaPisTrabalhador: string,
        public NacionalidadeTrabalhador: string,
        public GrauInstrucaoTrabalhador: string,
        public DeficienteTrabalhador: string,
        public DataNascimentoTrabalhador: string,
        public SexoTrabalhador: string,
        public CorTrabalhador: string,
        public CepTrabalhador: string,
        public TempoTrabalhoCaged: string,
        public TempoTrabalhoRais: string
    ) {}
}