import { IPerson } from "../interface/IPerson";
import { KindPerson } from "../enum/KindPerson";

export class LegalPersonModel implements IPerson
{
    public Type: KindPerson = KindPerson.LegalPerson;

    constructor(
        public Id: number,
        public NomeFantasia: string,
        public CNPJ: string,
        public CPFDoFundador: string,
        public Contador: string,
        public Completed: boolean
    ) {}
}