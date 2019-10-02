
export class CensecCrawlerModel
{
    constructor(
        public Id: number,
        public Livro: string,
        public Carga: string,
        public Data: string,
        public Ato: string,
        public DataAto: string,
        public Folha: string,
        public Nomes: string,
        public CpfsCnpjs: string,
        public Qualidads: string,
        public Uf: string,
        public Municipio: string,
        public Cartorio: string,
        public Telefones: string,
        public TipoTel: string,
        public Ramal: string,
        public Contato: string,
        public Status: string,
    ) { }
}

export class DadosCartorio
{
}