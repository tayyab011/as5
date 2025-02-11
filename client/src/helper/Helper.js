import toast from "react-hot-toast"
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
class formhelper{
IsEmpty(value){
    return value.length === 0 //true if get empty
}
    



getbase64(file){
return new Promise((resolve,reject)=>{
    let reader =new FileReader()
    reader.readAsDataURL(file)
    reader.onload=()=>{resolve(reader.result)}
    reader.onerror = (err)=>{reject(err)}
})
}


successtoast(msg){
 toast.success(msg);
}
errortoast(msg){
  toast.error(msg);
}




 DeleteAlert() {
    return MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      // icon: "warning",
      iconHtml: "icon",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        return true;
      }
    });
  }


 isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}




}

 export const {
   getbase64,
   successtoast,
   errortoast,
   IsEmpty,
   DeleteAlert,
   isValidEmail,
 } = new formhelper();