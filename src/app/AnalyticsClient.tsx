'use client'

import { useEffect } from 'react'
import { GoogleAnalytics } from 'nextjs-google-analytics'

export default function AnalyticsClient() {
    useEffect(() => {
    }, [])

    return <GoogleAnalytics gaMeasurementId="G-71REMPC4GC" />
}
