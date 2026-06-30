import { useState } from "react";
import Card from "../UI/Card";
import {
  ImagePlus,
  UploadCloud,
  Save,
} from "lucide-react";



const Branding = () => {
  const [logo, setLogo] = useState(null);



  const handleLogo = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setLogo(URL.createObjectURL(file));
  };

const saveBranding = () => {
  alert("Branding saved successfully!");
};

  return (
    <Card className="rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300">

      <div className="flex items-center gap-3 mb-8">
        <div className="bg-green-100 p-3 rounded-2xl">
          <ImagePlus className="text-green-700" size={24} />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Branding
          </h2>

          <p className="text-sm text-gray-500">
            Customize your restaurant identity.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">

        {/* Upload Logo */}

        <div>
          <label
            htmlFor="logo"
            className="flex h-72 cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-gray-300 transition hover:border-green-600 hover:bg-green-50"
          >
            {logo ? (
              <img
                src={logo}
                alt="Logo"
                className="h-32 w-32 rounded-2xl object-cover shadow-lg"
              />
            ) : (
              <>
                <UploadCloud
                  size={50}
                  className="text-green-700 mb-4"
                />

                <h3 className="font-semibold text-lg">
                  Upload Store Logo
                </h3>

                <p className="text-gray-500 text-sm">
                  PNG, JPG or SVG
                </p>
              </>
            )}
          </label>

          <input
            id="logo"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleLogo}
          />
        </div>

        {/* Preview */}

        <div className="flex flex-col justify-between">

        <div>

            <h3 className="text-xl font-semibold text-gray-800">
            Store Branding
            </h3>

            <p className="mt-3 text-gray-600 leading-7">
            Upload your restaurant logo to personalize your storefront.
            This logo will appear on your seller dashboard and customer-facing pages.
            </p>

            <div className="mt-8 rounded-3xl border border-green-100 bg-green-50 p-6">

            <h4 className="font-semibold text-green-800">
                Branding Guidelines
            </h4>

            <ul className="mt-4 space-y-3 text-sm text-gray-600">

                <li>• Recommended logo size: <strong>512 × 512 px</strong></li>

                <li>• Supported formats: PNG, JPG, SVG</li>

                <li>• Maximum file size: 2 MB</li>

                <li>• Square logos display best across the platform.</li>

            </ul>

            </div>

            {logo && (

            <div className="mt-8">

                <h4 className="font-semibold text-gray-800 mb-3">
                Current Logo
                </h4>

                <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4">

                <img
                    src={logo}
                    alt="Logo Preview"
                    className="h-16 w-16 rounded-xl object-cover"
                />

                <div>

                    <p className="font-semibold">
                    Logo Ready
                    </p>

                    <p className="text-sm text-gray-500">
                    Click "Save Branding" to apply your changes.
                    </p>

                </div>

                </div>

            </div>

            )}

        </div>

        </div>
      </div>

      <button
        onClick={saveBranding}
        className="mt-8 flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#1A4D2E] to-[#2D6A4F] px-6 py-3 text-white font-semibold shadow-lg transition hover:scale-105"
      >
        <Save size={18} />
        Save Branding
      </button>

    </Card>
  );
};

export default Branding;