"use client"

import {useState} from "react";

const DocumentTamplate = () => {

    const [performativeNumber, setPerformativeNumber] = useState(0);
    const [page, setPage] = useState(0);
    const [day, setDay] = useState("15");
    const [month, setMonth] = useState("06");
    const [year, setYear] = useState("2025");

    const [objectName, setObjectName] = useState("Բնակելի միկրոշրջան");
    const [objectAddress, setObjectAddress] = useState("ք․ Երևան, Աջափնյակ, Տիչինա 320");

    const [buildingNumber, setBuildingNumber] = useState("55");
    const [buildingType, setBuildingType] = useState("2-Հ")

    const [heightSign, setHeightSign] = useState("-7.70");
    const [natureOfWork, setNatureOfWork] = useState("ավտոկայանատեղիի հիմնային սալի և սյուների ամրանավորում և կաղապարում");

    const [responsiblePerson, setResponsiblePerson] = useState("Գ․ Դալլաքյան");
    const [responsiblePersonPosition, setResponsiblePersonPosition] = useState("Գլխավոր ինժեներ");

    const [technicalControlCompany, setTechnicalControlCompany] = useState('Հալդի Քոնսալթ');
    const [technicalControlCompanyType, setTechnicalControlCompanyType] = useState('ՍՊԸ');
    const [technicalControlEngineer, setTechnicalControlEgineer] = useState('Ռ․ Եղիազարյան');

    const [generalContractor, setGeneralContractor] = useState('Շին Վեկտոր');
    const [generalContractorCompanyType, setGeneralContractorCompanyType] = useState('ՍՊԸ');

    const [subContractor, setSubcontractor]= useState('-');
    const [subContractorCompanyType, setSubGeneralContractorCompanyType] = useState('-')
    const [subContractorResponsiblePerson, setSubcontractorResponsiblePerson]= useState('-');
    const [subContractorResponsiblePersonPosition, setSubcontractorResponsiblePersonPosition]= useState('-');

    const [copyrightControl, setCopyrightControl]= useState('Ֆուլ-արտ');
    const [copyrightControlCompanyType, setCopyrightControlCompanyType]= useState('ՍՊԸ');
    const [copyrightControlResponsiblePerson, setCopyrightControlResponsiblePerson]= useState('Տ․ Խաչիյան');
    const [copyrightControlResponsiblePersonPosition, setCopyrightControlResponsiblePersonPosition]= useState('կոնստրուկտոր');

    const [constractionNormsStatus, setConstractionNormsStatus] = useState("գործող")

    return (

        <>
            <div
                className="w-[794px] h-[1123px] text-[15px] flex flex-col gap-5 border-1 border-black p-7">

                <div className="container">
                    <div className="w-full flex items-center justify-end">
                        <p className="w-41 text-[10px]">Հաստատում եմ (պատվիրատուի լիազորված անձ Ա․Ա․Հ լիազորված անձ)</p>

                    </div>


                    <div className="w-full flex flex-col gap-[16px] items-center justify-center">
                        <h1 className="font-bold">Ակտ Nº {performativeNumber}/{page}</h1>
                    </div>
                </div>

                <div className="container">
                    <p className="text-[10px] font-thin">Ծածկված միջանկյալ աշխատանքների ընդունման</p>
                    <div className="flex justify-center items-center font-bold">
                        {`${day}/${month}/${year}`}
                    </div>
                </div>

                <div className="container flex flex-col justify-center items-center">
                    <p className="font-bold">{`${objectName}, ${objectAddress} - Շենք Nº ${buildingNumber} ՏԻՊ ${buildingType}`}</p>
                    <hr className=" w-full border-1 border-black"/>
                    <p className="text-[10px] font-thin">(օբյեկտի անվանումը և տեղը(հասցեն))</p>
                </div>

                <div className="container flex flex-col justify-center items-center">
                    <p className="font-bold">{`${heightSign} նիշում ${natureOfWork}`}</p>
                    <hr className=" w-full border-1 border-black"/>
                    <p className="text-[10px] font-thin">(Ընդունվող աշխատանքի բնույթը)</p>
                </div>

                <div className="container flex gap-2">
                    <p className="text-[10px] font-thin flex justify-start items-center">Պատասխանատու՝</p>
                    <div className="w-full">
                        <p className="font-bold flex justify-center">{`${responsiblePersonPosition}՝ ${responsiblePerson}`}</p>
                        <hr className="w-full border-1 border-black"/>
                        <p className="text-[10px] font-thin flex justify-center">(Ա․Ա․Հ)</p>
                    </div>
                </div>

                <div className="container flex gap-2">
                    <p className="w-2/5 text-[10px] font-thin flex justify-start items-center">Պատասխանատուի տեխն․ հսկողության ինժեներ և ներկայացուցիչներ՝</p>
                    <div className="w-full">
                        <p className="font-bold flex justify-center">{`«${technicalControlCompany}» ${technicalControlCompanyType} տեխ․ հսկ․՝ ${technicalControlEngineer}`}</p>
                        <hr className="w-full border-1 border-black"/>
                    </div>
                </div>

                <div className="container flex gap-2">
                    <p className="w-2/5 text-[10px] font-thin flex justify-start items-center">Գլծավոր կապալառուի՝</p>
                    <div className="w-full">
                        <p className="font-bold flex justify-center">{`«${generalContractor}» ${generalContractorCompanyType} ${responsiblePersonPosition}՝ ${responsiblePerson}`}</p>
                        <hr className="w-full border-1 border-black"/>
                        <p className="text-[10px] font-thin flex justify-center">(Ա․Ա․Հ պաշտոնը)</p>
                    </div>
                </div>

                <div className="container flex gap-2">
                    <p className="w-2/5 text-[10px] font-thin flex justify-start items-center">ենթակապալառուի՝</p>
                    <div className="w-full">
                        <p className="font-bold flex justify-center">{`«${subContractor}» ${subContractorCompanyType} ${subContractorResponsiblePersonPosition}՝ ${subContractorResponsiblePerson}`}</p>
                        <hr className="w-full border-1 border-black"/>
                        <p className="text-[10px] font-thin flex justify-center">(Ա․Ա․Հ պաշտոնը)</p>
                    </div>
                </div>

                <div className="container flex gap-2">
                    <p className="w-2/5 text-[10px] font-thin flex justify-start items-center">ենթակապալառուի՝</p>
                    <div className="w-full">
                        <p className="font-bold flex justify-center">{`«${copyrightControl}» ${copyrightControlCompanyType} ${copyrightControlResponsiblePersonPosition}՝ ${copyrightControlResponsiblePerson}`}</p>
                        <hr className="w-full border-1 border-black"/>
                        <p className="text-[10px] font-thin flex justify-center">(Ա․Ա․Հ պաշտոնը)</p>
                    </div>
                </div>

                <div className="container flex gap-2">
                    <p className="text-[10px] font-thin flex justify-start items-center">Ղեկավարվելու ՀՀՇՆ՝</p>
                    <div>
                        <p className="font-bold flex justify-center">{constractionNormsStatus}</p>
                        <hr className="w-full border-1 border-black"/>
                    </div>
                    <p className="text-[10px] font-thin flex justify-start items-center">նորմերով</p>
                </div>


                <div className="container w-full">
                    <hr className="w-full border-1 border-black"/>
                    <p className="text-[10px] font-thin flex justify-center">(աշխատանքային գծագրերի հ․հ․)</p>
                </div>

                <div className="container w-full">
                    <p className="font-bold flex justify-start">{`1. «${generalContractor}» ${generalContractorCompanyType} ${responsiblePersonPosition} ${responsiblePerson}`}</p>
                    <hr className="w-full border-1 border-black"/>
                    <p className="text-[10px] font-thin flex justify-center">(լիցենզավորված կազզմակերպության անունը, մասնագետի Ա․Ա․Հ)</p>
                </div>
            </div>
        </>

    );
}

export default DocumentTamplate;