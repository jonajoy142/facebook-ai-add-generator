'use client'
import { useState } from 'react'

interface AdCopy {
    headline: string
    primaryText: string
    description: string
    cta: string
}

export default function FacebookAdGenerator() {
    const [formData, setFormData] = useState({
        product: '',
        audience: '',
        goal: 'conversions',
        tone: 'professional',
        benefits: ['', '', '']
    })

    const [adCopies, setAdCopies] = useState<AdCopy[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [copiedText, setCopiedText] = useState('')

    const handleBenefitChange = (index: number, value: string) => {
        const newBenefits = [...formData.benefits]
        newBenefits[index] = value
        setFormData({ ...formData, benefits: newBenefits })
    }

    const generateAdCopy = async () => {
        if (!formData.product || !formData.audience) {
            setError('Please fill in product and audience fields')
            return
        }

        setLoading(true)
        setError('')

        try {
            // Simulate API call - replace with your actual API endpoint
            await new Promise(resolve => setTimeout(resolve, 2000))

            // Mock generated ad copies
            const mockAdCopies: AdCopy[] = [
                {
                    headline: "Transform Your Business Today",
                    primaryText: "Ready to take your business to the next level? Our proven solution helps busy professionals like you achieve amazing results in just minutes a day. Join thousands of satisfied customers who've already transformed their lives.",
                    description: "Get started now - limited time",
                    cta: "Learn More"
                },
                {
                    headline: "Don't Miss This Opportunity",
                    primaryText: "Discover the secret that's helping professionals everywhere succeed faster than ever before. With our innovative approach, you'll see results that will amaze you. Stop waiting and start winning today.",
                    description: "Join the success revolution",
                    cta: "Sign Up Now"
                },
                {
                    headline: "Your Success Starts Here",
                    primaryText: "What if I told you there's a better way to achieve your goals? Our customers are seeing incredible results, and you could be next. Don't let another day pass without taking action on your dreams.",
                    description: "Take action today",
                    cta: "Get Started"
                }
            ]

            setAdCopies(mockAdCopies)
        } catch (err) {
            setError('Error generating ad copy. Please try again.')
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text)
            setCopiedText(text)
            setTimeout(() => setCopiedText(''), 2000)
        } catch (err) {
            // Fallback for older browsers
            const textArea = document.createElement('textarea')
            textArea.value = text
            textArea.style.position = 'fixed'
            textArea.style.left = '-999999px'
            textArea.style.top = '-999999px'
            document.body.appendChild(textArea)
            textArea.focus()
            textArea.select()
            document.execCommand('copy')
            document.body.removeChild(textArea)
            setCopiedText(text)
            setTimeout(() => setCopiedText(''), 2000)
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-8">
            <div className="max-w-6xl mx-auto px-4">
                {/* Hero Section */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                        🚀 AI-Powered • Generate in Seconds
                    </div>
                    <h1 className="text-6xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-4">
                        Facebook Ad Copy
                        <br />
                        <span className="text-5xl">Generator</span>
                    </h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                        Transform your marketing with AI-generated, high-converting Facebook ad copy.
                        Get 3 professional variations instantly and boost your ROI.
                    </p>
                    <div className="flex justify-center items-center gap-6 mt-6 text-blue-200">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                            <span className="text-sm">Free to use</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                            <span className="text-sm">Instant results</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                            <span className="text-sm">Copy & paste ready</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8 mb-8">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">⚡</span>
                        </div>
                        <h2 className="text-3xl font-bold text-white">Campaign Details</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div>
                            <label className="block text-sm font-semibold text-blue-100 mb-3">
                                Product/Service *
                            </label>
                            <input
                                type="text"
                                value={formData.product}
                                onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                                placeholder="e.g., Fitness tracking app"
                                className="w-full p-4 bg-white/90 border-2 border-transparent rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-purple-400 focus:bg-white transition-all duration-200 text-gray-800 font-medium"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-blue-100 mb-3">
                                Target Audience *
                            </label>
                            <input
                                type="text"
                                value={formData.audience}
                                onChange={(e) => setFormData({ ...formData, audience: e.target.value })}
                                placeholder="e.g., Busy professionals, 25-40"
                                className="w-full p-4 bg-white/90 border-2 border-transparent rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-purple-400 focus:bg-white transition-all duration-200 text-gray-800 font-medium"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-blue-100 mb-3">
                                Campaign Goal
                            </label>
                            <select
                                value={formData.goal}
                                onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                                className="w-full p-4 bg-white/90 border-2 border-transparent rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-purple-400 focus:bg-white transition-all duration-200 text-gray-800 font-medium"
                            >
                                <option value="conversions">🎯 Conversions</option>
                                <option value="traffic">🚗 Traffic</option>
                                <option value="awareness">📢 Brand Awareness</option>
                                <option value="engagement">💬 Engagement</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-blue-100 mb-3">
                                Tone
                            </label>
                            <select
                                value={formData.tone}
                                onChange={(e) => setFormData({ ...formData, tone: e.target.value })}
                                className="w-full p-4 bg-white/90 border-2 border-transparent rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-purple-400 focus:bg-white transition-all duration-200 text-gray-800 font-medium"
                            >
                                <option value="professional">👔 Professional</option>
                                <option value="casual">😊 Casual</option>
                                <option value="urgent">⚡ Urgent</option>
                                <option value="friendly">🤝 Friendly</option>
                            </select>
                        </div>
                    </div>

                    <div className="mb-8">
                        <label className="block text-sm font-semibold text-blue-100 mb-3">
                            Key Benefits (Optional)
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {formData.benefits.map((benefit, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    value={benefit}
                                    onChange={(e) => handleBenefitChange(index, e.target.value)}
                                    placeholder={`Benefit ${index + 1}`}
                                    className="w-full p-4 bg-white/90 border-2 border-transparent rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-purple-400 focus:bg-white transition-all duration-200 text-gray-800 font-medium"
                                />
                            ))}
                        </div>
                    </div>

                    {error && (
                        <div className="bg-red-500/20 border border-red-400/50 text-red-100 px-6 py-4 rounded-xl mb-6 backdrop-blur-sm">
                            <div className="flex items-center gap-2">
                                <span className="text-red-400">⚠️</span>
                                {error}
                            </div>
                        </div>
                    )}

                    <button
                        onClick={generateAdCopy}
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-500 disabled:to-gray-600 text-white font-bold py-5 px-8 rounded-xl transition-all duration-200 transform hover:scale-[1.02] disabled:scale-100 shadow-lg hover:shadow-xl text-lg"
                    >
                        {loading ? (
                            <div className="flex items-center justify-center gap-3">
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                Generating Amazing Copy...
                            </div>
                        ) : (
                            <div className="flex items-center justify-center gap-3">
                                <span className="text-xl">✨</span>
                                Generate Ad Copy
                                <span className="text-xl">🚀</span>
                            </div>
                        )}
                    </button>
                </div>

                {adCopies.length > 0 && (
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">✨</span>
                            </div>
                            <h2 className="text-3xl font-bold text-white">Generated Ad Copies</h2>
                            <div className="ml-auto bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium">
                                Ready to use!
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {adCopies.map((ad, index) => (
                                <div key={index} className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="font-bold text-xl text-gray-800">Variation {index + 1}</h3>
                                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                            {index + 1}
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="group">
                                            <div className="flex items-center justify-between mb-2">
                                                <label className="block text-sm font-bold text-gray-700">
                                                    📢 Headline
                                                </label>
                                                <span className={`text-xs px-2 py-1 rounded-full ${ad.headline.length <= 25 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                                    {ad.headline.length}/25
                                                </span>
                                            </div>
                                            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg border-l-4 border-purple-400 text-gray-800 font-medium mb-2">
                                                {ad.headline}
                                            </div>
                                            <button
                                                onClick={() => copyToClipboard(ad.headline)}
                                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105 ${copiedText === ad.headline
                                                    ? 'bg-green-500 text-white'
                                                    : 'bg-purple-500 hover:bg-purple-600 text-white'
                                                    }`}
                                            >
                                                {copiedText === ad.headline ? '✅ Copied!' : 'Copy Headline'}
                                            </button>
                                        </div>

                                        <div className="group">
                                            <div className="flex items-center justify-between mb-2">
                                                <label className="block text-sm font-bold text-gray-700">
                                                    Primary Text
                                                </label>
                                                <span className={`text-xs px-2 py-1 rounded-full ${ad.primaryText.length <= 250 ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                                                    {ad.primaryText.length} chars
                                                </span>
                                            </div>
                                            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border-l-4 border-blue-400 text-gray-800 leading-relaxed mb-2">
                                                {ad.primaryText}
                                            </div>
                                            <button
                                                onClick={() => copyToClipboard(ad.primaryText)}
                                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105 ${copiedText === ad.primaryText
                                                    ? 'bg-green-500 text-white'
                                                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                                                    }`}
                                            >
                                                {copiedText === ad.primaryText ? '✅ Copied!' : 'Copy Text'}
                                            </button>
                                        </div>

                                        <div className="group">
                                            <div className="flex items-center justify-between mb-2">
                                                <label className="block text-sm font-bold text-gray-700">
                                                    Description
                                                </label>
                                                <span className={`text-xs px-2 py-1 rounded-full ${ad.description.length <= 30 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                                    {ad.description.length}/30
                                                </span>
                                            </div>
                                            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-4 rounded-lg border-l-4 border-emerald-400 text-gray-800 font-medium mb-2">
                                                {ad.description}
                                            </div>
                                            <button
                                                onClick={() => copyToClipboard(ad.description)}
                                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105 ${copiedText === ad.description
                                                    ? 'bg-green-500 text-white'
                                                    : 'bg-emerald-500 hover:bg-emerald-600 text-white'
                                                    }`}
                                            >
                                                {copiedText === ad.description ? '✅ Copied!' : 'Copy Description'}
                                            </button>
                                        </div>

                                        <div className="group">
                                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                                Call to Action
                                            </label>
                                            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-lg border-l-4 border-orange-400 text-gray-800 font-bold text-center mb-2">
                                                {ad.cta}
                                            </div>
                                            <button
                                                onClick={() => copyToClipboard(ad.cta)}
                                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105 w-full ${copiedText === ad.cta
                                                    ? 'bg-green-500 text-white'
                                                    : 'bg-orange-500 hover:bg-orange-600 text-white'
                                                    }`}
                                            >
                                                {copiedText === ad.cta ? '✅ Copied!' : 'Copy CTA'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Success Footer */}
                        <div className="mt-8 p-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl border border-green-400/30">
                            <div className="text-center">
                                <h3 className="text-green-300 font-bold text-lg mb-2">🎉 Your ads are ready!</h3>
                                <p className="text-green-200 text-sm">Copy and paste these into Facebook Ads Manager. Test different variations to find your winner!</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}