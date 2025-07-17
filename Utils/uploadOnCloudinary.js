const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const path = require("path");

cloudinary.config({
  cloud_name: "dkx72npfc",
  api_key: "293144271669796",
  api_secret: "ok0VES3EfjHOpPtNBPUcsr7bNmA",
});
const uploadOnCloudinary = async (localFilePath) => {
  try {
    const formattedPath = path.resolve(localFilePath).replace(/\\/g, "/");

    const result = await cloudinary.uploader.upload(formattedPath, {
      resource_type: "image",
    });

    fs.unlinkSync(formattedPath); // Cleanup local file after upload

    return result;
  } catch (error) {
    console.error("Cloudinary Upload Error:", error);
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath); // Cleanup even on failure
    }
    return null;
  }
};

module.exports = uploadOnCloudinary;
