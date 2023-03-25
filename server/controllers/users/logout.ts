// @description Destroy express session when user logouts or leave change password page
// @route DELETE /api/v1/users/logout
// @access Public
import asyncHandler from "express-async-handler";

const logout = asyncHandler(async (req, res) => {
  req.session.destroy(() => {
    if (process.env.NODE_ENV === "development")
      console.log("Session destroyed"); // eslint-disable-line no-console
  });

  res.json({ message: "User logged out" });
});

export default logout;
