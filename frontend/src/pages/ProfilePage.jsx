import { useState, useEffect } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Camera, Mail, User, Edit2, Check, X } from "lucide-react";

const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);
  const [fullName, setFullName] = useState(authUser?.fullName || "");
  const [isUpdatingName, setIsUpdatingName] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  const handleNameUpdate = async () => {
    if (!fullName.trim() || fullName === authUser?.fullName) return;
    setIsUpdatingName(true);
    try {
      await updateProfile({ fullName: fullName.trim() });
      setIsEditingName(false);
    } catch (error) {
      console.error("Failed to update name:", error);
    } finally {
      setIsUpdatingName(false);
    }
  };

  const cancelNameEdit = () => {
    setFullName(authUser?.fullName || "");
    setIsEditingName(false);
  };

  useEffect(() => {
    if (authUser?.fullName) {
      setFullName(authUser.fullName);
    }
  }, [authUser?.fullName]);

  return (
    <div className="h-screen pt-20">
      <div className="max-w-2xl mx-auto p-4 py-8">
        <div className="bg-base-300 rounded-xl p-6 space-y-8">
          <div className="text-center">
            <h1 className="text-2xl font-semibold ">Profile</h1>
            <p className="mt-2">Your profile information</p>
          </div>

          {/* avatar upload section */}

          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <img
                src={selectedImg || authUser.profilePic || "/avatar.png"}
                alt="Profile"
                className="size-32 rounded-full object-cover border-4 "
              />
              <label
                htmlFor="avatar-upload"
                className={`
                  absolute bottom-0 right-0 
                  bg-base-content hover:scale-105
                  p-2 rounded-full cursor-pointer 
                  transition-all duration-200
                  ${isUpdatingProfile ? "animate-pulse pointer-events-none" : ""}
                `}
              >
                <Camera className="w-5 h-5 text-base-200" />
                <input
                  type="file"
                  id="avatar-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={isUpdatingProfile}
                />
              </label>
            </div>
            <p className="text-sm text-zinc-400">
              {isUpdatingProfile ? "Uploading..." : "Click the camera icon to update your photo"}
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                <User className="w-4 h-4" />
                Full Name
              </div>
              {isEditingName ? (
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    className="flex-1 px-4 py-2.5 bg-base-200 rounded-lg border input input-bordered"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    disabled={isUpdatingName}
                  />
                  <button
                    onClick={handleNameUpdate}
                    className="btn btn-sm btn-success"
                    disabled={isUpdatingName || !fullName.trim() || fullName === authUser?.fullName}
                  >
                    <Check className="w-4 h-4" />
                  </button>
                  <button
                    onClick={cancelNameEdit}
                    className="btn btn-sm btn-error"
                    disabled={isUpdatingName}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="flex items-center justify-between px-4 py-2.5 bg-base-200 rounded-lg border">
                  <span>{authUser?.fullName}</span>
                  <button
                    onClick={() => setIsEditingName(true)}
                    className="btn btn-sm btn-ghost"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Address
              </div>
              <input
                type="email"
                className="px-4 py-2.5 bg-base-200 rounded-lg border input input-bordered w-full opacity-50 cursor-not-allowed"
                value={authUser?.email}
                disabled
              />
            </div>
          </div>

          <div className="mt-6 bg-base-300 rounded-xl p-6">
            <h2 className="text-lg font-medium  mb-4">Account Information</h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between py-2 border-b border-zinc-700">
                <span>Member Since</span>
                <span>{new Date(authUser.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span>Account Status</span>
                <span className="text-green-500">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;
