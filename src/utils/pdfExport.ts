import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const exportToPDF = async (elementId: string, filename: string = 'document.pdf') => {
    const element = document.getElementById(elementId);
    if (!element) {
        console.error('Element not found');
        return;
    }

    try {
        // Create canvas from the element with high quality
        const canvas = await html2canvas(element, {
            scale: 3,
            useCORS: true,
            logging: false,
            backgroundColor: '#ffffff'
        });

        const imgData = canvas.toDataURL('image/png', 1.0);
        
        // A4 dimensions in mm
        const pdfWidth = 210;
        const pdfHeight = 297;
        
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4',
            compress: true
        });

        // Calculate dimensions maintaining aspect ratio
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
        const canvasRatio = canvasWidth / canvasHeight;
        const pdfRatio = pdfWidth / pdfHeight;
        
        let finalWidth, finalHeight;
        
        if (canvasRatio > pdfRatio) {
            // Canvas is wider - fit to width
            finalWidth = pdfWidth;
            finalHeight = pdfWidth / canvasRatio;
        } else {
            // Canvas is taller - fit to height
            finalHeight = pdfHeight;
            finalWidth = pdfHeight * canvasRatio;
        }
        
        // Center the image on the page
        const xOffset = (pdfWidth - finalWidth) / 2;
        const yOffset = (pdfHeight - finalHeight) / 2;
        
        pdf.addImage(imgData, 'PNG', xOffset, yOffset, finalWidth, finalHeight, undefined, 'FAST');
        
        // Save the PDF
        pdf.save(filename);
    } catch (error) {
        console.error('Error generating PDF:', error);
    }
};

export const exportAllPagesToPDF = async (pageCount: number, filename: string = 'all-documents.pdf') => {
    const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
    });

    for (let i = 0; i < pageCount; i++) {
        const element = document.getElementById(`document-preview-${i}`);
        if (!element) continue;

        try {
            const canvas = await html2canvas(element, {
                scale: 3,
                useCORS: true,
                logging: false,
                backgroundColor: '#ffffff'
            });

            const imgData = canvas.toDataURL('image/png', 1.0);
            
            const canvasWidth = canvas.width;
            const canvasHeight = canvas.height;
            const canvasRatio = canvasWidth / canvasHeight;
            const pdfRatio = 210 / 297;
            
            let finalWidth, finalHeight;
            
            if (canvasRatio > pdfRatio) {
                finalWidth = 210;
                finalHeight = 210 / canvasRatio;
            } else {
                finalHeight = 297;
                finalWidth = 297 * canvasRatio;
            }
            
            const xOffset = (210 - finalWidth) / 2;
            const yOffset = (297 - finalHeight) / 2;

            if (i > 0) {
                pdf.addPage();
            }
            
            pdf.addImage(imgData, 'PNG', xOffset, yOffset, finalWidth, finalHeight, undefined, 'FAST');
        } catch (error) {
            console.error(`Error generating PDF for page ${i + 1}:`, error);
        }
    }

    pdf.save(filename);
};