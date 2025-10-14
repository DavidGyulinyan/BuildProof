"use client"

import { useDocument } from '../../contexts/DocumentContext';
import DocumentPreview from '../../components/DocumentPreview';

export default function EditorPage() {
    const {
        documentData,
        updateCurrentPage,
        setConstructionInfo,
        setCompanies,
        setConstructionNormsStatus,
        addNewPage,
        deletePage,
        setCurrentPageIndex,
        getCurrentPage
    } = useDocument();

    const currentPage = getCurrentPage();
    const { constructionInfo, companies, constructionNormsStatus, pages, currentPageIndex } = documentData;
    const { documentInfo, date, natureOfWork, materials, permittedToDo } = currentPage;

    return (
        <div className="min-h-[calc(100vh-128px)] bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8 flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Փաստաթղթի խմբագրիչ</h1>
                        <p className="text-gray-600 mt-2">Խմբագրեք փաստաթղթի դաշտերը և տեսեք փոփոխությունները իրական ժամանակում</p>
                    </div>
                    <button
                        onClick={addNewPage}
                        className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        Ավելացնել էջ
                    </button>
                </div>

                {/* Page Selector */}
                {pages.length > 1 && (
                    <div className="mb-6 bg-white p-4 rounded-lg shadow">
                        <label className="block text-sm font-medium mb-2 text-gray-700">Ընտրել էջը</label>
                        <div className="flex gap-2 flex-wrap">
                            {pages.map((page, index) => (
                                <div key={index} className="flex items-center gap-1">
                                    <button
                                        onClick={() => setCurrentPageIndex(index)}
                                        className={`px-4 py-2 rounded-md font-medium transition-colors ${
                                            currentPageIndex === index
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                        }`}
                                    >
                                        Էջ {page.documentInfo.page}
                                    </button>
                                    {pages.length > 1 && (
                                        <button
                                            onClick={() => deletePage(index)}
                                            className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition-colors"
                                            title="Ջնջել էջը"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Editor Panel */}
                    <div className="bg-white p-6 rounded-lg shadow-lg overflow-y-auto max-h-[calc(100vh-280px)]">
                        <h2 className="text-xl font-semibold mb-4 text-blue-600">Խմբագրել փաստաթղթի տվյալները</h2>
                        
                        {/* Document Info */}
                        <div className="mb-6">
                            <h3 className="font-semibold mb-2 text-gray-700 border-b pb-2">Փաստաթղթի տեղեկատվություն</h3>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-sm font-medium mb-1 text-gray-700">Էջի համար</label>
                                    <input
                                        type="number"
                                        value={documentInfo.page}
                                        onChange={(e) => updateCurrentPage({
                                            documentInfo: { ...documentInfo, page: parseInt(e.target.value) || 0 }
                                        })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1 text-gray-700">Կատարողական համար</label>
                                    <input
                                        type="number"
                                        value={documentInfo.performativeNumber}
                                        onChange={(e) => updateCurrentPage({
                                            documentInfo: { ...documentInfo, performativeNumber: parseInt(e.target.value) || 0 }
                                        })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Date */}
                        <div className="mb-6">
                            <h3 className="font-semibold mb-2 text-gray-700 border-b pb-2">Ամսաթիվ</h3>
                            <div className="grid grid-cols-3 gap-3">
                                <div>
                                    <label className="block text-sm font-medium mb-1 text-gray-700">Օր</label>
                                    <input
                                        type="text"
                                        value={date.day}
                                        onChange={(e) => updateCurrentPage({
                                            date: { ...date, day: e.target.value }
                                        })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1 text-gray-700">Ամիս</label>
                                    <input
                                        type="text"
                                        value={date.month}
                                        onChange={(e) => updateCurrentPage({
                                            date: { ...date, month: e.target.value }
                                        })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1 text-gray-700">Տարի</label>
                                    <input
                                        type="text"
                                        value={date.year}
                                        onChange={(e) => updateCurrentPage({
                                            date: { ...date, year: e.target.value }
                                        })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Construction Info */}
                        <div className="mb-6">
                            <h3 className="font-semibold mb-2 text-gray-700 border-b pb-2">Շինարարական տեղեկատվություն</h3>
                            <div className="space-y-3">
                                <div>
                                    <label className="block text-sm font-medium mb-1 text-gray-700">Օբյեկտի անվանում</label>
                                    <input
                                        type="text"
                                        value={constructionInfo.objectName}
                                        onChange={(e) => setConstructionInfo({ ...constructionInfo, objectName: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1 text-gray-700">Օբյեկտի հասցե</label>
                                    <input
                                        type="text"
                                        value={constructionInfo.objectAddress}
                                        onChange={(e) => setConstructionInfo({ ...constructionInfo, objectAddress: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                                <div className="grid grid-cols-3 gap-3">
                                    <div>
                                        <label className="block text-sm font-medium mb-1 text-gray-700">Շենքի համար</label>
                                        <input
                                            type="text"
                                            value={constructionInfo.buildingNumber}
                                            onChange={(e) => setConstructionInfo({ ...constructionInfo, buildingNumber: e.target.value })}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1 text-gray-700">Շենքի տիպ</label>
                                        <input
                                            type="text"
                                            value={constructionInfo.buildingType}
                                            onChange={(e) => setConstructionInfo({ ...constructionInfo, buildingType: e.target.value })}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1 text-gray-700">Բարձրության նշան</label>
                                        <input
                                            type="text"
                                            value={constructionInfo.heightSign}
                                            onChange={(e) => setConstructionInfo({ ...constructionInfo, heightSign: e.target.value })}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Technical Control Company */}
                        <div className="mb-6">
                            <h3 className="font-semibold mb-2 text-gray-700 border-b pb-2">Տեխնիկական հսկողության ընկերություն</h3>
                            <div className="space-y-3">
                                <div>
                                    <label className="block text-sm font-medium mb-1 text-gray-700">Ընկերության անվանում</label>
                                    <input
                                        type="text"
                                        value={companies.technicalControlCompany.name}
                                        onChange={(e) => setCompanies({
                                            ...companies,
                                            technicalControlCompany: { ...companies.technicalControlCompany, name: e.target.value }
                                        })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label className="block text-sm font-medium mb-1 text-gray-700">Տիպ</label>
                                        <input
                                            type="text"
                                            value={companies.technicalControlCompany.type}
                                            onChange={(e) => setCompanies({
                                                ...companies,
                                                technicalControlCompany: { ...companies.technicalControlCompany, type: e.target.value }
                                            })}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1 text-gray-700">Ինժեներ</label>
                                        <input
                                            type="text"
                                            value={companies.technicalControlCompany.technicalControlEngineer}
                                            onChange={(e) => setCompanies({
                                                ...companies,
                                                technicalControlCompany: { ...companies.technicalControlCompany, technicalControlEngineer: e.target.value }
                                            })}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* General Contractor */}
                        <div className="mb-6">
                            <h3 className="font-semibold mb-2 text-gray-700 border-b pb-2">Գլխավոր կապալառու</h3>
                            <div className="space-y-3">
                                <div>
                                    <label className="block text-sm font-medium mb-1 text-gray-700">Ընկերության անվանում</label>
                                    <input
                                        type="text"
                                        value={companies.generalContractor.name}
                                        onChange={(e) => setCompanies({
                                            ...companies,
                                            generalContractor: { ...companies.generalContractor, name: e.target.value }
                                        })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label className="block text-sm font-medium mb-1 text-gray-700">Տիպ</label>
                                        <input
                                            type="text"
                                            value={companies.generalContractor.type}
                                            onChange={(e) => setCompanies({
                                                ...companies,
                                                generalContractor: { ...companies.generalContractor, type: e.target.value }
                                            })}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1 text-gray-700">Գլխավոր ինժեներ</label>
                                        <input
                                            type="text"
                                            value={companies.generalContractor.generalEngineer}
                                            onChange={(e) => setCompanies({
                                                ...companies,
                                                generalContractor: { ...companies.generalContractor, generalEngineer: e.target.value }
                                            })}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1 text-gray-700">Պատասխանատու անձի պաշտոն</label>
                                    <input
                                        type="text"
                                        value={companies.generalContractor.responsiblePersonPosition}
                                        onChange={(e) => setCompanies({
                                            ...companies,
                                            generalContractor: { ...companies.generalContractor, responsiblePersonPosition: e.target.value }
                                        })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Sub Contractor */}
                        <div className="mb-6">
                            <h3 className="font-semibold mb-2 text-gray-700 border-b pb-2">Ենթակապալառու</h3>
                            <div className="space-y-3">
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label className="block text-sm font-medium mb-1 text-gray-700">Ընկերության անվանում</label>
                                        <input
                                            type="text"
                                            value={companies.subContractor.name}
                                            onChange={(e) => setCompanies({
                                                ...companies,
                                                subContractor: { ...companies.subContractor, name: e.target.value }
                                            })}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1 text-gray-700">Տիպ</label>
                                        <input
                                            type="text"
                                            value={companies.subContractor.type}
                                            onChange={(e) => setCompanies({
                                                ...companies,
                                                subContractor: { ...companies.subContractor, type: e.target.value }
                                            })}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1 text-gray-700">Պատասխանատու անձ</label>
                                    <input
                                        type="text"
                                        value={companies.subContractor.subContractorResponsiblePerson}
                                        onChange={(e) => setCompanies({
                                            ...companies,
                                            subContractor: { ...companies.subContractor, subContractorResponsiblePerson: e.target.value }
                                        })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1 text-gray-700">Պատասխանատու անձի պաշտոն</label>
                                    <input
                                        type="text"
                                        value={companies.subContractor.subContractorResponsiblePersonPosition}
                                        onChange={(e) => setCompanies({
                                            ...companies,
                                            subContractor: { ...companies.subContractor, subContractorResponsiblePersonPosition: e.target.value }
                                        })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Copyright Control */}
                        <div className="mb-6">
                            <h3 className="font-semibold mb-2 text-gray-700 border-b pb-2">Հեղինակային հսկողություն</h3>
                            <div className="space-y-3">
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label className="block text-sm font-medium mb-1 text-gray-700">Ընկերության անվանում</label>
                                        <input
                                            type="text"
                                            value={companies.copyrightControl.name}
                                            onChange={(e) => setCompanies({
                                                ...companies,
                                                copyrightControl: { ...companies.copyrightControl, name: e.target.value }
                                            })}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1 text-gray-700">Տիպ</label>
                                        <input
                                            type="text"
                                            value={companies.copyrightControl.type}
                                            onChange={(e) => setCompanies({
                                                ...companies,
                                                copyrightControl: { ...companies.copyrightControl, type: e.target.value }
                                            })}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1 text-gray-700">Պատասխանատու անձ</label>
                                    <input
                                        type="text"
                                        value={companies.copyrightControl.copyrightControlResponsiblePerson}
                                        onChange={(e) => setCompanies({
                                            ...companies,
                                            copyrightControl: { ...companies.copyrightControl, copyrightControlResponsiblePerson: e.target.value }
                                        })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1 text-gray-700">Պատասխանատու անձի պաշտոն</label>
                                    <input
                                        type="text"
                                        value={companies.copyrightControl.responsiblePersonPosition}
                                        onChange={(e) => setCompanies({
                                            ...companies,
                                            copyrightControl: { ...companies.copyrightControl, responsiblePersonPosition: e.target.value }
                                        })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Construction Norms */}
                        <div className="mb-6">
                            <h3 className="font-semibold mb-2 text-gray-700 border-b pb-2">Շինարարական նորմեր</h3>
                            <div>
                                <label className="block text-sm font-medium mb-1 text-gray-700">Շինարարական նորմերի կարգավիճակ</label>
                                <input
                                    type="text"
                                    value={constructionNormsStatus}
                                    onChange={(e) => setConstructionNormsStatus(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        {/* Page-specific Fields */}
                        <div className="mb-6 bg-blue-50 p-4 rounded-lg">
                            <h3 className="font-semibold mb-3 text-blue-700 border-b border-blue-200 pb-2">Էջի հատուկ տվյալներ</h3>
                            <div className="space-y-3">
                                <div>
                                    <label className="block text-sm font-medium mb-1 text-gray-700">Աշխատանքի բնույթ</label>
                                    <textarea
                                        value={natureOfWork}
                                        onChange={(e) => updateCurrentPage({ natureOfWork: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        rows={2}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1 text-gray-700">Նյութեր</label>
                                    <textarea
                                        value={materials}
                                        onChange={(e) => updateCurrentPage({ materials: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        rows={2}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1 text-gray-700">Թույլատրված է կատարել</label>
                                    <textarea
                                        value={permittedToDo}
                                        onChange={(e) => updateCurrentPage({ permittedToDo: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        rows={2}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Preview Panel */}
                    <div className="bg-white p-6 rounded-lg shadow-lg overflow-y-auto max-h-[calc(100vh-280px)]">
                        <h2 className="text-xl font-semibold mb-4 text-blue-600">Փաստաթղթի նախադիտում</h2>
                        <div className="flex justify-center">
                            <DocumentPreview />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
