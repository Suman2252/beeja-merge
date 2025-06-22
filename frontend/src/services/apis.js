const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:4000"

export const authEndpoints = {
  SENDOTP_API: BASE_URL + "/auth/sendotp",
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
  RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
  RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
}

export const profileEndpoints = {
  GET_USER_DETAILS_API: BASE_URL + "/profile/getUserDetails",
  GET_INSTRUCTOR_DATA_API: BASE_URL + "/profile/instructorDashboard",
}

export const studentEndpoints = {
  COURSE_PAYMENT_API: BASE_URL + "/payment/capturePayment",
  SEND_PAYMENT_SUCCESS_EMAIL_API: BASE_URL + "/payment/sendPaymentSuccessEmail",
}

export const courseEndpoints = {
  GET_ALL_COURSE_API: BASE_URL + "/course/getAllCourses",
  CREATE_RATING_API: BASE_URL + "/course/createRating",
}

export const ratingsEndpoints = {
  REVIEWS_DETAILS_API: BASE_URL + "/course/getReviews",
}

export const categories = {
  CATEGORIES_API: BASE_URL + "/course/showAllCategories",
}

export const catalogData = {
  CATALOGPAGEDATA_API: BASE_URL + "/course/getCategoryPageDetails",
  CONTACT_US_API: BASE_URL + "/reach/contact",
}

export const settingsEndpoints = {
  UPDATE_DISPLAY_PICTURE_API: BASE_URL + "/profile/updateUserProfileImage",
}

export const courseAccessEndpoints = {
  GET_FREE_COURSES_API: BASE_URL + "/course/getFreeCourses",
  REQUEST_COURSE_ACCESS_API: BASE_URL + "/course/requestAccess",
  GET_USER_ACCESS_REQUESTS_API: BASE_URL + "/course/getUserAccessRequests",
  GET_ALL_ACCESS_REQUESTS_API: BASE_URL + "/course/getAllAccessRequests",
  HANDLE_ACCESS_REQUEST_API: BASE_URL + "/course/handleAccessRequest/:requestId",
}

// Export endpoints for backward compatibility
export const endpoints = authEndpoints
