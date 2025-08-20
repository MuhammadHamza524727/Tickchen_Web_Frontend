import React, { useEffect, useState } from "react";
import axios from "axios";
import { assets } from "@/assets/assets";
import { User, Mail, Shield } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  // Profile fetch on page load
  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await axios.get("https://tickchen-web-backend.vercel.app/api/user/profile", {
        withCredentials: true,
      });
      setProfile(res.data); // data = { username, email, role, profileImage }
    } catch (err) {
      console.error("Profile fetch error:", err);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select an image first");

    const formData = new FormData();
    formData.append("profileImage", file);

    try {
      setLoading(true);
      const res = await axios.put(
        `https://tickchen-web-backend.vercel.app/api/users/profile/image`,
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      // Update frontend state with latest backend user
      setProfile(res.data.user);
      setPreview(null);
      setFile(null);
    } catch (err) {
      console.error("Upload error:", err);
    } finally {
      setLoading(false);
    }
  };

  if (!profile) return <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-300 text-sm"></p>
      </div>
    </div>;;

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-[#0A0B0A] text-white p-6"
      style={{ backgroundImage: `url(${assets.bg})` }}
    >
      <div className="bg-[#111] rounded-2xl shadow-2xl p-8 max-w-lg w-full border border-gray-800">
        {/* Profile Image */}
        <div className="flex flex-col items-center gap-4">
          <img
            src={
              preview || profile.profileImage || "https://via.placeholder.com/150"
            }
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-gray-700 object-cover shadow-lg"
          />
          <label className="cursor-pointer bg-gray-800 px-4 py-2 rounded-lg text-sm hover:bg-gray-700 transition">
            Choose Image
            <input type="file" onChange={handleFileChange} className="hidden" />
          </label>

          {/* Alert Dialog Trigger for Upload */}
          {file && (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <button
                  disabled={loading}
                  className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:opacity-90 transition"
                >
                  {loading ? "Uploading..." : "Upload Image"}
                </button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will update your profile image.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleUpload}>
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
        </div>

        {/* Profile Info */}
        <div className="mt-10 space-y-4">
          <div className="flex items-center gap-3 bg-gray-900 p-3 rounded-lg border border-gray-800">
            <User className="text-pink-400 w-5 h-5" />
            <div>
              <p className="text-xs uppercase text-gray-400 tracking-wide">
                Username
              </p>
              <p className="text-lg font-medium text-white">{profile.username}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-gray-900 p-3 rounded-lg border border-gray-800">
            <Mail className="text-yellow-400 w-5 h-5" />
            <div>
              <p className="text-xs uppercase text-gray-400 tracking-wide">
                Email
              </p>
              <p className="text-lg font-medium text-white">{profile.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-gray-900 p-3 rounded-lg border border-gray-800">
            <Shield className="text-green-400 w-5 h-5" />
            <div>
              <p className="text-xs uppercase text-gray-400 tracking-wide">
                Role
              </p>
              <p className="text-lg font-medium text-white">{profile.role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
