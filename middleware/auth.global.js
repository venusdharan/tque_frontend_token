// middleware/auth.js
import { jwtDecode } from "jwt-decode";
export default defineNuxtRouteMiddleware(async (to, from) => {
    try {
      
      // const { account } = useAppwrite()
  
      // // Check if the user is authenticated
      // var _acc = await account.get(); 

      // console.log(_acc)
  
      // // If authenticated and going to /auth/login, redirect to /
      // if (to.path === '/auth/login') {
      //   return await navigateTo('/');
      // }

      // if(localStorage.getItem("auth_token")){
      //   var token = localStorage.getItem("auth_token");
      //   try {
      //     const decoded = jwtDecode(token);
      //     if(decoded.exp){
      //       if (Date.now() >= exp * 1000) {
      //         // return false;
      //         //check with server if valid
      //       }else{
      //         return await navigateTo('/auth/login?redirect='+to.path);
      //       }
      //     }else{
      //       return await navigateTo('/auth/login?redirect='+to.path);
      //     }
      //   } catch (error) {
      //     return await navigateTo('/auth/login?redirect='+to.path);
      //   }
        
      // }else{
      //   return await navigateTo('/auth/login?redirect='+to.path);
      // }


    } catch (error) {
      console.log(error)
      // If not authenticated and not going to /auth/login, redirect to /auth/login

      // if (to.path !== '/auth/login') {
      //   return await navigateTo('/auth/login?redirect='+to.path);
      // }

    }
  });