"use client"

import { useState } from 'react';
import DocumentPreview from '../../components/DocumentPreview';
import { useDocument } from '../../contexts/DocumentContext';
import { exportAllPagesToPDF } from '../../utils/pdfExport';

export default function ViewPage() {
    const { documentData } = useDocument();
    const { pages } = documentData;
    const [isExporting, setIsExporting] = useState(false);

    const handleExportAllPages = async () => {
        setIsExporting(true);
        try {
            const filename = `document-complete.pdf`;
            await exportAllPagesToPDF(pages.length, filename);
        } finally {
            setIsExporting(false);
        }
    };

    return (
        <div className="min-h-[calc(100vh-128px)] bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8 flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Փաստաթղթի դիտում</h1>
                        <p className="text-gray-600 mt-2">Դիտեք և ներբեռնեք ամբողջական փաստաթուղթը</p>
                    </div>
                    <button
                        onClick={handleExportAllPages}
                        disabled={isExporting}
                        className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isExporting ? (
                            <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        )}
                        {isExporting ? 'Ներբեռնվում է...' : `Ներբեռնել PDF (${pages.length} էջ)`}
                    </button>
                </div>
                
                <div className="space-y-8">
                    {pages.map((page, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="mb-4 bg-blue-100 px-4 py-2 rounded-lg">
                                <p className="text-blue-800 font-semibold">Էջ {page.documentInfo.page}</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-lg">
                                <DocumentPreview pageIndex={index} previewId={`document-preview-${index}`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}