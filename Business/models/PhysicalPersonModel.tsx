import { IPerson } from "../interface/IPerson";
import { KindPerson } from "../enum/KindPerson";

export class PhysicalPersonModel implements IPerson
{
    public Type: KindPerson = KindPerson.PhysicalPerson;

    constructor(
        public Id: number,
        public NomeCompleto: string,
        public CPF: string,
        public RG: string,
        public DataDeNascimento: string,
        public NomeDaMae: string,
        public Completed: boolean
    ) {}
}