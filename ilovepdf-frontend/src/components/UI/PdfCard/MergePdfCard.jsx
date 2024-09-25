import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../card'
import { FaFilePdf } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const MergePdfCard = () => {
    const navigate = useNavigate("/merge-pdf")
    const handlePdfMergeButton = async (event) => {
        event.preventDefault();
        navigate('/merge-pdf')
    }
    return (
        <div className="cards-container flex justify-center flex-wrap gap-6 mt-8">
            <Card className="w-64" onClick={handlePdfMergeButton}>
                <CardHeader className="flex justify-center">
                    <FaFilePdf size={48} className="text-red-500" />
                </CardHeader>
                <CardContent>
                    <CardTitle className="text-xl font-medium">Merge Pdf</CardTitle>
                    <CardDescription className="text-sm text-gray-500 mt-2">Combine PDFs in the order you want with the easiest PDF merger available</CardDescription>
                </CardContent>
            </Card>
        </div>
    )
}

export default MergePdfCard
