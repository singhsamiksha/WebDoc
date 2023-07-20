function submitConsultation() {
   const formData = new formData(doucument.getElementById("consultationform"));

   const formDataObject={};
   formData.forEach((value,key) => {
    formDataObject[key]=value;
   })

   console.log(formDataObject);
   alert("Successfully Submitted!")

   
}

