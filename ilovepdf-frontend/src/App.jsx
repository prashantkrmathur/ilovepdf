import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import AppLayout from './components/Layout/AppLayout'
import Login from './pages/Login'
import Signup from './pages/Signup'
import MergePdf from './pages/MergePdf'
import SplitPage from './pages/SplitPage'
import CompressPage from './pages/CompressPage'
import PdfToWordPage from './pages/PdfToWordPage'
import PdfToPowerpointPage from './pages/PdfToPowerpointPage'
import PdfToExcelPage from './pages/PdfToExcelPage'
import WordToPdfPage from './pages/WordToPdfPage'
import PowerpointToPdf from './pages/PowerpointToPdf'
import ExcelToPdfPage from './pages/ExcelToPdfPage'
import EditPdfPage from './pages/EditPdfPage'
import PdfToJpgPage from './pages/PdfToJpgPage'
import JpgToPdfPage from './pages/JpgToPdfPage'
import SignPdfPage from './pages/SignPdfPage'
import WatermarkPage from './pages/WatermarkPage'
import RotatePdfPage from './pages/RotatePdfPage'
import HtmlToPdfPage from './pages/HtmlToPdfPage'
import UnlockPdfPage from './pages/UnlockPdfPage'
import ProtectPdfPage from './pages/ProtectPdfPage'
import OragnizePdfPage from './pages/OragnizePdfPage'
import PdfToPdfaPage from './pages/PdfToPdfaPage'
import RepairPdfPage from './pages/RepairPdfPage'
import PageNumbersPage from './pages/PageNumbersPage'
import ScanToPdfPage from './pages/ScanToPdfPage'
import OcrPdfpage from './pages/OcrPdfpage'
import ComparePdfPage from './pages/ComparePdfPage'
import RedactPdfpage from './pages/RedactPdfpage'

const router = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    errorElement:<ErrorPage/>,
    children:[

      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/merge-pdf',
        element:<MergePdf/>
      },
      {
        path:'/split-pdf',
        element:<SplitPage/>
      },
      {
        path:'/compress-pdf',
        element:<CompressPage/>
      },
      {
        path:'/pdf-to-word',
        element:<PdfToWordPage/>
      },
      {
        path:'/pdf-to-powerpoint',
        element:<PdfToPowerpointPage/>
      },
      {
        path:'/pdf-to-excel',
        element:<PdfToExcelPage/>
      },
      {
        path:'/word-to-pdf',
        element:<WordToPdfPage/>
      },
      {
        path:'/powerpoint-to-pdf',
        element:<PowerpointToPdf/>
      },
      {
        path:'/excel-to-pdf',
        element:<ExcelToPdfPage/>
      },
      {
        path:'/edit-pdf',
        element:<EditPdfPage/>
      },
      {
        path:'/pdf-to-jpg',
        element:<PdfToJpgPage/>
      },
      {
        path:'/jpg-to-pdf',
        element:<JpgToPdfPage/>
      },
      {
        path:'/sign-pdf',
        element:<SignPdfPage/>
      },
      {
        path:'/watermark',
        element:<WatermarkPage/>
      },
      {
        path:'/rotate-pdf',
        element:<RotatePdfPage/>
      },
      {
        path:'/html-to-pdf',
        element:<HtmlToPdfPage/>
      },
      {
        path:'/unlock-pdf',
        element:<UnlockPdfPage/>
      },
      {
        path:'/protect-pdf',
        element:<ProtectPdfPage/>
      },
      {
        path:'/organize-pdf',
        element:<OragnizePdfPage/>
      },
      {
        path:'/pdf-to-pdfa',
        element:<PdfToPdfaPage/>
      },
      {
        path:'/repair-pdf',
        element:<RepairPdfPage/>
      },
      {
        path:'/page-numbers',
        element:<PageNumbersPage/>
      },
      {
        path:'/scan-to-pdf',
        element:<ScanToPdfPage/>
      },
      {
        path:'/ocr-pdf',
        element:<OcrPdfpage/>
      },
      {
        path:'/compare-pdf',
        element:<ComparePdfPage/>
      },
      {
        path:'/redact-pdf',
        element:<RedactPdfpage/>
      },

    ]

  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
 
 
])

const App = () => {
  return <RouterProvider router={router}></RouterProvider>
}

export default App