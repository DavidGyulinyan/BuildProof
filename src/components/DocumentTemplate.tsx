"use client"

import {useState} from "react";

const DocumentTemplate = () => {

    const [documentInfo, setDocumentInfo] = useState({
        page: 0,
        performativeNumber: 0
    });

    const [date, setDate] = useState({
        day: "15",
        month: "06",
        year: "2025"
    });

    const [constructionInfo, setConstructionInfo] = useState({
        objectName: "Բնակելի միկրոշրջան",
        objectAddress: "ք․ Երևան, Աջափնյակ, Տիչինա 320",
        buildingNumber: "55",
        buildingType: "2-Հ",
        heightSign: "-7.70",
    });

    const [companies, setCompanies] = useState({
        technicalControlCompany: {
            name: 'Հալդի Քոնսալթ',
            type: 'ՍՊԸ',
            technicalControlEngineer: 'Ռ․ Եղիազարյան',
        },
        generalContractor: {
            name: 'Շին Վեկտոր',
            type: 'ՍՊԸ',
            generalEngineer: "Գ․ Դալլաքյան",
            responsiblePersonPosition:"Գլխավոր ինժեներ"
        },
        subContractor: {
            name: "-",
            type: "-",
            subContractorResponsiblePerson:"-",
            subContractorResponsiblePersonPosition:"-"
        },
        copyrightControl: {
            name:"Ֆուլ-արտ",
            type:'ՍՊԸ',
            copyrightControlResponsiblePerson: 'Տ․ Խաչիյան',
            responsiblePersonPosition:'կոնստրուկտոր'
        }
    });

    const [natureOfWork, setNatureOfWork] = useState("ավտոկայանատեղիի հիմնային սալի և սյուների ամրանավորում և կաղապարում");

    const [constructionNormsStatus, setConstructionNormsStatus] = useState("գործող")

    const [materials, setMaterials] = useState('⌀8-Ac1, ⌀8, ⌀10, ⌀16, ⌀18, ⌀20, ⌀28, ⌀32 - A500c');
    const [permittedToDo, setPermittedToDo] = useState("ավտոկայանատեղիի հիմնային սալի բետոնացում")

    return (

        <>
            <div
                className="w-[794px] h-[1123px] text-[13px] flex flex-col gap-2 border-1 border-black p-7">

                <div className="container">
                    <div className="w-full flex items-center justify-end">
                        <p className="w-41 text-[10px]">Հաստատում եմ (պատվիրատուի լիազորված անձ Ա․Ա․Հ լիազորված անձ)</p>

                    </div>


                    <div className="w-full flex flex-col gap-[16px] items-center justify-center">
                        <h1 className="font-bold">Ակտ Nº {documentInfo.performativeNumber}/{documentInfo.page}</h1>
                    </div>
                </div>

                <div className="container">
                    <p className="text-[10px] font-thin">Ծածկված միջանկյալ աշխատանքների ընդունման</p>
                    <div className="flex justify-center items-center font-bold">
                        {`${date.day}/${date.month}/${date.year}`}
                    </div>
                </div>

                <div className="container flex flex-col justify-center items-center">
                    <p className="font-bold">{`${constructionInfo.objectName}, ${constructionInfo.objectAddress} - Շենք Nº ${constructionInfo.buildingNumber} ՏԻՊ ${constructionInfo.buildingType}`}</p>
                    <hr className=" w-full border-1 border-black"/>
                    <p className="text-[10px] font-thin">(օբյեկտի անվանումը և տեղը(հասցեն))</p>
                </div>

                <div className="container flex flex-col justify-center items-center">
                    <p className="font-bold">{`${constructionInfo.heightSign} նիշում ${natureOfWork}`}</p>
                    <hr className=" w-full border-1 border-black"/>
                    <p className="text-[10px] font-thin">(Ընդունվող աշխատանքի բնույթը)</p>
                </div>

                <div className="container flex gap-2">
                    <p className="text-[10px] font-thin flex justify-start items-center">Պատասխանատու՝</p>
                    <div className="w-full">
                        <p className="font-bold flex justify-center">{`${companies.generalContractor.responsiblePersonPosition}՝ ${companies.generalContractor.generalEngineer}`}</p>
                        <hr className="w-full border-1 border-black"/>
                        <p className="text-[10px] font-thin flex justify-center">(Ա․Ա․Հ)</p>
                    </div>
                </div>

                <div className="container flex gap-2">
                    <p className="w-2/5 text-[10px] font-thin flex justify-start items-center">Պատասխանատուի տեխն․
                        հսկողության ինժեներ և ներկայացուցիչներ՝</p>
                    <div className="w-full">
                        <p className="font-bold flex justify-center">{`«${companies.technicalControlCompany.name}» ${companies.technicalControlCompany.type} տեխ․ հսկ․՝ ${companies.technicalControlCompany.technicalControlEngineer}`}</p>
                        <hr className="w-full border-1 border-black"/>
                    </div>
                </div>

                <div className="container flex gap-2">
                    <p className="w-2/5 text-[10px] font-thin flex justify-start items-center">Գլծավոր կապալառուի՝</p>
                    <div className="w-full">
                        <p className="font-bold flex justify-center">{`«${companies.generalContractor.name}» ${companies.generalContractor.type} ${companies.generalContractor.responsiblePersonPosition}՝ ${companies.generalContractor.generalEngineer}`}</p>
                        <hr className="w-full border-1 border-black"/>
                        <p className="text-[10px] font-thin flex justify-center">(Ա․Ա․Հ պաշտոնը)</p>
                    </div>
                </div>

                <div className="container flex gap-2">
                    <p className="w-2/5 text-[10px] font-thin flex justify-start items-center">ենթակապալառուի՝</p>
                    <div className="w-full">
                        <p className="font-bold flex justify-center">{`«${companies.subContractor.name}» ${companies.subContractor.type} ${companies.subContractor.subContractorResponsiblePersonPosition}՝ ${companies.subContractor.subContractorResponsiblePerson}`}</p>
                        <hr className="w-full border-1 border-black"/>
                        <p className="text-[10px] font-thin flex justify-center">(Ա․Ա․Հ պաշտոնը)</p>
                    </div>
                </div>

                <div className="container flex gap-2">
                    <p className="w-2/5 text-[10px] font-thin flex justify-start items-center">ենթակապալառուի՝</p>
                    <div className="w-full">
                        <p className="font-bold flex justify-center">{`«${companies.copyrightControl.name}» ${companies.copyrightControl.type} ${companies.copyrightControl.responsiblePersonPosition}՝ ${companies.copyrightControl.copyrightControlResponsiblePerson}`}</p>
                        <hr className="w-full border-1 border-black"/>
                        <p className="text-[10px] font-thin flex justify-center">(Ա․Ա․Հ պաշտոնը)</p>
                    </div>
                </div>

                <div className="container flex gap-2">
                    <p className="text-[10px] font-thin flex justify-start items-center">Ղեկավարվելու ՀՀՇՆ՝</p>
                    <div>
                        <p className="font-bold flex justify-center">{constructionNormsStatus}</p>
                        <hr className="w-full border-1 border-black"/>
                    </div>
                    <p className="text-[10px] font-thin flex justify-start items-center">նորմերով</p>
                </div>


                <div className="container w-full">
                    <hr className="w-full border-1 border-black"/>
                    <p className="text-[10px] font-thin flex justify-center">(աշխատանքային գծագրերի հ․հ․)</p>
                </div>

                <div className="container w-full">
                    <p className="font-bold flex justify-start">{`1. «${companies.generalContractor.name}» ${companies.generalContractor.type} ${companies.generalContractor.responsiblePersonPosition} ${companies.generalContractor.generalEngineer}`}</p>
                    <hr className="w-full border-1 border-black"/>
                    <p className="text-[10px] font-thin flex justify-center">(լիցենզավորված կազզմակերպության անունը,
                        մասնագետի Ա․Ա․Հ)</p>
                </div>
                <p className="text-[10px] font-thin flex justify-center">Կողմից ընդունման ներկայացված ներքոշարադրված
                    շինարարական աշխատանքները բնութագրվում են հետևյալ տվյալներով</p>
                <div className="container w-full">
                    <p className="font-bold flex justify-center">{`${materials}`}</p>
                    <hr className="w-full border-1 border-black"/>
                </div>

                <div className="container w-full flex flex-col justify-center items-start">
                    <p className="text-[10px] font-thin flex justify-center">1. Ընդունվող աշխատանքների հակիրճ տեխնիկական
                        բնութագիրը և նրանց համապատասխանությունը նորմերին</p>
                    <p className="text-[10px] font-thin flex justify-center">2. Ընդունման ներկայացված աշխատանքները
                        տեղում ուսումնասիրելուց հետո և ներկայացված փաստաթղթերը</p>
                    <p className="text-[10px] font-thin flex justify-center gap-2">2.1․ Ներկայացված աշխատանքները
                        համապատասխանում են <p className="font-bold underline">շին. նորմերին և նախագծին</p></p>
                    <p className="text-[10px] font-thin flex justify-center">2․2․Թույլատրել հետևյալ աշխատանքների
                        իրականացումը</p>
                    <div className="container w-full">
                        <p className="font-bold flex justify-center">{`${constructionInfo.heightSign} նիշում ${permittedToDo} `}</p>
                        <hr className="w-full border-1 border-black"/>
                        <div className="w-full mt-5">
                            <hr className="w-full border-1 border-black"/>
                            <p className="text-[10px] font-thin flex justify-center">(աշխատանքների թվարկումը)</p>
                        </div>
                    </div>
                    <p className="text-[10px] font-thin flex justify-center">2․3․Ընդունման ներկայացված աշխատանքները չեն
                        համապատասխանում</p>
                    <div className="w-full mt-2">
                        <hr className="w-full border-1 border-black"/>
                        <div className="text-[10px] font-thin flex justify-start gap-1 mt-2">պահանջներին և
                            ենթակա են կապալառուի կողմից փոփոխման և
                            <div className="w-1/5 h-5 flex flex-col items-center justify-end mt-2">
                                <hr className="w-full border-1 border-black"/>
                                <p className="text-[10px] font-thin flex justify-center">(աշմսաթիվ)</p>
                            </div>
                            ժամկետներում կրկին ներկայացման
                        </div>
                    </div>
                </div>

                <p className="text-[10px] font-thin flex justify-start">Հավելվածներ (համեմատական ամփոփագրերը, փորձարկման
                    գծագրերը, փորձարկման արդյունքները և այլն)</p>

                <div className="container flex flex-col justify-center items-center gap-7 mt-10">
                    <div className="w-full font-bold flex justify-start items-end gap-10">
                        <p className="w-[180px]">Տեխնիկական հսկողություն՝</p>
                        <hr className="w-2/5 border-1 border-black"/>
                        <p>{`${companies.technicalControlCompany.technicalControlEngineer}`}</p>
                    </div>

                    <div className="w-full font-bold flex justify-start items-end gap-10">
                        <p className="w-[180px]">Հեղինակային հսկողություն՝</p>
                        <hr className="w-2/5 border-1 border-black"/>
                        <p>{`${companies.copyrightControl.copyrightControlResponsiblePerson}`}</p>
                    </div>

                    <div className="w-full font-bold flex justify-start items-end gap-10">
                        <p className="w-[180px]">Գլխավոր ինժեներ՝</p>
                        <hr className="w-2/5 border-1 border-black"/>
                        <p>{`${companies.generalContractor.generalEngineer}`}</p>
                    </div>

                </div>
            </div>
        </>

    );
}

export default DocumentTemplate;