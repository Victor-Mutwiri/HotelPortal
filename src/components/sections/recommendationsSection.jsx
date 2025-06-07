import { ArrowLeft, MapPin } from "lucide-react";

const RecommendationsSection = () => {

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <button
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Portal
          </button>
          <div className="flex items-center gap-3">
            <MapPin className="h-8 w-8 text-purple-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Local Recommendations</h1>
              <p className="text-sm text-gray-600">Discover the best of our area</p>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="py-8">
        
      </main>
    </div>
  );
}

export default RecommendationsSection;