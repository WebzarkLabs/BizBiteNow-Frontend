import { useState } from "react";
import Card from "../UI/Card";
import {
  ImagePlus,
  UploadCloud,
  Save,
  Palette,
} from "lucide-react";

const Branding = () => {
  const [logo, setLogo] = useState(null);
  const [logoPreview, setLogoPreview] = useState("");

  const [banner, setBanner] = useState(null);
  const [bannerPreview, setBannerPreview] = useState("");

  const [brandColor, setBrandColor] = useState("#1A4D2E");

  const handleLogo = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setLogo(file);
    setLogoPreview(URL.createObjectURL(file));
  };
  const handleBanner = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setBanner(file);
    setBannerPreview(URL.createObjectURL(file));
  };

  const saveBranding = async () => {
    try {
      const formData = new FormData();

      if (logo) {
        formData.append("logo", logo);
      }

      if (banner) {
        formData.append("banner", banner);
      }

      formData.append("brandColor", brandColor);

      await updateProfile(sellerId, formData);

      alert("Branding updated successfully");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Card className="rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-green-100 p-3 rounded-2xl">
          <ImagePlus className="text-green-700" size={24} />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800">Branding</h2>

          <p className="text-sm text-gray-500">
            Customize your restaurant identity.
          </p>
        </div>
      </div>

      <div className="space-y-8">
        {/* Upload Logo */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Logo */}

          <div className="flex flex-col items-center">
            <label
              htmlFor="logo"
              className="flex h-64 w-64 cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 border-dashed border-gray-300 hover:border-green-600 hover:bg-green-50"
            >
              {logoPreview ? (
                <img
                  src={logoPreview}
                  alt="Logo"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="text-center">
                  <UploadCloud
                    size={45}
                    className="mx-auto mb-3 text-green-700"
                  />

                  <p className="font-semibold">Upload Logo</p>
                </div>
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

          {/* Banner */}

          <div>
            <label
              htmlFor="banner"
              className="flex h-64 cursor-pointer items-center justify-center overflow-hidden rounded-3xl border-2 border-dashed border-gray-300 hover:border-green-600 hover:bg-green-50"
            >
              {bannerPreview ? (
                <img
                  src={bannerPreview}
                  alt="Banner"
                  className="h-full w-full object-cover "
                />
              ) : (
                <div className="text-center">
                  <UploadCloud
                    size={45}
                    className="mx-auto mb-3 text-green-700"
                  />

                  <p className="font-semibold">Upload Banner</p>
                </div>
              )}
            </label>

            <input
              id="banner"
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleBanner}
            />
          </div>
        </div>

       <Card hover={false} className="rounded-3xl">

  <div className="flex items-center justify-between">

    <div className="flex items-center gap-4">

<div
  className="rounded-2xl p-3 transition-all duration-300"
  style={{
    backgroundColor: `${brandColor}20`, // light version of selected color
  }}
>
  <Palette
    size={24}
    style={{
      color: brandColor,
    }}
  />
</div>

      <div>

        <h3 className="text-lg font-semibold text-gray-800">
          Theme Color
        </h3>

        <p className="text-sm text-gray-500">
          Select the primary color for your store.
        </p>

      </div>

    </div>

    <div className="flex items-center gap-3">

      <input
        type="color"
        value={brandColor}
        onChange={(e) =>
          setBrandColor(e.target.value)
        }
        className="h-10 w-10 cursor-pointer rounded-full border-2 border-gray-200"
      />

      <span className="font-mono text-sm text-gray-600">
        {brandColor}
      </span>

    </div>

  </div>

</Card>

        <button
          onClick={saveBranding}
          className="mt-8 flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#1A4D2E] to-[#2D6A4F] px-6 py-3 text-white font-semibold shadow-lg transition hover:scale-105"
        >
          <Save size={18} />
          Save Branding
        </button>
      </div>
    </Card>
  );
};

export default Branding;
