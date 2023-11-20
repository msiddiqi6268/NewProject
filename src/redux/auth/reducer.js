import {
  LOGIN_REQUEST, REGISTER_ERROR, REGISTER_REQUEST, REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_ERROR,

} from "./constants";
import toast from "react-hot-toast";  
const initial = {
  accessToken: localStorage.getItem('accessToken') ? localStorage.getItem('accessToken') : null,
  refreshToken: localStorage.getItem('refreshToken') ? localStorage.getItem('refreshToken') : null,
  isAuthenticated: false,
  loading: false,
  user: localStorage.getItem('user') ? localStorage.getItem('user') : null,
  error: null,
  success: null
};
const authReducer = (state = initial, action) => {
  let toastId = null
  switch (action.type) {

// =============================================================================
// REGISTRATION
// =============================================================================
    case REGISTER_REQUEST:
      toast.dismiss();
      toastId = toast.success('Request Sent! Please Wait...')
      state =  { ...state, loading: true }
      break;

    case REGISTER_SUCCESS:
      localStorage.setItem('user', JSON.stringify(action.resp.data.user))
      localStorage.setItem('accessToken', action.resp.data.accessToken)
      localStorage.setItem('refreshToken', action.resp.data.refreshToken)
      toast.dismiss();
      toastId = toast.success('User Registration Successfull!')
      window.location.replace(`${action.resp.data.user.role}/verification`)
      state =  {
        ...state, loading: false,
        success: "User Registration Successfull!",
        user: action.resp.data.user,
        accessToken: action.resp.data.accessToken,
        refreshToken: action.resp.data.refreshToken,
      }
      break



    case REGISTER_ERROR:
      toast.dismiss();
      toastId = toast.error(action.err.response.data.message)
      state =  { ...state, error: action.err.response.data.message };
      break

// =============================================================================
// LOGIN
// =============================================================================
    case LOGIN_REQUEST:
      toast.dismiss()
      toastId = toast.loading("Please Wait...")
      state = { ...state, loading: true }
      break

    case LOGIN_SUCCESS:
      console.log(action.resp)
      // const user = action.resp.data.user
      localStorage.setItem('accessToken', action.resp.data.access)
      localStorage.setItem('refreshToken', action.resp.data.refresh)
      toast.dismiss();
      toastId = toast.success('Login Successfull!')
      window.location.replace(`/dashboard`)
      break;

    case LOGIN_ERROR:
      toast.dismiss();
      toastId = toast.error(action.err.response.data.detail)
      state = { ...state, error: action.err.response.data.detail };
      break;

    default:
      return state;
  }
  return state;
};

export default authReducer;
