import { useRef, useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Store,
  CalendarDays,
  Camera,
  ShieldCheck,
  LogOut,
  Edit3,
} from "lucide-react";
import { motion } from "framer-motion";
import Card from "../../components/UI/Card";
import Button from "../../components/UI/Button";
import SectionTitle from "../../components/UI/SectionTitle";
import defaultAvatar from "../../assets/default-avatar.svg";

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [profileImage, setProfileImage] = useState(defaultAvatar);
    const fileInputRef = useRef(null);
const [profile, setProfile] = useState({
  name: "Seller Name",
  email: "seller@bizbitenow.com",
  phone: "+91 9876543210",
  restaurant: "BizBite Cafe",
  address: "Ambala, Haryana",
});
  return (
    <motion.div
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
>
    <div className="space-y-8">

      <SectionTitle
        title="Seller Profile"
        subtitle="Manage your personal and business information."
      />

      <div className="grid lg:grid-cols-3 gap-6">

        {/* Left */}

        <Card className="rounded-3xl shadow-sm">

          <div className="flex flex-col items-center">

            <div className="relative">
              <img
                src={profileImage}
                alt="Profile"
                className="h-36 w-36 rounded-full object-cover border-4 border-green-100"
              />

              <button
                onClick={() => fileInputRef.current.click()}
                className="absolute bottom-1 right-1 h-10 w-10 rounded-full bg-green-700 text-white flex items-center justify-center hover:bg-green-800 transition"
              >
                <Camera size={18} />
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => {
                  const file = e.target.files[0];

                  if (!file) return;

                  setProfileImage(URL.createObjectURL(file));
                }}
              />

            </div>

            <h2 className="mt-5 text-2xl font-bold">
              Rahul Sharma
            </h2>

            <p className="text-gray-500">
              Restaurant Owner
            </p>

            <span className="mt-4 flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-green-700 font-semibold">
              <ShieldCheck size={18} />
              Verified Seller
            </span>

          </div>

        </Card>

        {/* Right */}

        <div className="lg:col-span-2 space-y-6">

          <Card className="rounded-3xl">

            <div className="flex items-center justify-between mb-8">

              <h2 className="text-xl font-bold">
                Personal Information
              </h2>

            <button
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center gap-2 text-green-700 font-semibold"
            >
            <Edit3 size={18} />
            {isEditing ? "Cancel" : "Edit"}
            </button>

            </div>

            <div className="grid md:grid-cols-2 gap-6">

<Info
  icon={<User size={18} />}
  label="Owner Name"
  value={profile.name}
  field="name"
  isEditing={isEditing}
  profile={profile}
  setProfile={setProfile}
/>

<Info
  icon={<Mail size={18} />}
  label="Email"
  value={profile.email}
  field="email"
  isEditing={isEditing}
  profile={profile}
  setProfile={setProfile}
/>

<Info
  icon={<Phone size={18} />}
  label="Phone"
  value={profile.phone}
  field="phone"
  isEditing={isEditing}
  profile={profile}
  setProfile={setProfile}
/>

<Info
  icon={<Store size={18} />}
  label="Restaurant"
  value={profile.restaurant}
  field="restaurant"
  isEditing={isEditing}
  profile={profile}
  setProfile={setProfile}
/>

<Info
  icon={<MapPin size={18} />}
  label="Address"
  value={profile.address}
  field="address"
  isEditing={isEditing}
  profile={profile}
  setProfile={setProfile}
/>
{isEditing && (
  <div className="py-2 px-5 flex items-center gap-2">
    <Button
      onClick={() => {
        localStorage.setItem(
          "sellerProfile",
          JSON.stringify(profile)
        );
        setIsEditing(false);
      }}
      variant="primary"
    >
      Save Changes
    </Button>
  </div>
)}
            </div>

          </Card>

          <Card className="rounded-3xl">

            <h2 className="text-xl font-bold mb-8">
              Store Information
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <Info
                icon={<Store size={18} />}
                label="Store Name"
                value="BizBiteNow"
              />

              <Info
                icon={<Store size={18} />}
                label="Category"
                value="Fast Food"
              />

              <Info
                icon={<MapPin size={18} />}
                label="Address"
                value="Sector 45, Gurugram"
              />

              <Info
                icon={<ShieldCheck size={18} />}
                label="Store Status"
                value="Open"
              />

            </div>

          </Card>

          <Card className="rounded-3xl">

            <button className="flex items-center justify-center gap-2 rounded-2xl bg-red-600 px-6 py-3 text-white font-semibold hover:bg-red-700 transition">
              <LogOut size={18} />
              Logout
            </button>

          </Card>

        </div>

      </div>

    </div>
    </motion.div>
  );
};

const Info = ({
  icon,
  label,
  value,
  field,
  isEditing,
  profile,
  setProfile,
}) => (
  <div className="rounded-2xl border border-gray-200 p-5 hover:shadow-md transition">

    <div className="flex items-center gap-2 text-green-700 mb-3">
      {icon}
      <span className="font-semibold">{label}</span>
    </div>

    {isEditing ? (
      <input
        type="text"
        value={value}
        onChange={(e) =>
          setProfile({
            ...profile,
            [field]: e.target.value,
          })
        }
        className="w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:border-green-600"
      />
    ) : (
      <p className="text-gray-700 font-medium">{value}</p>
    )}
  </div>

);

export default Profile;