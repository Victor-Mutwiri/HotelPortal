// filepath: c:\Users\dell\Desktop\GuestPortal\src\components\sections\MenuSection.jsx
import { ArrowLeft, Utensils } from "lucide-react";

const MenuSection = () => {

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Utensils className="h-8 w-8 text-green-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Food & Drink</h1>
              <p className="text-sm text-gray-600">Dining options and menus</p>
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

export default MenuSection;