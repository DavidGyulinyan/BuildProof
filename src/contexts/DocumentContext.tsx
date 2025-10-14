"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface DocumentInfo {
  page: number;
  performativeNumber: number;
}

interface DateInfo {
  day: string;
  month: string;
  year: string;
}

interface ConstructionInfo {
  objectName: string;
  objectAddress: string;
  buildingNumber: string;
  buildingType: string;
  heightSign: string;
}

interface Company {
  name: string;
  type: string;
}

interface TechnicalControlCompany extends Company {
  technicalControlEngineer: string;
}

interface GeneralContractor extends Company {
  generalEngineer: string;
  responsiblePersonPosition: string;
}

interface SubContractor extends Company {
  subContractorResponsiblePerson: string;
  subContractorResponsiblePersonPosition: string;
}

interface CopyrightControl extends Company {
  copyrightControlResponsiblePerson: string;
  responsiblePersonPosition: string;
}

interface Companies {
  technicalControlCompany: TechnicalControlCompany;
  generalContractor: GeneralContractor;
  subContractor: SubContractor;
  copyrightControl: CopyrightControl;
    foreman: {
        name: string;
        foremanPosition: string;
    }   
}

interface PageData {
  documentInfo: DocumentInfo;
  date: DateInfo;
  natureOfWork: string;
  materials: string;
  permittedToDo: string;
}

interface DocumentData {
  constructionInfo: ConstructionInfo;
  companies: Companies;
  constructionNormsStatus: string;
  pages: PageData[];
  currentPageIndex: number;
}

interface DocumentContextType {
  documentData: DocumentData;
  setConstructionInfo: (info: ConstructionInfo) => void;
  setCompanies: (companies: Companies) => void;
  setConstructionNormsStatus: (status: string) => void;
  updateCurrentPage: (pageData: Partial<PageData>) => void;
  addNewPage: () => void;
  deletePage: (index: number) => void;
  setCurrentPageIndex: (index: number) => void;
  getCurrentPage: () => PageData;
}

const DocumentContext = createContext<DocumentContextType | undefined>(
  undefined
);

export const useDocument = () => {
  const context = useContext(DocumentContext);
  if (!context) {
    throw new Error("useDocument must be used within a DocumentProvider");
  }
  return context;
};

const getDefaultPageData = (
  pageNumber: number,
  performativeNumber: number
): PageData => ({
  documentInfo: {
    page: pageNumber,
    performativeNumber: performativeNumber,
  },
  date: {
    day: new Date().getDate().toString().padStart(2, "0"),
    month: (new Date().getMonth() + 1).toString().padStart(2, "0"),
    year: new Date().getFullYear().toString(),
  },
  natureOfWork: "",
  materials: "",
  permittedToDo: "",
});

export const DocumentProvider = ({ children }: { children: ReactNode }) => {
  const [documentData, setDocumentData] = useState<DocumentData>({
    constructionInfo: {
      objectName: "Բնակելի միկրոշրջան",
      objectAddress: "ք․ Երևան, Աջափնյակ, Տիչինա 320",
      buildingNumber: "55",
      buildingType: "2-Հ",
      heightSign: "-7.70",
    },
    companies: {
      technicalControlCompany: {
        name: "Հալդի Քոնսալթ",
        type: "ՍՊԸ",
        technicalControlEngineer: "Ռ․ Եղիազարյան",
      },
      generalContractor: {
        name: "Շին Վեկտոր",
        type: "ՍՊԸ",
        generalEngineer: "Գ․ Դալլաքյան",
        responsiblePersonPosition: "Գլխավոր ինժեներ",
      },
      subContractor: {
        name: "-",
        type: "-",
        subContractorResponsiblePerson: "-",
        subContractorResponsiblePersonPosition: "-",
      },
      copyrightControl: {
        name: "Ֆուլ-արտ",
        type: "ՍՊԸ",
        copyrightControlResponsiblePerson: "Տ․ Խաչիյան",
        responsiblePersonPosition: "կոնստրուկտոր",
      },
      foreman: {
        name: "Գ. Հարությունյան",
        foremanPosition: "Աշղեկ",
      },
    },
    constructionNormsStatus: "գործող",
    pages: [
      {
        documentInfo: {
          page: 1,
          performativeNumber: 1,
        },
        date: {
          day: "15",
          month: "06",
          year: "2025",
        },
        natureOfWork:
          "ավտոկայանատեղիի հիմնային սալի և սյուների ամրանավորում և կաղապարում",
        materials: "⌀8-Ac1, ⌀8, ⌀10, ⌀16, ⌀18, ⌀20, ⌀28, ⌀32 - A500c",
        permittedToDo: "ավտոկայանատեղիի հիմնային սալի բետոնացում",
      },
    ],
    currentPageIndex: 0,
  });

  const setConstructionInfo = (info: ConstructionInfo) => {
    setDocumentData((prev) => ({ ...prev, constructionInfo: info }));
  };

  const setCompanies = (companies: Companies) => {
    setDocumentData((prev) => ({ ...prev, companies }));
  };

  const setConstructionNormsStatus = (status: string) => {
    setDocumentData((prev) => ({ ...prev, constructionNormsStatus: status }));
  };

  const updateCurrentPage = (pageData: Partial<PageData>) => {
    setDocumentData((prev) => {
      const newPages = [...prev.pages];
      newPages[prev.currentPageIndex] = {
        ...newPages[prev.currentPageIndex],
        ...pageData,
      };
      return { ...prev, pages: newPages };
    });
  };

  const addNewPage = () => {
    setDocumentData((prev) => {
      const lastPage = prev.pages[prev.pages.length - 1];
      const newPage = getDefaultPageData(
        lastPage.documentInfo.page + 1,
        lastPage.documentInfo.performativeNumber
      );
      return {
        ...prev,
        pages: [...prev.pages, newPage],
        currentPageIndex: prev.pages.length,
      };
    });
  };

  const setCurrentPageIndex = (index: number) => {
    setDocumentData((prev) => ({ ...prev, currentPageIndex: index }));
  };

  const deletePage = (index: number) => {
    setDocumentData((prev) => {
      // Don't allow deleting if only one page remains
      if (prev.pages.length <= 1) {
        return prev;
      }

      const newPages = prev.pages.filter((_, i) => i !== index);
      let newCurrentIndex = prev.currentPageIndex;

      // Adjust current index if needed
      if (index === prev.currentPageIndex) {
        newCurrentIndex = Math.max(0, index - 1);
      } else if (index < prev.currentPageIndex) {
        newCurrentIndex = prev.currentPageIndex - 1;
      }

      return {
        ...prev,
        pages: newPages,
        currentPageIndex: newCurrentIndex,
      };
    });
  };

  const getCurrentPage = (): PageData => {
    return documentData.pages[documentData.currentPageIndex];
  };

  return (
    <DocumentContext.Provider
      value={{
        documentData,
        setConstructionInfo,
        setCompanies,
        setConstructionNormsStatus,
        updateCurrentPage,
        addNewPage,
        deletePage,
        setCurrentPageIndex,
        getCurrentPage,
      }}
    >
      {children}
    </DocumentContext.Provider>
  );
};
