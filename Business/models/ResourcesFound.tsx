import { KindPerson } from "../enum/KindPerson";

import { ArispCrawlerModel } from "./ArispCrawlerModel";
import { ArpenspCrawlerModel } from "./ArpenspCrawlerModel";
import { SielCrawlerModel } from "./SielCrawlerModel";
import { SivecCrawlerModel } from "./SivecCrawlerModel";
import { CagedCrawlerModelPJ,  CagedCrawlerModelPF } from "./CagedCrawlerModel";
import { CensecCrawlerModel } from "./CensecCrawlerModel";

export class ResourcesFound
{
    constructor(
        public Id: number,
        public ArquivoReferencia: number,
        public Type: KindPerson,
        public Arisp: ArispCrawlerModel,
        public Arpensp: ArpenspCrawlerModel,
        public Siel: SielCrawlerModel,
        public Sivec: SivecCrawlerModel,
        public CagedPJ: CagedCrawlerModelPJ,
        public CagedPF: CagedCrawlerModelPF,
        public Censesc: CensecCrawlerModel,
    ) {}
}
